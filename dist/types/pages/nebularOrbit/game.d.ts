import * as THREE from 'three';
import { CSS3DRenderer, CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
export interface I_DeedData {
    time: string;
    description: string;
}
import Viewer from '@/three';
export declare class Game {
    clock: THREE.Clock;
    /** 视图 */
    viewer: Viewer;
    css3Render: CSS3DRenderer;
    /** 加载器 */
    textLoader: THREE.TextureLoader;
    fileLoader: THREE.FileLoader;
    group: THREE.Group;
    isRotate: boolean;
    constructor(viewer: Viewer);
    init(): void;
    render(): void;
    onResize: () => void;
    listen: () => void;
    destroy: () => void;
    /** 加载天空 */
    loadSky(): void;
    /** 创建星云 */
    createCircle(): void;
    /** 创建圆环 */
    createRing(): void;
    /** 创建线段 */
    createLine(): void;
    createPoint(data: I_DeedData, index: number | string): CSS3DSprite;
    creatPlan(): void;
    update: () => void;
}
