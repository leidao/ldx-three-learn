/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-15 12:28:05
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-07 11:06:20
 */

import { Matrix3 } from '../math/matrix3'
import { Vector2 } from '../math/vector2'

export class Camera {
  position: Vector2
  zoom: number
  constructor(x = 0, y = 0, zoom = 1) {
    this.position = new Vector2(x, y)
    this.zoom = zoom
  }
  /* 视图投影矩阵：先逆向缩放，再逆向位置 */
  get pvMatrix() {
    const {
      position: { x, y },
      zoom
    } = this
    return new Matrix3().scale(1 / zoom, 1 / zoom).translate(-x, -y)
  }
  /* 使用视图投影矩阵变换物体 */
  transformInvert(ctx: CanvasRenderingContext2D) {
    const {
      position: { x, y },
      zoom
    } = this
    const scale = 1 / zoom
    ctx.translate(-x, -y)
    ctx.scale(scale, scale)
  }
}
