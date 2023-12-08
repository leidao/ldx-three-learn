import { Matrix3 } from '../math/matrix3';
/** 根据矩阵绘制路径 */
export declare function crtPathByMatrix(ctx: CanvasRenderingContext2D, vertices: number[], matrix: Matrix3, closePath?: boolean): void;
export declare function crtPath(ctx: CanvasRenderingContext2D, vertices: number[], closePath?: boolean): void;
export declare function ImagePromise(image: HTMLImageElement): Promise<HTMLImageElement>;
export declare function ImagePromises(images: HTMLImageElement[]): Promise<HTMLImageElement>[];
/**
 * 找出离 value 最近的 segment 的倍数值
 */
export declare const getClosestTimesVal: (value: number, segment: number) => number;
/**
 * Canvas 中绘制，必须为 x.5 才能绘制一列单独像素，
 * 否则会因为抗锯齿，绘制两列像素，且一个为半透明，导致一种模糊的效果
 *
 * 这个方法会得到值最接近的 x.5 值。
 */
export declare const nearestPixelVal: (n: number) => number;
