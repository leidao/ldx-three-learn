/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-12-01 17:17:18
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-01 20:00:57
 */

import _ from 'lodash'

import { InitStaff } from './staff'
export class Viewer {
  ref: React.RefObject<HTMLCanvasElement>
  staffXCtx!: InitStaff
  staffYCtx!: InitStaff
  /** 鼠标按下时的位置 */
  mouseStart = [0, 0]
  /** 是否按下鼠标 */
  isMousedown = false
  /** 缩放速度 */
  zoomSpeed = 1
  /** 缩放比例 */
  scale = 1
  /** canvas元素 */
  domElement!: HTMLCanvasElement
  /** 事件 */
  event!: {
    mousedown: (e: MouseEvent) => void
    mouseup: (e: MouseEvent) => void
    mouseout: (e: MouseEvent) => void
    mousemove: (e: MouseEvent) => void
    resize: () => void
    wheel: (e: WheelEvent) => void
  }
  constructor(
    ref: React.RefObject<HTMLCanvasElement>,
    options: { staffXCtx: InitStaff; staffYCtx: InitStaff }
  ) {
    this.ref = ref
    this.staffXCtx = options.staffXCtx
    this.staffYCtx = options.staffYCtx
    this.init()
  }
  init() {
    if (!this.ref.current) return

    const canvas = this.ref.current
    this.domElement = canvas
    const width = canvas.clientWidth * window.devicePixelRatio
    const height = canvas.clientHeight * window.devicePixelRatio
    canvas.width = width
    canvas.height = height
    this.event = {
      mousedown: _.throttle(this.mousedown, 60),
      mouseup: _.throttle(this.mouseup, 60),
      mouseout: _.throttle(this.mouseout, 60),
      mousemove: _.throttle(this.mousemove, 60),
      resize: _.throttle(this.resize, 60),
      wheel: _.throttle(this.wheel, 60)
    }
    this.listen()
  }
  mousedown = (e: MouseEvent) => {
    this.isMousedown = true
    this.mouseStart = [e.offsetX, e.offsetY]
  }
  mouseup = (e: MouseEvent) => {
    this.isMousedown = false
    this.staffXCtx.config.x += e.offsetX - this.mouseStart[0]
    this.staffYCtx.config.x += e.offsetY - this.mouseStart[1]
  }
  mouseout = () => {
    this.isMousedown = false
  }
  mousemove = (e: MouseEvent) => {
    if (this.isMousedown) {
      this.staffXCtx.config.x += (e.offsetX - this.mouseStart[0]) / 20
      this.staffYCtx.config.x += (e.offsetY - this.mouseStart[1]) / 20
      this.staffXCtx.draw()
      this.staffYCtx.draw()
      this.mouseStart = [e.offsetX, e.offsetY]
    }
  }
  resize = () => {
    this.draw()
  }
  wheel = (event: WheelEvent) => {
    event.preventDefault()
    const dollyScale = this.getZoomScale()
    if (event.deltaY < 0) {
      this.scale *= dollyScale
      console.log('1111', this.scale)

      // dollyIn(getZoomScale())
    } else if (event.deltaY > 0) {
      this.scale /= dollyScale
      console.log('222', this.scale)

      // dollyOut(getZoomScale())
    }
  }
  getZoomScale() {
    return Math.pow(0.95, this.zoomSpeed)
  }

  listen() {
    this.domElement.addEventListener('mousedown', this.event.mousedown)
    // 鼠标放开时 重置状态
    this.domElement.addEventListener('mouseup', this.event.mouseup)
    // 鼠标划出canvas时 重置状态
    this.domElement.addEventListener('mouseout', this.event.mouseout)
    // 鼠标移动时 改变位置
    this.domElement.addEventListener('mousemove', this.event.mousemove)
    this.domElement.addEventListener('wheel', this.event.wheel, {
      passive: false
    })
    window.addEventListener('resize', this.event.resize)
  }
  destroy() {
    this.domElement.removeEventListener('mousedown', this.event.mousedown)
    this.domElement.removeEventListener('mouseup', this.event.mouseup)
    this.domElement.removeEventListener('mouseout', this.event.mouseout)
    this.domElement.removeEventListener('mousemove', this.event.mousemove)
    this.domElement.removeEventListener('wheel', this.event.wheel)
    window.removeEventListener('resize', this.event.resize)
  }
  draw() {
    this.staffXCtx.draw()
    this.staffYCtx.draw()
  }
}
