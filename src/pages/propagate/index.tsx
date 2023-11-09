/*
 * @Description: 孔子学院全球传播
 * @Author: ldx
 * @Date: 2023-11-03 23:33:27
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-09 21:10:32
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
    // viewer.listen()
    // viewer.controls.enableRotate = false
    // viewer.controls.minDistance = 50 // 最小距离
    // viewer.controls.maxDistance = 200 // 最大距离
    // viewer.controls.mouseButtons = {
    //   LEFT: THREE.MOUSE.PAN,
    //   MIDDLE: THREE.MOUSE.DOLLY,
    //   RIGHT: THREE.MOUSE.ROTATE
    // }

    const game = new Game(viewer)
    setGame(game)
    game.startGame()
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
      <div className="gunplay w-100% h-100% " ref={ref}>
        <Radio.Group
          className="absolute top-20px right-20px z-999"
          buttonStyle="solid"
          value={value}
          onChange={(e) => {
            const value = e.target.value
            if (!game) return
            let time = value === '2D' ? 0 : 1
            if (value === '2D') {
              viewer?.scene.remove(game.group3D)
              game.group3D.traverse((child) => {
                if (child.name === '3d') {
                  ;(child as any).element.style.display = 'none'
                }
              })

              // game.controls.enableZoom = true
              game.controls.enablePan = true
              game.controls.enableRotate = false
              game.controls.mouseButtons = {
                LEFT: THREE.MOUSE.PAN,
                MIDDLE: THREE.MOUSE.DOLLY,
                RIGHT: THREE.MOUSE.ROTATE
              }
            } else {
              viewer?.scene.remove(game.group2D)

              game.group2D.traverse((child) => {
                if (child.name === '2d') {
                  ;(child as any).element.style.display = 'none'
                }
              })
              // game.controls.enableZoom = false
              game.controls.enablePan = false
              game.controls.enableRotate = true
              game.controls.mouseButtons = {
                LEFT: THREE.MOUSE.ROTATE,
                MIDDLE: THREE.MOUSE.DOLLY,
                RIGHT: THREE.MOUSE.PAN
              }
            }
            game.controls.reset()
            const animation = () => {
              if (value === '2D') {
                time += 0.01
              } else {
                time -= 0.01
              }
              if (time < 1.01 && time > -0.01) {
                game.sphere.scale.set(
                  1 + time * 0.8,
                  1 + time * 0.8,
                  1 + time * 0.8
                )
                game.customUniforms.mixAmount.value = time
                requestAnimationFrame(animation)
              } else {
                if (value === '2D') {
                  viewer?.scene.add(game.group2D)
                  game.group2D.traverse((child) => {
                    if (child.name === '2d') {
                      console.log('yyy')
                      ;(child as any).element.style.display = 'block'
                    }
                  })
                } else {
                  viewer?.scene.add(game.group3D)
                  game.group3D.traverse((child) => {
                    if (child.name === '3d') {
                      ;(child as any).element.style.display = 'block'
                    }
                  })
                }
              }
            }
            animation()

            setValue(value)
          }}
        >
          <Radio.Button value="2D">2D</Radio.Button>
          <Radio.Button value="3D">3D</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  )
}
export default Propagate
