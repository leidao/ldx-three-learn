import { Vector2 } from '../math/vector2';
import { Img } from '../objects/img';
import { Object2D } from '../objects/object2D';
import { Frame, State } from './frame';
import { MouseShape } from './mouseShape';
export declare class ImgControler extends Object2D {
    /** 要控制的图片 */
    _img: Img | null;
    /** 图案控制框 */
    frame: Frame;
    /** 渲染顺序 */
    index: number;
    /** 不受相机影响 */
    enableCamera: boolean;
    /** 鼠标状态 */
    mouseState: State;
    /** 鼠标的裁剪坐标位 */
    clipMousePos: Vector2;
    /** 鼠标图案 */
    mouseShape: MouseShape;
    get img(): Img | null;
    set img(val: Img | null);
    pointerdown(img: Img | null, mp: Vector2): void;
    pointermove(mp: Vector2): void;
    draw(ctx: CanvasRenderingContext2D): void;
}
