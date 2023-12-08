/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-15 12:19:56
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-08 14:16:32
 */
import { Matrix3 } from '../math/matrix3'
import { Vector2 } from '../math/vector2'
import { Group } from '../objects/group'
import { Img } from '../objects/img'
import { Object2D } from '../objects/object2D'
import { Camera } from './camera'

type SceneType = {
  domElement?: HTMLCanvasElement
  camera?: Camera
  autoClear?: boolean
  offset?: Vector2
}

export class Scene extends Group {
  width!: number
  height!: number
  /** canvas画布 */
  _domElement = document.createElement('canvas')
  /** canvas 上下文对象 */
  ctx: CanvasRenderingContext2D = this._domElement.getContext(
    '2d'
  ) as CanvasRenderingContext2D
  /** 相机 */
  camera = new Camera()
  /** 是否自动清理画布 */
  autoClear = true

  // 类型
  readonly isScene = true

  constructor(attr: SceneType = {}) {
    super()
    this.setOption(attr)
  }
  get ratio() {
    return window.devicePixelRatio || 1
  }
  get domElement() {
    return this._domElement
  }
  set domElement(value) {
    if (this._domElement === value) {
      return
    }
    this._domElement = value
    const container = this._domElement.parentElement
    if (!container) return
    const width = container.clientWidth
    const height = container.clientHeight
    this.setViewPort(width, height)
  }
  setViewPort(width: number, height: number) {
    this.domElement.style.width = width + 'px'
    this.domElement.style.height = height + 'px'
    this.domElement.width = width * this.ratio
    this.domElement.height = height * this.ratio
    this.ctx = this.domElement.getContext('2d') as CanvasRenderingContext2D
  }
  getViewPort() {
    return {
      width: this.domElement.width,
      height: this.domElement.height,
      viewportWidth: this.domElement.clientWidth,
      viewportHeight: this.domElement.clientHeight
    }
  }

  /* 设置属性 */
  setOption(attr: SceneType) {
    for (const [key, val] of Object.entries(attr)) {
      this[key] = val
      if (key === 'offset') {
        this.camera.position.copy(val as Vector2)
      }
    }
  }

  /*  渲染 */
  render() {
    const {
      domElement: { width, height },
      ctx,
      camera,
      children,
      autoClear
    } = this
    ctx.save()
    // 清理画布
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    autoClear && ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#f4f4f4'
    ctx.fillRect(0, 0, width, height)

    camera.transformInvert(ctx)
    this.transform(ctx)

    // 渲染子对象
    for (const obj of children) {
      ctx.save()
      // 视图投影矩阵
      // obj.enableCamera && ctx.setTransform(1, 0, 0, 1, 0, 0)
      // 绘图
      obj.draw(ctx)
      ctx.restore()
    }

    ctx.restore()
  }

  /* client坐标转canvas坐标 */
  clientToCanvas(clientX: number, clientY: number) {
    const { domElement } = this
    const { left, top } = domElement.getBoundingClientRect()
    return new Vector2(clientX - left, clientY - top)
  }
  /* canvas坐标转client坐标*/
  canvasToClient(x: number, y: number) {
    const { domElement } = this
    const { left, top } = domElement.getBoundingClientRect()
    return new Vector2(x + left, y + top)
  }

  /* canvas坐标转裁剪坐标 */
  canvastoClip({ x, y }: Vector2) {
    const { offset } = this
    return new Vector2(x - offset, y - offset)
  }

  /* client坐标转裁剪坐标 */
  clientToClip(clientX: number, clientY: number) {
    return this.canvastoClip(this.clientToCanvas(clientX, clientY))
  }
  /* client坐标转相机坐标 */
  clientToCoord(clientX: number, clientY: number) {
    return this.canvastoClip(
      this.clientToCanvas(clientX, clientY)
    ).applyMatrix3(this.camera.pvMatrix.invert())
  }

  /* 基于某个坐标系，判断某个点是否在图形内 */
  isPointInObj(obj: Object2D, mp: Vector2, matrix: Matrix3 = new Matrix3()) {
    const { ctx, ratio } = this
    ctx.save()
    ctx.beginPath()
    // 画布缩放了，这里进行矩阵计算时要调整回来
    ctx.scale(1 / ratio, 1 / ratio)
    obj.crtPath(ctx, matrix)
    ctx.restore()
    return ctx.isPointInPath(mp.x, mp.y)
  }
  /* 选择图案 */
  selectObj(mp: Vector2, imgGroup: Object2D[] = this.children): Img | null {
    for (const img of [...imgGroup].reverse()) {
      if (img instanceof Img && this.isPointInObj(img, mp, img.pvmoMatrix)) {
        return img
      }
    }
    return null
  }
}
