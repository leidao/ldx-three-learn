/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-04 19:09:27
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-04 21:22:23
 */
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js'

import { threeToScreen } from '@/three'
import Viewer from '@/three'
export class Game {
  clock: THREE.Clock
  /** 加载器 */
  textLoader!: THREE.TextureLoader
  fileLoader!: THREE.FileLoader
  fontLoad!: FontLoader
  /** 视图 */
  viewer: Viewer
  uniforms: any = {}
  labelRenderer!: CSS2DRenderer
  controls!: OrbitControls
  constructor(viewer: Viewer) {
    this.viewer = viewer
    this.textLoader = new THREE.TextureLoader(this.viewer.loadmanager)
    this.textLoader.setCrossOrigin('')
    this.fileLoader = new THREE.FileLoader(this.viewer.loadmanager)
    this.fileLoader.setResponseType('json')
    this.fontLoad = new FontLoader()
    this.clock = new THREE.Clock()
    this.uniforms = {}
  }
  useCss3Render(data: any[]) {
    const { width, height } = this.viewer.container.getBoundingClientRect()
    this.labelRenderer = new CSS2DRenderer()
    this.labelRenderer.setSize(width, height)
    this.labelRenderer.domElement.style.position = 'absolute'
    this.labelRenderer.domElement.style.top = '0px'
    const ele = this.labelRenderer.domElement as HTMLDivElement
    ele.id = 'tempId'
    document.body.appendChild(this.labelRenderer.domElement)
    // 创建控件对象
    this.controls = new OrbitControls(
      this.viewer.camera,
      this.labelRenderer.domElement
    )
    //监听鼠标、键盘事件
    this.controls.addEventListener('change', () => {
      this.render()
      // this.camera.updateMatrixWorld(true)
      const v3 = new THREE.Vector3()
      this.viewer.camera.getWorldPosition(v3)
      this.createText(data, v3.z)
    })
    this.controls.enableRotate = false
    this.controls.minDistance = 50 // 最小距离
    this.controls.maxDistance = 200 // 最大距离
    this.controls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.ROTATE
    }
  }
  startGame() {
    this.loadSky()
    this.drawOutline()
    this.drawLocation([{ to: [117.045982, 35.794391], size: 35 }], true)
    this.fileLoader.load('propagate/data/map.json', (data: any) => {
      this.drawLines(data)
      this.drawFlyLine(data)
      this.createText(data)
      this.drawLocation(data)
      this.useCss3Render(data)
      this.viewer.scene.translateX(-10)
      this.viewer.scene.translateY(-15)
    })
  }
  render() {
    this.viewer.render()
  }
  /** 加载天空 */
  loadSky() {
    this.textLoader.load('propagate/img/bg.png', (texture) => {
      this.viewer.scene.background = texture
      this.render()
    })
  }
  createEarth = (R: number) => {
    this.textLoader.load('propagate/img/earth.png', (texture) => {
      const geometry = new THREE.SphereGeometry(R, 100, 100)
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        // transparent: true,
        opacity: 1
      })
      const sphere = new THREE.Mesh(geometry, material)
      this.viewer.scene.add(sphere)
      this.render()
    })
  }
  /** 绘制轮廓线 */
  drawOutline = () => {
    const lineGroup = new THREE.Group()
    const shapeGroup = new THREE.Group()

    const material = new THREE.MeshBasicMaterial({
      color: '#ffffff',
      // color: 0x00ffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35
    })
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.1
    })
    this.fileLoader.load('propagate/data/world.json', (data: any) => {
      data.features.forEach((country: any) => {
        if (country.geometry.type === 'Polygon') {
          const pointArr: number[] = []
          const coordinates = country.geometry.coordinates[0] || []
          if (coordinates.length === 0) return
          coordinates.forEach((elem: any) => {
            // const coord = lon2xyz(R * 1.00001, elem[0], elem[1])
            // pointArr.push(coord.x, coord.y, coord.z)
            pointArr.push(elem[0], elem[1], 0)
          })
          lineGroup.add(this.drawLineLoop(pointArr, lineMaterial))
          shapeGroup.add(this.drawShpae(coordinates, material))
        } else if (country.geometry.type === 'MultiPolygon') {
          country.geometry.coordinates.forEach((polygon: any) => {
            const pointArr: number[] = []
            const coordinates = polygon[0] || []
            if (coordinates.length === 0) return
            coordinates.forEach((elem: any) => {
              // const coord = lon2xyz(R * 1.00001, elem[0], elem[1])
              // pointArr.push(coord.x, coord.y, coord.z)
              pointArr.push(elem[0], elem[1], 0)
            })
            lineGroup.add(this.drawLineLoop(pointArr, lineMaterial))
            shapeGroup.add(this.drawShpae(coordinates, material))
          })
        }
      })
      this.viewer.scene.add(lineGroup)
      this.viewer.scene.add(shapeGroup)
      this.render()
    })
  }
  drawLineLoop = (pointArr: number[], material: THREE.LineBasicMaterial) => {
    const geometry = new THREE.BufferGeometry()
    const vertices = new Float32Array(pointArr)
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    const line = new THREE.LineLoop(geometry, material)
    return line
  }
  /** 绘制填充 */
  drawShpae = (pointArr: number[], material: THREE.MeshBasicMaterial) => {
    const vector2Arr: THREE.Vector2[] = []
    pointArr.forEach((elem: any) => {
      vector2Arr.push(new THREE.Vector2(elem[0], elem[1]))
    })

    const shape = new THREE.Shape(vector2Arr)
    const geometry = new THREE.ShapeGeometry(shape)
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
  }
  drawLines = (data: any) => {
    const material = new THREE.LineBasicMaterial({ color: 0xe0e0e0 })
    data.forEach((elem: any) => {
      const { from, to, name, isLine } = elem
      if (!to) return
      if (!isLine) return
      if (name === '曲阜') return
      const formXYZ = new THREE.Vector3(from[0], from[1], 0)
      const toXYZ = new THREE.Vector3(to[0], to[1], 0)
      const center = formXYZ.clone().lerp(toXYZ, 0.5)
      const length = formXYZ.clone().distanceTo(toXYZ)
      center.z += length / 3
      const number = length * 4
      const curve = new THREE.QuadraticBezierCurve3(formXYZ, center, toXYZ)

      const points = curve.getPoints(number)
      const geometry = new THREE.BufferGeometry().setFromPoints(points)

      const curveObject = new THREE.Line(geometry, material)
      this.viewer.scene.add(curveObject)
      this.render()
    })
  }

  drawFlyLine = (data: any) => {
    data.forEach((elem: any) => {
      const { from, to, name, isLine } = elem
      if (!to) return
      if (!isLine) return
      if (name === '曲阜') return
      // if (size < SIZE) return
      const positions: any[] = []
      const attrPositions: any[] = []
      const attrCindex: any[] = []
      const attrCnumber: any[] = []

      const formXYZ = new THREE.Vector3(from[0], from[1], 0)
      const toXYZ = new THREE.Vector3(to[0], to[1], 0)
      const center = formXYZ.clone().lerp(toXYZ, 0.5)
      const length = formXYZ.clone().distanceTo(toXYZ)
      center.z += length / 3
      const number = length * 8
      const curve = new THREE.QuadraticBezierCurve3(formXYZ, center, toXYZ)
      const points = curve.getPoints(number)
      // 粒子位置计算

      points.forEach((elem, i) => {
        const index = i / (number - 1)
        positions.push({
          x: elem.x,
          y: elem.y,
          z: elem.z
        })
        attrCindex.push(index)
        attrCnumber.push(i)
      })

      positions.forEach((p) => {
        attrPositions.push(p.x, p.y, p.z)
      })

      const geometry = new THREE.BufferGeometry()
      geometry.setFromPoints(points)
      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(attrPositions, 3)
      )
      // 传递当前所在位置
      geometry.setAttribute(
        'index',
        new THREE.Float32BufferAttribute(attrCindex, 1)
      )
      geometry.setAttribute(
        'current',
        new THREE.Float32BufferAttribute(attrCnumber, 1)
      )
      this.uniforms[name] = {
        uColor: {
          value: new THREE.Color(0x0ad5f0) // 颜色
        },
        uRange: {
          value: 20 // 显示当前范围的个数
        },
        uSize: {
          value: 3 // 粒子大小
        },
        uTotal: {
          value: number // 当前粒子的所有的总数
        },
        uTime: {
          value: 0 //
        },
        uSpeed: {
          value: (Math.random() * 4 + 4) / 10
        }
      }
      const shader = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        depthTest: false,
        blending: THREE.AdditiveBlending,
        uniforms: this.uniforms[name],
        vertexShader: `
        attribute float index;
        attribute float current;
        uniform float uTime;
        uniform float uSize;
        uniform float uSpeed;
        uniform float uRange; // 展示区间
        uniform float uTotal; // 粒子总数
        uniform vec3 uColor;
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
            // 需要当前显示的索引
            float size = uSize;
            float showNumber = uTotal * mod(uTime * uSpeed, 1.1);
            if (showNumber > current && showNumber < current + uRange) {
                float uIndex = ((current + uRange) - showNumber) / uRange;
                size *= uIndex;
                vOpacity = 1.0;
            } else {
                vOpacity = 0.0;
            }
            // 顶点着色器计算后的Position
            vColor = uColor;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            // 大小
            gl_PointSize = size * 300.0 / (-mvPosition.z);
        }`,
        fragmentShader: `
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
            float distanceToCenter = distance(gl_PointCoord,vec2(0.5));
            float strength = 1.0 - (distanceToCenter * 2.0);
            if(vOpacity <= 0.0){
              gl_FragColor = vec4(vColor, 0.0);
            }else{
              gl_FragColor = vec4(vColor, strength);
            }
        }`
      })
      // shader.onBeforeCompile = (shader) => {
      //   shader.uniforms.time = this.time
      //   shader.uniforms.uStartTime = this.StartTime
      // }

      const point = new THREE.Points(geometry, shader)
      this.viewer.scene.add(point)
    })
  }

  drawLocation = (data: any[], flag = false) => {
    const material = new THREE.MeshBasicMaterial({
      transparent: true,
      side: THREE.DoubleSide
    })
    this.textLoader.load('propagate/img/136.png', (texture) => {
      data.forEach((elem: any) => {
        const { to, size } = elem
        const uSize = Number(size) + 2
        const k = flag ? size : uSize > 16 ? 16 : uSize
        if (!to) return
        // const toXYZ = lon2xyz(R * 1.0001, lon, lat)
        const { x, y, z } = new THREE.Vector3(to[0], to[1], 0)
        const geometry = new THREE.PlaneGeometry(k, k)
        material.map = texture
        const mesh = new THREE.Mesh(geometry, material)
        // const coord = new THREE.Vector3(x, y, z).normalize()
        // const normal = new THREE.Vector3(0, 0, 1)
        // mesh.quaternion.setFromUnitVectors(normal, coord)
        mesh.position.set(x, y, z + 0.02)
        this.viewer.scene.add(mesh)
      })
      this.render()
    })
  }
  /** 绘制文字 */
  createText(data: any, distance = 180) {
    // const material = new THREE.MeshBasicMaterial({
    //   color: '#ffffff'
    // })
    // this.fontLoad.load('font/font2.json', (font) => {
    //   data.forEach((elem: any) => {
    //     const { to, name, size, isLine } = elem
    //     if (!name) return
    //     if (!isLine) return
    //     if (!to) return
    //     const { x, y, z } = new THREE.Vector3(to[0], to[1], 0.001)
    //     let text: string = name
    //     if (name !== '曲阜') {
    //       text = `${name} ${size} 所`
    //     }
    //     const geometry = new TextGeometry(text, {
    //       font: font,
    //       size: 2,
    //       height: 0.01,
    //       curveSegments: 30
    //     })
    //     geometry.center()

    //     const textMesh = new THREE.Mesh(geometry, material)
    //     textMesh.position.set(x, y - 2, z)
    //     this.viewer.scene.add(textMesh)
    //   })
    //   this.render()
    // })

    data.forEach((elem: any) => {
      const { to, name, size, isLine } = elem
      if (!name) return
      if (!isLine) return
      if (!to) return
      const vector = new THREE.Vector3(to[0] - 10, to[1] - 15, 0)
      const pixel = threeToScreen(
        this.viewer.camera,
        this.viewer.container,
        vector
      )
      if (!elem.div) {
        elem.div = document.createElement('div')
        elem.div.style.fontSize = name === '曲阜' ? '30px' : '22px'
        elem.div.style.color = '#ffffff'
        elem.div.style.position = 'absolute'
        elem.div.style.fontFamily = 'HanaA'
        elem.div.style.whiteSpace = 'nowrap'
      }
      elem.div.style.transform = `scale(${100 / distance})`
      let html = `<span>${name}</span> `
      if (size > 1) {
        html += `<span style="font-size:38px;vertical-align: sub;">${size}</span> <span>所</span>`
      }
      elem.div.innerHTML = html
      this.viewer.container.appendChild(elem.div)
      elem.div.style.left = `${pixel.x - elem.div.clientWidth / 2}px`
      elem.div.style.top = `${
        pixel.y - elem.div.clientHeight / 2
        // pixel.y - elem.div.clientHeight / 2 + (20 + size / 8 - distance / 12)
      }px`

      if (name == '曲阜') {
        elem.div.style.left = `${pixel.x - elem.div.clientWidth / 2 + 15}px`
        elem.div.style.top = `${
          pixel.y - elem.div.clientHeight / 2 + (40 + size / 8 - distance / 12)
        }px`
      }
    })
  }
  update = () => {
    const time = this.clock.getElapsedTime()
    Object.keys(this.uniforms).forEach((name) => {
      this.uniforms[name].uTime.value = time
    })
    this.render()
  }
}
