import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Emit } from './emit';
import { lon2xyz, threeToScreen } from './math';
export { lon2xyz, threeToScreen };
export default class Viewer extends Emit {
    /** 场景 */
    scene: THREE.Scene;
    /** 透视相机 */
    camera: THREE.PerspectiveCamera;
    /** 渲染 */
    renderer: THREE.WebGLRenderer;
    /** 控制器 */
    controls: OrbitControls;
    /** 射线 */
    raycaster: THREE.Raycaster;
    /** 加载器 */
    textLoader: THREE.TextureLoader;
    /** 容器 */
    container: HTMLDivElement;
    manager: THREE.LoadingManager;
    constructor(container: HTMLDivElement);
    /**
     * @function: 初始化编辑器场景
     */
    initScene(): void;
    /**
     * @function: 使用控制器
     */
    useOrbitControls: () => void;
    /**
     * @function: 更新场景
     */
    render: () => void;
    /**
     * @function: 自适应窗口
     */
    onResize: () => void;
    listen: () => void;
    destroy: () => void;
    useLoadingManager(): void;
}