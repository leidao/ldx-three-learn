/*
 * @Description: 绘制线段
 * @Author: ldx
 * @Date: 2023-12-09 10:21:06
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-09 18:07:34
 */
import { Line } from '@/canvas'

import { Editor } from '../editor'
import ToolBase from './toolBase'
class ToolDrawLine extends ToolBase {
  readonly hotkey = ''
  readonly type = 'drawLine'
  line: Line | null = null
  constructor(editor: Editor) {
    super(editor)
  }
  /** 鼠标按下 */
  pointerdown(event: PointerEvent) {
    const { editor } = this
    const { clientX, clientY } = event
    this.isDown = true
    this.downPoint.copy(editor.scene.clientToCoord(clientX, clientY))
    if (this.line) {
      const [y, x] = [...this.line.points].reverse()
      const deltaX = Math.abs(this.downPoint.x - x)
      const deltaY = Math.abs(this.downPoint.y - y)
      const max = Math.max(deltaX, deltaY)
      const mouseX = max === deltaX ? this.downPoint.x : x
      const mouseY = max === deltaY ? this.downPoint.y : y
      this.line.addPoints([mouseX, mouseY])
      editor.scene.render()
    }
  }
  /** 鼠标移动 */
  pointermove(event: PointerEvent) {
    const { editor } = this
    const { clientX, clientY } = event
    this.isDragging = true
    // 没有先点击起点的话，不用绘制线段
    if (this.downPoint.isEmpty()) return
    this.dragPoint.copy(editor.scene.clientToCoord(clientX, clientY))
    const [x, y] = [
      ...(this.line?.points || this.downPoint.toArray().concat(0, 0))
    ].slice(-4, -2)
    const deltaX = Math.abs(this.dragPoint.x - x)
    const deltaY = Math.abs(this.dragPoint.y - y)
    const max = Math.max(deltaX, deltaY)
    const mouseX = max === deltaX ? this.dragPoint.x : x
    const mouseY = max === deltaY ? this.dragPoint.y : y
    if (!this.line) {
      this.line = new Line()
      editor.scene.add(this.line)
      const points = [this.downPoint.x, this.downPoint.y, mouseX, mouseY]
      this.line.addPoints(points)
    } else {
      this.line.replacePoint(mouseX, mouseY)
    }
    editor.scene.render()
  }
  /** 鼠标松开 */
  pointerup() {
    // this.line = null
  }
}
export default ToolDrawLine
