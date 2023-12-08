/*
 * @Description: 线段
 * @Author: ldx
 * @Date: 2023-11-15 12:21:19
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-08 16:08:23
 */
import { dpr } from '../core/camera';
import { Matrix3 } from '../math/matrix3';
import { BasicStyle } from '../style/basicStyle';
import { Object2D } from './object2D';
import { crtPath } from './objectUtils';
export class Line extends Object2D {
    style = new BasicStyle();
    /** 点位集合 */
    points = [];
    lineWidth = 2;
    color = '#000';
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
    /** 设置点位 */
    setPoints(points) {
        this.points = points;
    }
    /** 追加点位 */
    addPoints(points) {
        this.points = this.points.concat(points);
    }
    /** 替换最后一个坐标 */
    replacePoint(x, y) {
        const { points } = this;
        points.splice(points.length - 2, 2, x, y);
    }
    /* 绘图 */
    drawShape(ctx) {
        const { points, style, color, lineWidth } = this;
        if (points.length === 0)
            return;
        //样式
        style.apply(ctx);
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth / dpr;
        // 绘制图像
        ctx.beginPath();
        crtPath(ctx, points);
        ctx.stroke();
    }
    /* 绘制图像边界 */
    crtPath(ctx, matrix = this.pvmoMatrix) {
        // const {
        //   size: { x: imgW, y: imgH }
        // } = this
        // crtPathByMatrix(ctx, [0, 0, imgW, 0, imgW, imgH, 0, imgH], matrix, true)
    }
}
