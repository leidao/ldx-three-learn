/*
 * @Description: 飞机小游戏
 * @Author: ldx
 * @Date: 2023-11-03 23:33:27
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-06 11:16:43
 */

import { SlackOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useEffect, useRef, useState } from 'react'

import Viewer from '@/three'

import { Game } from './game'
let game: Game
import planePic from '/plane/img/plane-icon.png'
import starPic from '/plane/img/star-icon.png'
// import { useEffect } from 'react'
const Plane = () => {
  const [life, setLife] = useState(5)
  const [star, setStar] = useState(0)
  const [playing, setPlay] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const viewer = new Viewer(ref.current)
    viewer.useOrbitControls()
    viewer.controls.enableZoom = false
    viewer.listen()
    viewer.on('addStar', (num) => {
      setStar(num)
    })
    viewer.on('decLife', (num) => {
      setLife(num)
      if (num === 0) {
        setTimeout(() => {
          setLife(5)
          setStar(0)
          game.gameOver()
          setPlay(false)
        }, 600)
      }
    })
    game = new Game(viewer)
    let id: number
    const animation = () => {
      game.update()
      id = requestAnimationFrame(animation)
    }
    animation()
    return () => {
      cancelIdleCallback(id)
      game.destroy()
    }
  }, [])
  const start = () => {
    setPlay(true)
    game.startGame()
  }
  return (
    <div className="w-100% h-100% relative">
      <div className="gunplay w-100% h-100%" ref={ref}>
        <div className="play absolute left-50% top-50% z-999 translate-x--50%">
          {!playing && (
            <div className="text-22px">
              <div className="mb-14px">按住空格键上升 / 松开空格键下落</div>
              <div className="flex justify-center">
                <Button size="large" icon={<SlackOutlined />} onClick={start}>
                  Play
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="life absolute left-20px top-10px">
          <img width={100} height={60} alt="飞机" src={planePic}></img>
          <span className="text-26px text-#fff">{life} </span>
        </div>
        <div className="star absolute right-20px top-10px">
          <span className="text-26px text-#fff">{star} </span>
          <img width={100} height={70} src={starPic} alt="星星"></img>
        </div>
      </div>
    </div>
  )
}
export default Plane
