/*
 * @Description: 标尺
 * @Author: ldx
 * @Date: 2023-12-01 16:23:08
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-01 20:04:48
 */

export class InitStaff {
  type = 'x'
  ref!: React.RefObject<HTMLCanvasElement>
  ctx!: CanvasRenderingContext2D | null
  domElement!: HTMLCanvasElement
  config = {
    width: 0,
    height: 0,
    // 刻度尺相关
    size: 0, // 刻度尺总刻度数
    x: 0, // 刻度尺x坐标位置,坐标原点在左下角
    y: 0, // 刻度尺y坐标位置,坐标原点在左下角
    w: 0, // 刻度线的间隔
    h: 0 // 刻度线基础长度
  }
  constructor(ref: React.RefObject<HTMLCanvasElement>, type: string) {
    this.type = type
    this.ref = ref
    this.init()
  }
  init() {
    if (!this.ref.current) return
    const canvas = this.ref.current
    this.domElement = canvas
    this.ctx = canvas.getContext('2d')
    if (!this.ctx) return

    this.config = {
      width: 0,
      height: 0,
      // 刻度尺相关
      size: 8000, // 刻度尺总刻度数
      x: -3960, // 刻度尺x坐标位置,坐标原点在左下角
      y: 0, // 刻度尺y坐标位置,坐标原点在左下角
      w: 20, // 刻度线的间隔
      h: 32 // 刻度线基础长度
    }

    this.draw()
  }
  draw() {
    const { ctx, type, config } = this
    if (!ctx) return
    const width = this.domElement.clientWidth * window.devicePixelRatio
    const height = this.domElement.clientHeight * window.devicePixelRatio
    // 窗口变化时更新canvas的画布大小
    this.domElement.width = width
    this.domElement.height = height

    config.width = width
    config.height = height

    const size = (config.size || 100) * 10 + 1
    const x = config.x || 0
    const y = config.y || 0
    const w = config.w || 5
    const h = config.h || 10

    const offset = 3 // 上面数字的偏移量
    // 画之前清空画布
    ctx.clearRect(0, 0, config.width, config.height)
    // 设置画笔属性
    ctx.strokeStyle = '#666'
    ctx.lineWidth = 2
    ctx.font = '24px Microsoft YaHei'
    // const number = Math.max(width, height)
    for (let i = 0; i < size; i++) {
      // 开始一条路径
      ctx.beginPath()
      // 移动到指定位置
      type === 'x'
        ? ctx.moveTo((x + i) * w, height - y)
        : ctx.moveTo(height - y, (x + i) * w)
      // 满10刻度时刻度线长一些 并且在上方表明刻度
      if (i % 10 == 0) {
        // 计算偏移量

        if (type === 'x') {
          ctx.fillText(String(i - config.size / 2), (x + i) * w + offset, 20)
        } else {
          ctx.save()
          ctx.translate(20, (x + i) * w - offset)
          ctx.rotate((-90 * Math.PI) / 180)
          ctx.fillText(String(i - config.size / 2), 0, 0)
          ctx.restore()
        }
        type === 'x'
          ? ctx.lineTo((x + i) * w, height - y - h)
          : ctx.lineTo(width - y - h, (x + i) * w)
      } else {
        // 满5刻度时的刻度线略长于1刻度的
        type === 'x'
          ? ctx.lineTo(
              (x + i) * w,
              height - y - ((i % 5 === 0 ? 1.5 : 1) * h) / 2
            )
          : ctx.lineTo(
              width - y - ((i % 5 === 0 ? 1.5 : 1) * h) / 2,
              (x + i) * w
            )
      }
      // 画出路径
      ctx.stroke()
    }
  }
}
