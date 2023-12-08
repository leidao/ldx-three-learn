import { Vector2 } from '../math/vector2';
import { State } from './frame';
declare type MouseShapeType = {
    fillStyle?: string;
    strokeStyle?: string;
    mousePos?: Vector2;
    center?: Vector2;
    vertives?: number[];
    moveVertices?: number[];
    rotateVertices?: number[];
    scaleVertices?: number[];
};
export declare class MouseShape {
    mousePos: Vector2;
    center: Vector2;
    vertives: number[];
    moveVertices: number[];
    rotateVertices: number[];
    scaleVertices: number[];
    fillStyle: string;
    strokeStyle: string;
    constructor(attr?: MouseShapeType);
    scale(ctx: CanvasRenderingContext2D): void;
    scaleY(ctx: CanvasRenderingContext2D): void;
    scaleX(ctx: CanvasRenderingContext2D): void;
    move(ctx: CanvasRenderingContext2D): void;
    rotate(ctx: CanvasRenderingContext2D): void;
    drawScale(ctx: CanvasRenderingContext2D, ang: number): void;
    draw(ctx: CanvasRenderingContext2D, state: State): void;
}
export {};
