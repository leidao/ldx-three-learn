/*
 * @Description: T恤图案编辑
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-15 11:46:59
 */
import { useEffect, useRef } from 'react'

const Home = () => {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    ctx?.fillRect(100, 100, 100, 100)
  }, [])
  return <canvas ref={ref}></canvas>
}
export default Home
