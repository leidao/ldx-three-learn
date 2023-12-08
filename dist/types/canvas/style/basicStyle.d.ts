export declare type BasicStyleType = {
    /** 投影颜色 */
    shadowColor?: string | undefined;
    /** 投影模糊 */
    shadowBlur?: number;
    /** 投影偏移 */
    shadowOffsetX?: number;
    /** 投影偏移 */
    shadowOffsetY?: number;
    /** 全局透明度 */
    globalAlpha?: number | undefined;
    /** 合成相关 */
    globalCompositeOperation?: GlobalCompositeOperation | undefined;
    /** 裁剪 */
    clip?: boolean;
};
export declare class BasicStyle {
    shadowColor: string | undefined;
    shadowBlur: number;
    shadowOffsetX: number;
    shadowOffsetY: number;
    globalAlpha: number | undefined;
    globalCompositeOperation: GlobalCompositeOperation | undefined;
    clip: boolean;
    setOption(attr?: BasicStyleType): void;
    apply(ctx: CanvasRenderingContext2D): void;
}
