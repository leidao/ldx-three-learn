/*
 * @Description: 线段
 * @Author: ldx
 * @Date: 2023-11-15 12:21:19
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-08 14:23:50
 */
import { dpr } from '../core/camera'
import { Matrix3 } from '../math/matrix3'
import { BasicStyle, BasicStyleType } from '../style/basicStyle'
import { Object2D, Object2DType } from './object2D'
import { crtPath, crtPathByMatrix } from './objectUtils'

type LineType = Object2DType & {
  style?: BasicStyleType
  lineWidth?: number
  color?: string
}

export class Line extends Object2D {
  style: BasicStyle = new BasicStyle()
  /** 点位集合 */
  points: number[] = []
  lineWidth = 2
  color = '#000'
  // 类型
  readonly isLine = true
  constructor(attr: LineType = {}) {
    super()
    this.setOption(attr)
  }

  /* 属性设置 */
  setOption(attr: LineType) {
    for (const [key, val] of Object.entries(attr)) {
      switch (key) {
        case 'style':
          this.style.setOption(val as BasicStyleType)
          break
        default:
          this[key] = val
      }
    }
  }

  /* 世界模型矩阵*偏移矩阵 */
  get moMatrix(): Matrix3 {
    const {
      offset: { x, y }
    } = this
    return this.worldMatrix.multiply(new Matrix3().makeTranslation(x, y))
  }

  /* 视图投影矩阵*世界模型矩阵*偏移矩阵  */
  get pvmoMatrix(): Matrix3 {
    const {
      offset: { x, y }
    } = this
    return this.pvmMatrix.multiply(new Matrix3().makeTranslation(x, y))
  }

  /** 设置点位 */
  setPoints(points: number[]) {
    this.points = points
  }
  /** 追加点位 */
  addPoints(points: number[]) {
    this.points = this.points.concat(points)
  }
  /** 替换最后一个坐标 */
  replacePoint(x: number, y: number) {
    const { points } = this
    points.splice(points.length - 2, 2, x, y)
  }
  /* 绘图 */
  drawShape(ctx: CanvasRenderingContext2D) {
    const { points, style, color, lineWidth } = this
    if (points.length === 0) return
    //样式
    style.apply(ctx)
    ctx.strokeStyle = color
    ctx.lineWidth = lineWidth / dpr
    // 绘制图像
    ctx.beginPath()
    crtPath(ctx, points)
    ctx.stroke()
  }

  /* 绘制图像边界 */
  crtPath(ctx: CanvasRenderingContext2D, matrix = this.pvmoMatrix) {
    // const {
    //   size: { x: imgW, y: imgH }
    // } = this
    // crtPathByMatrix(ctx, [0, 0, imgW, 0, imgW, imgH, 0, imgH], matrix, true)
  }
}
