/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-07 19:09:27
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-08 00:08:43
 */
import * as THREE from 'three'
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js'

import Viewer from '@/three'
export class Game {
  clock: THREE.Clock
  /** 视图 */
  viewer: Viewer
  group: THREE.Group
  css3Render!: CSS3DRenderer
  /** 加载器 */
  textLoader!: THREE.TextureLoader
  constructor(viewer: Viewer) {
    this.viewer = viewer
    viewer.useLoadingManager()
    this.clock = new THREE.Clock()
    this.group = new THREE.Group()
    this.textLoader = new THREE.TextureLoader(viewer.loadmanager)
    this.textLoader.setCrossOrigin('')
    viewer.scene.add(this.group)
    this.init()
  }
  init() {
    const { width, height } = this.viewer.container.getBoundingClientRect()
    this.css3Render = new CSS3DRenderer()
    this.css3Render.setSize(width, height)
    this.css3Render.domElement.style.position = 'absolute'
    this.css3Render.domElement.style.pointerEvents = 'none'
    this.css3Render.domElement.style.top = '0px'
    this.css3Render.domElement.style.left = '0px'
    const ele = this.css3Render.domElement as HTMLDivElement
    ele.id = 'tempId'
    this.viewer.container.appendChild(ele)
    this.loadSky()
    this.createCircle()
    this.createRing()
    this.createLine()
  }
  render() {
    this.viewer.render()
  }
  /** 加载天空 */
  loadSky() {
    this.textLoader.setPath('nebularOrbit/img/')
    this.textLoader.load(
      '背景星空图.png',
      (texture) => {
        this.viewer.scene.background = texture
        this.render()
      },
      (xhr) => {
        this.viewer.onProgress('背景星空图.png', xhr)
      }
    )
  }
  /** 创建星云 */
  createCircle() {
    this.textLoader.setPath('nebularOrbit/img/')
    this.textLoader.load(
      '生平-背景圈.png',
      (texture) => {
        texture.encoding = THREE.sRGBEncoding
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 1
        })
        const geometry = new THREE.PlaneGeometry(230, 240)
        const plane = new THREE.Mesh(geometry, material)
        plane.rotation.set(0, 0, 0)
        this.group.add(plane)
        this.render()
      },
      (xhr) => {
        this.viewer.onProgress('生平-背景圈.png', xhr)
      }
    )

    // return plane
  }
  /** 创建圆环 */
  createRing() {
    const geometry = new THREE.RingGeometry(80, 80.8, 200)
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0, 0, -1)
    this.group.add(mesh)
    // return mesh
  }
  /** 创建线段 */
  createLine() {
    const arc = new THREE.ArcCurve(0, 0, 80.5, 1.6, 1.6 + 2 * Math.PI, false)
    const allPointArr = arc.getPoints(270)
    const pointArr = []
    for (let i = 0; i < 27; i++) {
      const pointIndex = i * 10
      pointArr.push(allPointArr[pointIndex])
    }

    // const material = new THREE.LineBasicMaterial({
    //   color: 0xff0000,
    //   linewidth: 1,
    //   linecap: 'round',
    //   linejoin: 'round'
    // })

    // const lineGeometry = new THREE.BufferGeometry().setFromPoints(allPointArr)
    // const line = new THREE.Line(lineGeometry, material)
    // line.userData.pointArr = pointArr
    // line.userData.allPointArr = allPointArr
    // line.position.set(0, 0, -1)
    // this.group.add(line)
    // return line
  }
  update = () => {
    const dt = this.clock.getDelta()
    this.render()
  }
}
