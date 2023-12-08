import { Camera } from '../core/camera';
import { EventDispatcher } from '../core/eventDispatcher';
import { Scene } from '../core/scene';
import { Vector2 } from '../math/vector2';
declare type Stage = {
    cameraZoom: number;
    cameraPosition: Vector2;
    panStart: Vector2;
};
declare type Option = {
    enableZoom?: boolean;
    zoomSpeed?: number;
    enablePan?: boolean;
    panSpeed?: number;
    /** 最小缩放值 */
    minZoom?: number;
    /** 最大缩放值 */
    maxZoom?: number;
};
export declare class OrbitControler extends EventDispatcher {
    /** 相机 */
    camera: Camera;
    scene: Scene;
    /** 允许缩放 */
    enableZoom: boolean;
    /** 缩放速度 */
    zoomSpeed: number;
    /** 允许位移 */
    enablePan: boolean;
    /** 位移速度 */
    panSpeed: number;
    /** 是否正在拖拽中 */
    panning: boolean;
    /** 最小缩放值 */
    minZoom: number;
    /** 最大缩放值 */
    maxZoom: number;
    /** 是否以鼠标为中心缩放 */
    scaleForMouse: boolean;
    stage: Stage;
    constructor(scene: Scene, option?: Option);
    setOption(option: Option): void;
    setZoom(mousePosition?: Vector2): void;
    wheel: (event: WheelEvent) => void;
    pointerdown: (event: PointerEvent) => void;
    pointerup: () => void;
    pointermove: (event: PointerEvent) => void;
}
export {};
