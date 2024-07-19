/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-04 19:09:27
 * @LastEditors: ldx
 * @LastEditTime: 2024-02-27 14:15:57
 */
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'

import Viewer from '@/three'
import data from './data.json'
const triangleData = [
  { start: [93.59353, 37.2213], end: [100.641771, 38.705263], id: '123', ratio: 0.5 },
  { start: [126.058665, 45.207778], end: [122.768401, 41.476168], id: '125', ratio: 0.6 },
]
const areaMaterial = new THREE.MeshBasicMaterial({
  color: '#999999',
  // color: 0x00ff00,
  side: THREE.FrontSide,
  transparent: true,
  opacity: 0.4
})
const outlineMaterial = new THREE.LineBasicMaterial({
  color: 0xffffff,
  side: THREE.FrontSide,
  transparent: true,
  opacity: 0.4
})
const lineMaterial = new THREE.LineBasicMaterial({
  color: 0xe0e0e0,
  side: THREE.FrontSide,
  // transparent: true,
  // opacity: 0.4
})
const meshMaterial = new THREE.MeshBasicMaterial({
  color: 0xe0e0e0,
  side: THREE.FrontSide,
  transparent: true,
  opacity: 0.6
})
export class Game {
  clock: THREE.Clock
  /** 加载器 */
  textLoader!: THREE.TextureLoader
  fileLoader!: THREE.FileLoader
  fontLoad!: FontLoader
  /** 视图 */
  viewer: Viewer
  controls!: OrbitControls
  bubbleGroup = new THREE.Group()
  triangleGroup = new THREE.Group()
  zUnitVector = new THREE.Vector3(0, 0, 1) //沿着z轴方向单位向量
  constructor(viewer: Viewer) {
    this.viewer = viewer
    this.textLoader = new THREE.TextureLoader()
    this.textLoader.setCrossOrigin('')
    // viewer.renderer.outputEncoding = THREE.sRGBEncoding
    this.fileLoader = new THREE.FileLoader(viewer.loadmanager)
    this.fileLoader.setResponseType('json')
    this.fontLoad = new FontLoader(viewer.loadmanager)
    this.clock = new THREE.Clock()

    this.listen()
  }

  onResize = () => {
    const { width, height } = this.viewer.container.getBoundingClientRect()
    const k = width / height
    this.viewer.renderer.setSize(width, height)
    this.viewer.camera.aspect = k
    this.viewer.camera.updateProjectionMatrix()
    this.render()
  }
  listen = () => {
    window.addEventListener('resize', this.onResize)
  }
  destroy = () => {
    window.removeEventListener('resize', this.onResize)
  }
  startGame() {
    this.viewer.scene.translateX(-100)
    this.viewer.scene.translateY(-40)
    this.viewer.scene.translateZ(120)

    this.loadSky()
    this.drawMap()
    this.drawBubble()
    this.drawTriangle(triangleData)
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
  /** 绘制地图 */
  drawMap(){
    const shapeGroup = new THREE.Group()
    this.fileLoader.load(
      'propagate/data/world.json',
      (data: any) => {
        data.features.forEach((country: any) => {
          if (country.geometry.type === 'Polygon') {
            const pointArr: number[] = []
            const coordinates = country.geometry.coordinates[0] || []
            if (coordinates.length === 0) return
            coordinates.forEach((elem: any) => {
              pointArr.push(elem[0], elem[1], 0)

            })
            const area = this.drawShpae(coordinates, areaMaterial)
            const line = this.drawOutline(pointArr, outlineMaterial)
            shapeGroup.add(area,line)
          } else if (country.geometry.type === 'MultiPolygon') {
            country.geometry.coordinates.forEach((polygon: any) => {
              const pointArr: number[] = []
              const coordinates = polygon[0] || []
              if (coordinates.length === 0) return
              coordinates.forEach((elem: any) => {
                pointArr.push(elem[0], elem[1], 0)
              })
              const area = this.drawShpae(coordinates, areaMaterial)
              const line = this.drawOutline(pointArr, outlineMaterial)
              shapeGroup.add(area, line)
            })
          }
        })
        this.viewer.scene.add(shapeGroup)
        this.render()
      }
    )
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
  /** 绘制轮廓线 */
  drawOutline = (pointArr: number[], material: THREE.LineBasicMaterial) => {
    const geometry = new THREE.BufferGeometry()
    const vertices = new Float32Array(pointArr)
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    const line = new THREE.LineLoop(geometry, material)
    return line
  }
  drawBubble(){
    data.map(item=>{
      const geometry = new THREE.CircleGeometry(item.value/4, 32);
      const material = new THREE.MeshBasicMaterial({
        color: item.color || '#6496c2',
        transparent: true,
        side: THREE.FrontSide,
        opacity: 0.7
      });
      const circle = new THREE.Mesh(geometry, material);
      circle.position.set(item.lng,item.lat,0)

      this.bubbleGroup.add(circle)
    })
    this.viewer.scene.add(this.bubbleGroup)
  }
  /** 绘制飞线 */
  drawFlyLine(data: any){
    const start = new THREE.Vector3(data.start[0], data.start[1], 0)
    const end = new THREE.Vector3(data.end[0], data.end[1], 0)
    const point = start.clone().lerp(end.clone(), 0.5)
    // 绕z轴旋转90度
    const vector = start.clone().sub(end.clone()).applyAxisAngle(this.zUnitVector, Math.PI / 2).normalize()
    const length = start.clone().lerp(end.clone(), 0.1).sub(start.clone()).length()
    const center = point.clone().addScaledVector(vector.clone(), length)
    const curve = new THREE.QuadraticBezierCurve3(start, center, end)
    const number = curve.getLength() * 4
    const points = curve.getPoints(number)
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const line = new THREE.Line(geometry, lineMaterial)

    return line
  }
  /** 绘制三角面 */
  drawTriangleFacet(data: any){
    const start = new THREE.Vector3(data.start[0], data.start[1], 0)
    const end = new THREE.Vector3(data.end[0], data.end[1], 0)
    const point = start.clone().lerp(end.clone(), 0.5)
    // 绕z轴旋转90度
    const vector = start.clone().sub(end.clone()).applyAxisAngle(this.zUnitVector, Math.PI / 2).normalize()
    const length = start.clone().lerp(end.clone(), 0.1).sub(start.clone()).length()
    const center = point.clone().addScaledVector(vector.clone(), length)
    const curve = new THREE.QuadraticBezierCurve3(start, center, end)
    const ratioPoint = curve.getPoint(data.ratio);
   return  this.computedTriangleCorrelation(start, ratioPoint)
  }
  drawTriangle(data:any[]){
    this.viewer.scene.add(this.triangleGroup)
    data.forEach(item=>{
      const geometry = this.drawTriangleFacet(item)
      const mesh = new THREE.Mesh(geometry, meshMaterial);
      mesh.name = item.id
      this.triangleGroup.add(mesh)
      const line = this.drawFlyLine(item)
      this.viewer.scene.add(line)
    })

  }
  /** 计算三角形相关数据 */
  computedTriangleCorrelation(start: THREE.Vector3, end: THREE.Vector3){
    const length = start.clone().sub(end.clone()).length() / 3
    // 绕z轴旋转90度
    const vector1 = start.clone().sub(end.clone()).applyAxisAngle(this.zUnitVector, Math.PI / 2).normalize()
    const newPoint1 = end.clone().addScaledVector(vector1.clone(), length)

    const vector2 = start.clone().sub(end.clone()).applyAxisAngle(this.zUnitVector, -Math.PI / 2).normalize()
    const newPoint2 = end.clone().addScaledVector(vector2.clone(), length)

    const points1 = this.getCurvePoints(start, newPoint1, -Math.PI / 2)
    const points2 = this.getCurvePoints(start, newPoint2, Math.PI / 2)

    const heartShape = new THREE.Shape();
    const pointArr = points1.concat(points2.reverse())
    heartShape.moveTo(pointArr[0].x, pointArr[0].y);
    for (let i = 1; i < pointArr.length; i++) {
      const point = pointArr[i];
      heartShape.lineTo(point.x, point.y)
    }
    const geometry = new THREE.ShapeGeometry(heartShape);
   return geometry
  }
  getCurvePoints(start: THREE.Vector3, end: THREE.Vector3, angle:number){
    const point = start.clone().lerp(end.clone(), 0.7)
    const vector = start.clone().sub(end.clone()).applyAxisAngle(this.zUnitVector, angle).normalize()
    const length = start.clone().lerp(end.clone(), 0.14).sub(start.clone()).length()
    const center = point.clone().addScaledVector(vector.clone(), length)
    const curve = new THREE.QuadraticBezierCurve3(start, center, end)
    const number = curve.getLength() * 4
    const points = curve.getPoints(number)
    return points
  }
  update(dt:number){
    triangleData.forEach(item => {
      item.ratio = (item.ratio + 0.002) %1
      const geometry = this.drawTriangleFacet(item)
      const mesh = this.triangleGroup.getObjectByName(item.id) as THREE.Mesh
      mesh.geometry.dispose()
      mesh.geometry = geometry
    })
    data.forEach((item,i) => {
      if (item.color === '#fd8d3c'){
        if (Number(item.value) < 1.2){
          item.value = Number(item.value) + 0.004
        }else{
          item.value = 0
        }
      }
      if (item.color !== '#fd8d3c'){
        if (Number(item.value) > 0) {
          item.value = Number(item.value)  - 0.003
        }else{
          item.value = 0.78
        }
      }
      const mesh = this.bubbleGroup.children[i] as THREE.Mesh
      mesh.geometry.dispose()
      mesh.geometry = new THREE.CircleGeometry(item.value, 32);
    })
    this.render()
  }

}
const radianAOB = (A: THREE.Vector3, B: THREE.Vector3, O: THREE.Vector3) => {
  const dir1 = A.clone().sub(O).normalize()
  const dir2 = B.clone().sub(O).normalize()
  const cosAngle = dir1.clone().dot(dir2)
  const rad = Math.acos(cosAngle)
  return rad
}
