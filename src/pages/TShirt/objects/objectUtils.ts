/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-19 16:05:57
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-19 16:06:06
 */
import { Matrix3 } from '../math/matrix3'
import { Vector2 } from '../math/vector2'

export function crtPathByMatrix(
  ctx: CanvasRenderingContext2D,
  vertices: number[],
  matrix: Matrix3
) {
  const p0 = new Vector2(vertices[0], vertices[1]).applyMatrix3(matrix)
  ctx.moveTo(p0.x, p0.y)
  for (let i = 2, len = vertices.length; i < len; i += 2) {
    const pn = new Vector2(vertices[i], vertices[i + 1]).applyMatrix3(matrix)
    ctx.lineTo(pn.x, pn.y)
  }
  ctx.closePath()
}
