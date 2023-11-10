import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Emit } from './emit';
import { LoadingBar } from './LoadingBar';
import { lon2phi, lon2xyz, startEndQuaternion, threePointToCenter, threeToScreen, xyz2lon } from './math';
import Music from './music';
export declare type LoaderManager = {
    onProgress: (assetName: string, xhr: ProgressEvent<EventTarget>) => void;
    onError: (error: ErrorEvent) => void;
};
export { lon2phi, lon2xyz, startEndQuaternion, threePointToCenter, threeToScreen, xyz2lon };
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
    /** 容器 */
    container: HTMLDivElement;
    /** 平行光 */
    directionalLight: THREE.DirectionalLight;
    loadmanager: THREE.LoadingManager;
    music: Music;
    loadingBar: LoadingBar;
    onProgress: (assetName: string, xhr: ProgressEvent) => void;
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
    restoreContext(): void;
    listen: () => void;
    destroy: () => void;
    useLoadingManager(): void;
}
