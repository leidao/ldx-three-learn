import { Matrix3 } from '../math/matrix3';
import { Vector2 } from '../math/vector2';
import { Group } from '../objects/group';
import { Img } from '../objects/img';
import { Object2D } from '../objects/object2D';
import { Camera } from './camera';
declare type SceneType = {
    domElement?: HTMLCanvasElement;
    camera?: Camera;
    autoClear?: boolean;
    isCenter?: boolean;
};
export declare class Scene extends Group {
    width: number;
    height: number;
    /** canvas画布 */
    _domElement: HTMLCanvasElement;
    /** canvas 上下文对象 */
    ctx: CanvasRenderingContext2D;
    /** 相机 */
    camera: Camera;
    /** 是否自动清理画布 */
    autoClear: boolean;
    /** 画布是否居中 */
    isCenter: boolean;
    readonly isScene = true;
    constructor(attr?: SceneType);
    get domElement(): HTMLCanvasElement;
    set domElement(value: HTMLCanvasElement);
    setViewPort(width: number, height: number): void;
    getViewPort(): {
        width: number;
        height: number;
        viewportWidth: number;
        viewportHeight: number;
    };
    setOption(attr: SceneType): void;
    render(): void;
    clientToCanvas(clientX: number, clientY: number): Vector2;
    canvasToClient(x: number, y: number): Vector2;
    canvastoClip({ x, y }: Vector2): Vector2;
    clientToClip(clientX: number, clientY: number): Vector2;
    clientToCoord(clientX: number, clientY: number): Vector2;
    isPointInObj(obj: Object2D, mp: Vector2, matrix?: Matrix3): boolean;
    selectObj(mp: Vector2, imgGroup?: Object2D[]): Img | null;
}
export {};
