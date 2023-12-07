/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-12-01 17:17:18
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-07 15:51:06
 */

import _ from 'lodash'

import { Img, Line, OrbitControler, Scene, Vector2 } from '@/canvas'
import { Ruler } from '@/canvas/objects/ruler'

import vcc from './imgs/electricity/vcc.svg'
type Option = {
  container: HTMLDivElement
}
export class Editor {
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
  scale = 1
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
    this.scene.setOption({ domElement: canvas })
    const rulerConfig = {
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
    // this.scene.camera.position.set(20, 20)
    const image = new Image()
    image.src = vcc
    image.onload = () => {
      const pattern = new Img({
        image,
        position: new Vector2(0, 0),
        size: new Vector2(70, 50)
        // offset: new Vector2(70, 50).multiplyScalar(-0.5)
      })
      this.scene.add(pattern)
      this.scene.render()
    }

    // this.ruler = new Ruler(rulerConfig)
    // this.scene.add(this.ruler)
    this.orbitControler = new OrbitControler(this.scene.camera, this.scene)
    this.orbitControler.maxZoom = 10
    this.orbitControler.minZoom = 0.1
    this.scene.render()
    // const { config } = this.ruler
    // let zoom = 1
    this.orbitControler.addEventListener('change', (event) => {
      // console.log('event', event)
      const { target } = event
      // switch (target.type) {
      //   case 'pointermove':
      //     const position = this.scene.camera.position
      //     config.x = -position.x
      //     config.y = -position.y
      //     break
      //   case 'wheel':
      //     const scale = Math.pow(0.95, this.orbitControler.zoomSpeed)
      //     if (target.deltaY > 0) {
      //       zoom *= scale
      //     } else {
      //       zoom /= scale
      //     }
      //     config.zoom = zoom
      //     break
      //   default:
      //     break
      // }
      // const { clientX, clientY } = target
      // const clip = this.scene.clientToClip(clientX, clientY)
      // const coord = this.scene.clientToCoord(clientX, clientY)
      // const move = coord.sub(clip)

      // console.log('scene', clip, coord, move)
      // this.scene.ctx.save()
      // this.scene.ctx.translate(move.x, move.y)
      this.scene.render()

      // this.scene.ctx.restore()
    })

    this.listen()
  }
  /** 缩放 */
  wheel = _.throttle((event: WheelEvent) => {
    if (event.ctrlKey || event.metaKey) {
      this.orbitControler.wheel(event)
    } else {
      const down = new PointerEvent('pointerdown', { clientX: 0, clientY: 0 })
      this.orbitControler.pointerdown(down)
      const move = new PointerEvent('pointermove', {
        clientX: -event.deltaX,
        clientY: -event.deltaY
      })
      this.orbitControler.pointermove(move)
      this.orbitControler.pointerup()
    }
  }, 10)
  /** 鼠标按下 */
  pointerdown = (event: PointerEvent) => {
    const { button, clientX, clientY } = event
    console.log(
      '=====',
      event.offsetX - this.scene.camera.position.x,
      event.offsetY - this.scene.camera.position.y
    )

    if (button === 0) {
      this.isPanning = true
      this.toolOperation === 'panning' && this.orbitControler.pointerdown(event)
      if (this.toolOperation === 'line') {
        this.mouseStart.copy(this.scene.clientToClip(clientX, clientY))
        // console.log(' this.mouseStart', this.mouseStart)

        if (this.line) {
          const [y, x] = [...this.line.points].reverse()
          const deltaX = Math.abs(this.mouseStart.x - x)
          const deltaY = Math.abs(this.mouseStart.y - y)
          const max = Math.max(deltaX, deltaY)
          const mouseX = max === deltaX ? this.mouseStart.x : x
          const mouseY = max === deltaY ? this.mouseStart.y : y
          this.line.addPoints([mouseX, mouseY])
          this.scene.render()
        }
      }
    }
  }
  /** 鼠标移动 */
  pointermove = _.throttle((event: PointerEvent) => {
    const { clientX, clientY } = event
    this.mouseClipPos.copy(this.scene.clientToCoord(clientX, clientY))
    this.toolOperation === 'panning' && this.orbitControler.pointermove(event)
    // 绘制线段
    if (this.toolOperation === 'line' && this.mouseStart.isEmpty()) {
      const [x, y] = [
        ...(this.line?.points || this.mouseStart.toArray().concat(0, 0))
      ].slice(-4, -2)
      const deltaX = Math.abs(this.mouseClipPos.x - x)
      const deltaY = Math.abs(this.mouseClipPos.y - y)
      const max = Math.max(deltaX, deltaY)
      const mouseX = max === deltaX ? this.mouseClipPos.x : x
      const mouseY = max === deltaY ? this.mouseClipPos.y : y

      if (!this.line) {
        this.line = new Line()
        this.scene.add(this.line)
        const points = [this.mouseStart.x, this.mouseStart.y, mouseX, mouseY]
        this.line.addPoints(points)
      } else {
        this.line.replacePoint(mouseX, mouseY)
      }
      this.scene.render()
    }
  }, 10)
  /** 鼠标松开 */
  pointerup = (event: PointerEvent) => {
    if (event.button === 0) {
      this.isPanning = false
      this.orbitControler.pointerup()
    }
  }
  /** 鼠标移出 */
  mouseout = () => {
    this.orbitControler.pointerup()
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
