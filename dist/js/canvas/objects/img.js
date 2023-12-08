/*
 * @Description: 图片
 * @Author: ldx
 * @Date: 2023-11-15 12:21:19
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-05 16:33:04
 */
import { Matrix3 } from '../math/matrix3';
import { Vector2 } from '../math/vector2';
import { BasicStyle } from '../style/basicStyle';
import { Object2D } from './object2D';
import { crtPathByMatrix } from './objectUtils';
export class Img extends Object2D {
    image = new Image();
    offset = new Vector2();
    size = new Vector2(300, 150);
    view;
    style = new BasicStyle();
    // 类型
    isImg = true;
    constructor(attr = {}) {
        super();
        this.setOption(attr);
    }
    /* 属性设置 */
    setOption(attr) {
        for (const [key, val] of Object.entries(attr)) {
            switch (key) {
                case 'src':
                    if (this.image instanceof Image) {
                        this.image.src = val;
                    }
                    break;
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
        const { image, offset, size, view, style } = this;
        //样式
        style.apply(ctx);
        /**
         * 在画布指定位置绘制原图
          ctx.drawimage(image, dx, dy);
          在画布指定位置按原图大小绘制指定大小的图
          ctx.drawimage(image, dx, dy, dwidth, dheight);
          剪切图像，并在画布上绘制被剪切的部分
          ctx.drawimage(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight);
         */
        // 绘制图像
        if (view) {
            ctx.drawImage(image, view.x, view.y, view.width, view.height, offset.x, offset.y, size.x, size.y);
        }
        else {
            ctx.drawImage(image, offset.x, offset.y, size.x, size.y);
        }
    }
    /* 绘制图像边界 */
    crtPath(ctx, matrix = this.pvmoMatrix) {
        const { size: { x: imgW, y: imgH } } = this;
        crtPathByMatrix(ctx, [0, 0, imgW, 0, imgW, imgH, 0, imgH], matrix, true);
    }
}
