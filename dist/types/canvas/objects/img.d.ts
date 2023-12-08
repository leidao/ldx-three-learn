import { Matrix3 } from '../math/matrix3';
import { Vector2 } from '../math/vector2';
import { BasicStyle, BasicStyleType } from '../style/basicStyle';
import { Object2D, Object2DType } from './object2D';
declare type ImgType = Object2DType & {
    image?: CanvasImageSource;
    offset?: Vector2;
    size?: Vector2;
    view?: View | undefined;
    src?: string;
    style?: BasicStyleType;
};
declare type View = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare class Img extends Object2D {
    image: CanvasImageSource;
    offset: Vector2;
    size: Vector2;
    view: View | undefined;
    style: BasicStyle;
    readonly isImg = true;
    constructor(attr?: ImgType);
    setOption(attr: ImgType): void;
    get moMatrix(): Matrix3;
    get pvmoMatrix(): Matrix3;
    drawShape(ctx: CanvasRenderingContext2D): void;
    crtPath(ctx: CanvasRenderingContext2D, matrix?: Matrix3): void;
}
export {};
