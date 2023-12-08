import { Matrix3 } from '../math/matrix3';
import { Vector2 } from '../math/vector2';
import { Img } from '../objects/img';
declare type Leve = 'moMatrix' | 'pvmoMatrix';
declare type FrameType = {
    img?: Img;
    level?: Leve;
};
export declare type State = 'scale' | 'scaleX' | 'scaleY' | 'rotate' | 'move' | null;
export declare class Frame {
    /** 自定义属性 */
    [key: string]: any;
    _img: Img;
    vertives: number[];
    center: Vector2;
    matrix: Matrix3;
    level: string;
    strokeStyle: string;
    fillStyle: string;
    constructor(attr?: FrameType);
    get img(): Img;
    set img(val: Img);
    updateShape(): void;
    draw(ctx: CanvasRenderingContext2D): void;
    getMouseState(mp: Vector2): State;
}
export {};
