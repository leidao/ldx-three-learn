import { Matrix3 } from '../math/matrix3';
import { Vector2 } from '../math/vector2';
export declare const dpr: number;
export declare class Camera {
    position: Vector2;
    zoom: number;
    constructor(x?: number, y?: number, zoom?: number);
    get pvMatrix(): Matrix3;
    transformInvert(ctx: CanvasRenderingContext2D): void;
}
