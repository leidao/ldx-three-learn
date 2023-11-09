/*
 * @Description: 辅助函数
 * @Author: ldx
 * @Date: 2023-10-26 10:41:35
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-09 20:02:35
 */
import * as THREE from 'three'
export const lon2phi = (lng: number, lat: number) => {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 90) * (Math.PI / 180)
  return { phi, theta }
}
/** 经纬度转球面坐标 */
export const lon2xyz = (radius: number, lng: number, lat: number) => {
  const phi = (180 + lng) * (Math.PI / 180)
  const theta = (90 - lat) * (Math.PI / 180)
  return {
    x: -radius * Math.sin(theta) * Math.cos(phi),
    y: radius * Math.cos(theta),
    z: radius * Math.sin(theta) * Math.sin(phi)
  }
}
/** 球面坐标转经纬度 */
export const xyz2lon = (x: number, y: number, z: number, radius: number) => {
  const latRad = Math.asin(z / radius)
  const lonRad = Math.atan2(y, x)

  const lat = (latRad * 180) / Math.PI
  const lon = (lonRad * 180) / Math.PI

  return { lat, lon }
}
/** three坐标转换屏幕坐标 */
export const threeToScreen = (
  camera: THREE.PerspectiveCamera,
  container: HTMLDivElement,
  vector: THREE.Vector3
) => {
  // left, top 表示canvas画布相对body左右偏移量:像素
  // width,height 表示canvas画布的宽高
  const { left, top, width, height } = container.getBoundingClientRect()

  // standardVector是标准设备坐标
  const w = width / 2
  const h = height / 2
  const standardVector = vector.clone().project(camera)
  //标准设备坐标转屏幕坐标
  const x = Math.round(standardVector.x * w + w) + left
  const y = Math.round(-standardVector.y * h + h) + top
  return {
    x,
    y
  }
}
/** 根据三个点位获取外接圆的圆心坐标 */
export const threePointToCenter = (
  p1: THREE.Vector3,
  p2: THREE.Vector3,
  p3: THREE.Vector3
) => {
  const L1 = p1.lengthSq()
  const L2 = p2.lengthSq()
  const L3 = p3.lengthSq()
  const x1 = p1.x,
    y1 = p1.y,
    x2 = p2.x,
    y2 = p2.y,
    x3 = p3.x,
    y3 = p3.y
  const S = x1 * y2 + x2 * y3 + x3 * y1 - y1 * x2 - y2 * x3 - y3 * x1
  const x = (L2 * y3 + L1 * y2 + L3 * y1 - L2 * y1 - L3 * y2 - L1 * y3) / S / 2
  const y = (L3 * x2 + L2 * x1 + L1 * x3 - L1 * x2 - L2 * x3 - L3 * x1) / S / 2
  return new THREE.Vector3(x, y, 0)
}
/** 空间中任意两点旋转到XOY平面上 */
export const startEndQuaternion = (
  startSphere: THREE.Vector3,
  endSphere: THREE.Vector3
) => {
  /** 圆心坐标 */
  const orgin = new THREE.Vector3(0, 0, 0)
  const startDir = startSphere.clone().sub(orgin)
  const endDir = endSphere.clone().sub(orgin)
  const normal = startDir.clone().cross(endDir).normalize()
  const xoyNormal1 = new THREE.Vector3(0, 0, 1)
  /** 旋转到XOY平面 */
  const quaternion_XOY = new THREE.Quaternion().setFromUnitVectors(
    normal,
    xoyNormal1
  )
  const startSphereXOY = startSphere.clone().applyQuaternion(quaternion_XOY)
  const endSphereXOY = endSphere.clone().applyQuaternion(quaternion_XOY)

  const middleV3 = startSphereXOY.clone().add(endSphereXOY).multiplyScalar(0.5)
  const midDir = middleV3.clone().sub(orgin).normalize()
  const yDir = new THREE.Vector3(0, 1, 0)
  /** 旋转后y轴向上 */
  const quaternion_XOY_Y = new THREE.Quaternion().setFromUnitVectors(
    midDir,
    yDir
  )
  const startSphereXOY_Y = startSphereXOY
    .clone()
    .applyQuaternion(quaternion_XOY_Y.clone())

  const endSphereXOY_Y = endSphereXOY
    .clone()
    .applyQuaternion(quaternion_XOY_Y.clone())

  const quaternionInvert = quaternion_XOY
    .clone()
    .invert()
    .multiply(quaternion_XOY_Y.clone().invert())

  return {
    startSphere: startSphereXOY_Y,
    endSphere: endSphereXOY_Y,
    quaternion: quaternionInvert
  }
}
