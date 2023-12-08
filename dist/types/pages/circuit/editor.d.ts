import _ from 'lodash';
import { Line, OrbitControler, Scene, Vector2 } from '@/canvas';
import { Ruler } from '@/canvas/objects/ruler';
declare type Option = {
    container: HTMLDivElement;
};
export declare class Editor {
    /** 场景 */
    scene: Scene;
    /** 控制器 */
    orbitControler: OrbitControler;
    option: Option;
    /** 标尺 */
    ruler: Ruler;
    /** 鼠标按下时的位置 */
    mouseStart: Vector2;
    /** 是否按下鼠标 */
    isMousedown: boolean;
    /** 缩放速度 */
    zoomSpeed: number;
    /** 缩放比例 */
    scale: number;
    /** canvas元素 */
    domElement: HTMLCanvasElement;
    mouseClipPos: Vector2;
    /** 当前工具栏 */
    toolOperation: string;
    /** 鼠标是否按下 */
    isPanning: boolean;
    line: Line;
    /** 选中的图片 */
    selectImg: null | HTMLImageElement;
    /** 事件 */
    constructor(option: Option);
    init(): void;
    /** 缩放 */
    wheel: _.DebouncedFunc<(event: WheelEvent) => void>;
    /** 鼠标按下 */
    pointerdown: (event: PointerEvent) => void;
    /** 鼠标移动 */
    pointermove: _.DebouncedFunc<(event: PointerEvent) => void>;
    /** 鼠标松开 */
    pointerup: (event: PointerEvent) => void;
    /** 鼠标移出 */
    mouseout: () => void;
    resize: _.DebouncedFunc<() => void>;
    /** 拖拽进入目标元素 */
    dragenter: (event: DragEvent) => void;
    /** 拖拽离开目标元素 */
    dragleave: (event: DragEvent) => void;
    /** 拖拽元素在目标元素上移动 */
    dragover: (event: DragEvent) => void;
    /** 拖拽元素在目标元素上松开鼠标 */
    drop: (event: DragEvent) => void;
    /**  放大 */
    zoomIn: () => void;
    /** 缩小 */
    zoomOut: () => void;
    listen(): void;
    destroy(): void;
}
export {};
