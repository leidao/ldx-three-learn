/*
 * @Description: 星云轨道
 * @Author: ldx
 * @Date: 2023-11-07 23:33:27
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-07 23:09:18
 */

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

import Viewer from '@/three'

import { Game } from './game'
// import { useEffect } from 'react'
const Propagate = () => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const viewer = new Viewer(ref.current)
    viewer.listen()

    const game = new Game(viewer)
    let id: number
    const animation = () => {
      game.update()
      id = requestAnimationFrame(animation)
    }
    animation()
    return () => {
      cancelIdleCallback(id)
    }
  }, [])

  return (
    <div className="w-100% h-100% relative">
      <div className="gunplay w-100% h-100%" ref={ref}></div>
    </div>
  )
}
export default Propagate
