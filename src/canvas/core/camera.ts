/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-15 12:28:05
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-08 15:38:25
 */

import { Matrix3 } from '../math/matrix3'
import { Vector2 } from '../math/vector2'

export const dpr = window.devicePixelRatio || 1
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
    // console.log('zoom', zoom, x, y)

    return new Matrix3().translate(x, y).scale(zoom, zoom)
  }
  /* 使用视图投影矩阵变换物体 */
  transformInvert(ctx: CanvasRenderingContext2D) {
    const {
      position: { x, y },
      zoom
    } = this

    ctx.translate(x * dpr, y * dpr)
    ctx.scale(zoom * dpr, zoom * dpr)
  }
}
