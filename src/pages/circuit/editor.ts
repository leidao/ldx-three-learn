/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-12-01 17:17:18
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-05 15:12:06
 */

import _ from 'lodash'

import { OrbitControler, Scene, Vector2 } from '@/canvas'
import { Ruler, RulerConfig } from '@/canvas/objects/ruler'

export class Editor {
  /** 场景 */
  scene!: Scene
  /** 控制器 */
  orbitControler!: OrbitControler
  ref: React.RefObject<HTMLCanvasElement>
  ruler!: Ruler
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
  /* 鼠标的裁剪坐标位 */
  mouseClipPos = new Vector2(Infinity)
  rulerConfig!: RulerConfig
  /** 事件 */
  event!: {
    pointerdown: (e: PointerEvent) => void
    pointerup: (e: PointerEvent) => void
    mouseout: (e: MouseEvent) => void
    pointermove: (e: PointerEvent) => void
    resize: () => void
    wheel: (e: WheelEvent) => void
  }
  get ratio() {
    return window.devicePixelRatio || 1
  }
  constructor(ref: React.RefObject<HTMLCanvasElement>) {
    this.ref = ref
    this.init()
  }
  init() {
    if (!this.ref.current) return
    const canvas = this.ref.current
    this.domElement = canvas
    this.scene = new Scene()
    this.scene.setOption({ domElement: canvas })
    this.rulerConfig = {
      width: this.scene.domElement.width,
      height: this.scene.domElement.height,
      viewportWidth: this.scene.domElement.clientWidth,
      viewportHeight: this.scene.domElement.clientHeight,
      offset: 30, // 刻度线的间隔
      x: 0, // 刻度尺x坐标位置,坐标原点在左上角
      y: 0, // 刻度尺y坐标位置,坐标原点在左上角
      w: 20, // 标尺的高度
      h: 16, // 刻度线基础高度
      zoom: 1
    }
    this.ruler = new Ruler(this.rulerConfig)
    this.scene.add(this.ruler)
    this.orbitControler = new OrbitControler(this.scene.camera)
    this.orbitControler.maxZoom = 10
    this.orbitControler.minZoom = 0.2
    this.scene.render()
    const { config } = this.ruler
    let zoom = 1
    this.orbitControler.addEventListener('change', (event) => {
      // console.log('event', event)
      const { target } = event
      switch (target.type) {
        case 'pointermove':
          const position = this.scene.camera.position
          config.x = position.x
          config.y = position.y
          break
        case 'wheel':
          const scale = Math.pow(0.95, this.orbitControler.zoomSpeed)
          if (target.deltaY > 0) {
            zoom *= scale
          } else {
            zoom /= scale
          }
          // if (config.zoom > 128 || config.zoom < 1) return
          // if (oldZoom / zoom > 2) {
          //   oldZoom = zoom
          //   config.zoom *= 2
          // }
          // if (zoom / oldZoom > 2) {
          //   oldZoom = zoom
          //   config.zoom /= 2
          // }
          // console.log('zoom * w', zoom * w, zoom)
          config.zoom = zoom

          // this.ruler.render()

          break
        default:
          break
      }
      this.scene.render()
    })

    /** 事件 */
    this.event = {
      wheel: _.throttle(this.wheel, 16),
      pointerdown: _.throttle(this.pointerdown, 60),
      pointermove: _.throttle(this.pointermove, 16),
      pointerup: _.throttle(this.pointerup, 60),
      mouseout: _.throttle(this.mouseout, 60),
      resize: _.throttle(this.resize, 60)
    }

    this.listen()
  }
  /** 缩放 */
  wheel = (event: WheelEvent) => {
    console.log('bbb')
    event.preventDefault()
    event.stopPropagation()
    this.orbitControler.wheel(event)
  }
  /** 鼠标按下 */
  pointerdown = (event: PointerEvent) => {
    const { button } = event
    if (button === 0) {
      this.orbitControler.pointerdown(event)
      // imgHover = scene.selectObj(this.mouseClipPos)
      // imgControler.pointerdown(imgHover, this.mouseClipPos)
      // updateMouseCursor()
    }
  }
  /** 鼠标移动 */
  pointermove = (event: PointerEvent) => {
    const { clientX, clientY } = event
    this.mouseClipPos.copy(this.scene.clientToClip(clientX, clientY))
    this.orbitControler.pointermove(event)

    // imgHover = scene.selectObj(this.mouseClipPos)
    // imgControler.pointermove(this.mouseClipPos)
    // updateMouseCursor()
  }
  /** 鼠标松开 */
  pointerup = (event: PointerEvent) => {
    if (event.button === 0) {
      this.orbitControler.pointerup()
    }
  }
  /** 鼠标移出 */
  mouseout = () => {
    this.orbitControler.pointerup()
  }
  resize = () => {
    this.draw()
  }

  listen() {
    /* 滑动滚轮缩放 */
    this.domElement.addEventListener('wheel', this.event.wheel, {
      passive: false
    })
    /* 按住左键平移 */
    this.domElement.addEventListener('pointerdown', this.event.pointerdown)
    this.domElement.addEventListener('pointermove', this.event.pointermove)
    window.addEventListener('pointerup', this.event.pointerup)

    // 鼠标划出canvas时 重置状态
    this.domElement.addEventListener('mouseout', this.event.mouseout)

    window.addEventListener('resize', this.event.resize)
  }
  destroy() {
    /* 滑动滚轮缩放 */
    this.domElement.removeEventListener('wheel', this.event.wheel)
    /* 按住左键平移 */
    this.domElement.removeEventListener('pointerdown', this.event.pointerdown)
    this.domElement.removeEventListener('pointermove', this.event.pointermove)
    window.removeEventListener('pointerup', this.event.pointerup)

    // 鼠标划出canvas时 重置状态
    this.domElement.removeEventListener('mouseout', this.event.mouseout)

    window.removeEventListener('resize', this.event.resize)
  }
  draw() {
    // this.staffXCtx.draw()
    // this.staffYCtx.draw()
  }
}
