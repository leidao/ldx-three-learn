import { Object2D } from './object2D';
export declare const HALF_PI: number;
export declare type RulerConfig = {
    /** 标尺的高度 */
    w: number;
    /**  刻度线基础高度 */
    h: number;
};
export declare class Ruler extends Object2D {
    /** 渲染顺序 */
    index: number;
    /** 可见性 */
    config: RulerConfig;
    /** 不受相机影响 */
    enableCamera: boolean;
    readonly isRuler = true;
    constructor(config: RulerConfig);
    /** 绘图 */
    drawShape(ctx: CanvasRenderingContext2D): void;
    private drawXRuler;
    private drawYRuler;
}
