import { EventDispatcher } from '../core/eventDispatcher';
import { Scene } from '../core/scene';
import { Matrix3 } from '../math/matrix3';
import { Vector2 } from '../math/vector2';
import { Group } from './group';
export declare type Object2DType = {
    position?: Vector2;
    rotate?: number;
    scale?: Vector2;
    visible?: boolean;
    index?: number;
    name?: string;
    parent?: Scene | Group | undefined;
    enableCamera?: boolean;
    [key: string]: any;
};
export declare class Object2D extends EventDispatcher {
    /** 自定义属性 */
    [key: string]: any;
    /** 位置 */
    position: Vector2;
    /** 旋转 */
    rotate: number;
    /** 缩放 */
    scale: Vector2;
    /** 可见性 */
    visible: boolean;
    /** 渲染顺序 */
    index: number;
    /** 名称 */
    name: string;
    /** 父级 */
    parent: Scene | Group | undefined;
    /** 是否受相机影响-只适用于Scene的children元素 */
    enableCamera: boolean;
    /** UUID */
    uuid: string;
    /** 类型 */
    readonly isObject2D = true;
    get matrix(): Matrix3;
    get worldMatrix(): Matrix3;
    get pvmMatrix(): Matrix3;
    get worldScale(): Vector2;
    transform(ctx: CanvasRenderingContext2D): void;
    remove(): void;
    show(): void;
    hidden(): void;
    getScene(): Scene | null;
    draw(ctx: CanvasRenderingContext2D): void;
    drawShape(ctx: CanvasRenderingContext2D): void;
    crtPath(ctx: CanvasRenderingContext2D, projectionMatrix: Matrix3): void;
}
