/*
 * @Description: 电路图编辑
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-01 17:27:10
 */
import { useEffect, useRef } from 'react'

import { InitStaff } from './staff'
import { Viewer } from './viewer'
const Home = () => {
  const staffX = useRef<HTMLCanvasElement>(null)
  const staffY = useRef<HTMLCanvasElement>(null)
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const staffXCtx = new InitStaff(staffX, 'x')
    const staffYCtx = new InitStaff(staffY, 'y')
    const viewer = new Viewer(ref, { staffXCtx, staffYCtx })
  }, [])
  return (
    <div className="flex h-100% w-100% overflow-hidden">
      <div className="w-240px h-100%"></div>
      <div className="flex-1 relative box-border h-100%">
        <canvas
          ref={staffX}
          className="absolute left-20px top-0px  h-20px box-border"
          style={{
            width: `calc(100% - 20px)`,
            borderBottom: '1px solid rgb(136, 136, 136)'
          }}
        ></canvas>
        <canvas
          ref={staffY}
          className="absolute left-0px top-20px w-20px box-border"
          style={{
            height: `calc(100% - 20px)`,
            borderRight: '1px solid rgb(136, 136, 136)'
          }}
        ></canvas>
        <div
          className="absolute left-20px top-20px box-border"
          style={{
            width: 'calc(100% - 20px)',
            height: 'calc(100% - 20px)'
          }}
        >
          <canvas ref={ref} className="w-100% h-100%"></canvas>
        </div>
      </div>
      <div className="w-240px h-100%"></div>
    </div>
  )
}
export default Home
