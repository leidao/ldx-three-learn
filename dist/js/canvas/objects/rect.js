import { Matrix3 } from '../math/matrix3';
import { BasicStyle } from '../style/basicStyle';
import { Object2D } from './object2D';
export class Rect extends Object2D {
    style = new BasicStyle();
    /** 矩形宽高 */
    width = 0;
    height = 0;
    startX = 0;
    startY = 0;
    lineWidth = 2;
    color = '#f00';
    // 类型
    isLine = true;
    constructor(attr = {}) {
        super();
        this.setOption(attr);
    }
    /* 属性设置 */
    setOption(attr) {
        for (const [key, val] of Object.entries(attr)) {
            switch (key) {
                case 'style':
                    this.style.setOption(val);
                    break;
                default:
                    this[key] = val;
            }
        }
    }
    /* 世界模型矩阵*偏移矩阵 */
    get moMatrix() {
        const { offset: { x, y } } = this;
        return this.worldMatrix.multiply(new Matrix3().makeTranslation(x, y));
    }
    /* 视图投影矩阵*世界模型矩阵*偏移矩阵  */
    get pvmoMatrix() {
        const { offset: { x, y } } = this;
        return this.pvmMatrix.multiply(new Matrix3().makeTranslation(x, y));
    }
    /* 绘图 */
    drawShape(ctx) {
        const { startX, startY, width, height, style, color, lineWidth } = this;
        //样式
        style.apply(ctx);
        // ctx.strokeStyle = color
        ctx.fillStyle = color;
        ctx.lineWidth = lineWidth;
        // 绘制图像
        // ctx.beginPath()
        ctx.fillRect(startX, startY, width, height);
        // ctx.stroke()
    }
    /* 绘制图像边界 */
    crtPath(ctx, matrix = this.pvmoMatrix) {
        // const {
        //   size: { x: imgW, y: imgH }
        // } = this
        // crtPathByMatrix(ctx, [0, 0, imgW, 0, imgW, imgH, 0, imgH], matrix, true)
    }
}
