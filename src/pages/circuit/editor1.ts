/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-12-01 17:17:18
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-07 14:03:20
 */

import _ from 'lodash'

import { Img, Line, OrbitControler, Scene, Vector2 } from '@/canvas'
import { Ruler } from '@/canvas/objects/ruler'

type Option = {
  container: HTMLDivElement
}
export class Editor {
  offset = { x: 0, y: 0 } // 拖动偏移
  curOffset = { x: 0, y: 0 } // 记录上一次的偏移量
  mousePosition = { x: 0, y: 0 } // 记录鼠标滚轮点击时的坐标位置
  maxScale = 8
  minScale = 0.4
  scaleStep = 0.2
  scale = 1
  preScale = 1

  x = 0 // 记录鼠标点击Canvas时的横坐标
  y = 0 // 记录鼠标点击Canvas时的纵坐标
  //==========

  /** 场景 */
  scene!: Scene
  /** 控制器 */
  orbitControler!: OrbitControler
  option: Option
  /** 标尺 */
  ruler!: Ruler
  /** 鼠标按下时的位置 */
  mouseStart = new Vector2(Infinity)
  /** 是否按下鼠标 */
  isMousedown = false
  /** 缩放速度 */
  zoomSpeed = 1
  /** 缩放比例 */
  /** canvas元素 */
  domElement!: HTMLCanvasElement
  /* 鼠标的裁剪坐标位 */
  mouseClipPos = new Vector2(Infinity)
  /** 当前工具栏 */
  toolOperation = 'panning'
  /** 鼠标是否按下 */
  isPanning = false
  line!: Line
  /** 选中的图片 */
  selectImg!: null | HTMLImageElement
  /** 事件 */

  constructor(option: Option) {
    this.option = option
    this.init()
  }
  init() {
    if (!this.option.container) return
    const container = this.option.container
    const canvas = document.createElement('canvas')
    container.appendChild(canvas)
    this.domElement = canvas
    this.scene = new Scene()
    this.scene.setOption({ domElement: canvas, offset: 0 })

    this.paint()
    this.draw()

    this.listen()
  }
  /** 缩放 */
  wheel = _.throttle((e: WheelEvent) => {
    e.preventDefault()

    this.mousePosition.x = e.offsetX // 记录当前鼠标点击的横坐标
    this.mousePosition.y = e.offsetY // 记录当前鼠标点击的纵坐标
    if (e.deltaY < 0) {
      // 放大
      this.scale = parseFloat((this.scaleStep + this.scale).toFixed(2)) // 解决小数点运算丢失精度的问题
      if (this.scale > this.maxScale) {
        this.scale = this.maxScale
        return
      }
    } else {
      // 缩小
      this.scale = parseFloat((this.scale - this.scaleStep).toFixed(2)) // 解决小数点运算丢失精度的问题
      if (this.scale < this.minScale) {
        this.scale = this.minScale
        return
      }
    }
    console.log('this.scale', this.scale)

    this.zoom()
  }, 0)
  zoom() {
    this.offset.x =
      this.mousePosition.x -
      ((this.mousePosition.x - this.offset.x) * this.scale) / this.preScale
    this.offset.y =
      this.mousePosition.y -
      ((this.mousePosition.y - this.offset.y) * this.scale) / this.preScale

    this.paint()
    this.preScale = this.scale
    this.curOffset.x = this.offset.x
    this.curOffset.y = this.offset.y
  }
  /** 鼠标按下 */
  pointerdown = (e: PointerEvent) => {
    console.log('bbbb', e.offsetX - this.offset.x, e.offsetY - this.offset.y)

    if (e.button === 0) {
      this.isPanning = true
      // 鼠标左键
      this.x = e.x
      this.y = e.y
    }
  }
  /** 鼠标移动 */
  pointermove = _.throttle((e: PointerEvent) => {
    if (this.isPanning) {
      this.offset.x = this.curOffset.x + (e.x - this.x)
      this.offset.y = this.curOffset.y + (e.y - this.y)
      console.log('this.offset', e.x - this.x)

      this.paint()
    }
  }, 10)
  /** 鼠标松开 */
  pointerup = (e: PointerEvent) => {
    this.isPanning = false
    this.curOffset.x = this.offset.x
    this.curOffset.y = this.offset.y
  }
  paint() {
    // this.clear();
    this.scene.domElement.width = 1920
    console.log('this.offset.x, this.offset.y', this.offset.x, this.offset.y)
    this.scene.ctx.scale(2, 2)
    this.scene.ctx.translate(this.offset.x, this.offset.y)
    this.scene.ctx.scale(this.scale, this.scale)
    this.draw()
  }
  draw() {
    this.scene.ctx.fillStyle = 'red'
    this.scene.ctx.fillRect(0, 0, 50, 50)

    this.scene.ctx.fillStyle = 'green'
    this.scene.ctx.fillRect(150, 150, 50, 50)
  }
  /** 鼠标移出 */
  mouseout = () => {
    // this.orbitControler.pointerup()
  }
  resize = _.throttle(() => {
    const container = this.option.container
    const width = container.clientWidth
    const height = container.clientHeight
    this.scene.updateViewPort(width, height)
    this.ruler.config.width = this.scene.domElement.width
    this.ruler.config.height = this.scene.domElement.height
    this.ruler.config.viewportWidth = this.scene.domElement.clientWidth
    this.ruler.config.viewportHeight = this.scene.domElement.clientHeight
    // this.ruler.config.x = -this.scene.domElement.clientWidth / 2 - 20
    this.scene.render()
  }, 20)
  /** 拖拽进入目标元素 */
  dragenter = (event: DragEvent) => {
    // 表示在当前位置放置拖拽元素将进行移动操作
    event.dataTransfer && (event.dataTransfer.dropEffect = 'move')
  }
  /** 拖拽离开目标元素 */
  dragleave = (event: DragEvent) => {
    // 表示在当前位置不允许放置拖拽元素，即拖放操作无效。
    event.dataTransfer && (event.dataTransfer.dropEffect = 'none')
  }
  /** 拖拽元素在目标元素上移动 */
  dragover = (event: DragEvent) => {
    // 如果默认行为没有被阻止,drop事件不会被触发
    event.preventDefault()
  }
  /** 拖拽元素在目标元素上松开鼠标 */
  drop = (event: DragEvent) => {
    console.log('event', event)
    if (!this.selectImg) return
    const { clientX, clientY } = event
    const coordinate = this.scene.clientToCoord(clientX, clientY)
    const pattern = new Img({
      image: this.selectImg,
      position: coordinate,
      size: new Vector2(70, 50),
      offset: new Vector2(70, 50).multiplyScalar(-0.5)
    })
    this.scene.add(pattern)
    this.scene.render()
  }

  listen() {
    /* 滑动滚轮缩放 */
    this.domElement.addEventListener('wheel', this.wheel, {
      passive: false
    })
    /* 按住左键平移 */
    this.domElement.addEventListener('pointerdown', this.pointerdown)
    this.domElement.addEventListener('pointermove', this.pointermove)
    window.addEventListener('pointerup', this.pointerup)

    // 鼠标划出canvas时 重置状态
    this.domElement.addEventListener('mouseout', this.mouseout)

    window.addEventListener('resize', this.resize)
  }
  destroy() {
    /* 滑动滚轮缩放 */
    this.domElement.removeEventListener('wheel', this.wheel)
    /* 按住左键平移 */
    this.domElement.removeEventListener('pointerdown', this.pointerdown)
    this.domElement.removeEventListener('pointermove', this.pointermove)
    window.removeEventListener('pointerup', this.pointerup)

    // 鼠标划出canvas时 重置状态
    this.domElement.removeEventListener('mouseout', this.mouseout)

    window.removeEventListener('resize', this.resize)
  }
}
