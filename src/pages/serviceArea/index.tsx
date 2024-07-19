/*
 * @Description: 红格服务区
 * @Author: ldx
 * @Date: 2023-11-03 23:33:27
 * @LastEditors: ldx
 * @LastEditTime: 2024-07-18 14:22:48
 */

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

import Viewer from './viewer'

// import { useEffect } from 'react'
const Propagate = () => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const viewer = new Viewer(ref.current)
    viewer.useOrbitControls()
    viewer.listen()
    viewer.useLoadingManager()
    viewer.loadServiceArea()

  }, [])

  return (
    <div className="w-100% h-100% relative">
      <div className="gunplay w-100% h-100%" ref={ref}></div>
    </div>
  )
}
export default Propagate
