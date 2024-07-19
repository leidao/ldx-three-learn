/*
 * @Description: 孔子学院全球传播
 * @Author: ldx
 * @Date: 2023-11-03 23:33:27
 * @LastEditors: ldx
 * @LastEditTime: 2024-02-27 14:13:47
 */

import { Radio } from 'antd'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

import Viewer from '@/three'

import { Game } from './game'
// import { useEffect } from 'react'
const Propagate = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState('3D')
  const [game, setGame] = useState<Game>()
  const [viewer, setViewer] = useState<Viewer>()
  useEffect(() => {
    if (!ref.current) return
    const viewer = new Viewer(ref.current)
    setViewer(viewer)
    viewer.useOrbitControls()
    viewer.controls.enableRotate = false
    const game = new Game(viewer)
    // setGame(game)
    game.startGame()
    let id: number
    const clock = new THREE.Clock()
    const animation = () => {
      const dt = clock.getDelta();
      game.update(dt)
      id = requestAnimationFrame(animation)
    }
    animation()
    return () => {
      cancelIdleCallback(id)
    }
  }, [])

  return (
    <div className="w-100% h-100% relative">
      <div className="gunplay w-100% h-100% " ref={ref}>
      </div>
    </div>
  )
}
export default Propagate
