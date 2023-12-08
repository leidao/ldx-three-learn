import { Matrix3 } from '../math/matrix3';
import { BasicStyle, BasicStyleType } from '../style/basicStyle';
import { Object2D, Object2DType } from './object2D';
declare type LineType = Object2DType & {
    style?: BasicStyleType;
    lineWidth?: number;
    color?: string;
    width?: number;
    height?: number;
    startX?: number;
    startY?: number;
};
export declare class Rect extends Object2D {
    style: BasicStyle;
    /** 矩形宽高 */
    width: number;
    height: number;
    startX: number;
    startY: number;
    lineWidth: number;
    color: string;
    readonly isLine = true;
    constructor(attr?: LineType);
    setOption(attr: LineType): void;
    get moMatrix(): Matrix3;
    get pvmoMatrix(): Matrix3;
    drawShape(ctx: CanvasRenderingContext2D): void;
    crtPath(ctx: CanvasRenderingContext2D, matrix?: Matrix3): void;
}
export {};
