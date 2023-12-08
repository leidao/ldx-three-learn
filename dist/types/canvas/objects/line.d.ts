import { Matrix3 } from '../math/matrix3';
import { BasicStyle, BasicStyleType } from '../style/basicStyle';
import { Object2D, Object2DType } from './object2D';
declare type LineType = Object2DType & {
    style?: BasicStyleType;
    lineWidth?: number;
    color?: string;
};
export declare class Line extends Object2D {
    style: BasicStyle;
    /** 点位集合 */
    points: number[];
    lineWidth: number;
    color: string;
    readonly isLine = true;
    constructor(attr?: LineType);
    setOption(attr: LineType): void;
    get moMatrix(): Matrix3;
    get pvmoMatrix(): Matrix3;
    /** 设置点位 */
    setPoints(points: number[]): void;
    /** 追加点位 */
    addPoints(points: number[]): void;
    /** 替换最后一个坐标 */
    replacePoint(x: number, y: number): void;
    drawShape(ctx: CanvasRenderingContext2D): void;
    crtPath(ctx: CanvasRenderingContext2D, matrix?: Matrix3): void;
}
export {};
