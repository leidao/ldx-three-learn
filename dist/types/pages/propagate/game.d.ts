import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import Viewer from '@/three';
export declare class Game {
    clock: THREE.Clock;
    /** 加载器 */
    textLoader: THREE.TextureLoader;
    fileLoader: THREE.FileLoader;
    fontLoad: FontLoader;
    /** 视图 */
    viewer: Viewer;
    uniforms: any;
    labelRenderer: CSS2DRenderer;
    controls: OrbitControls;
    constructor(viewer: Viewer);
    useCss3Render(data: any[]): void;
    startGame(): void;
    render(): void;
    /** 加载天空 */
    loadSky(): void;
    createEarth: (R: number) => void;
    /** 绘制轮廓线 */
    drawOutline: () => void;
    drawLineLoop: (pointArr: number[], material: THREE.LineBasicMaterial) => THREE.LineLoop<THREE.BufferGeometry, THREE.LineBasicMaterial>;
    /** 绘制填充 */
    drawShpae: (pointArr: number[], material: THREE.MeshBasicMaterial) => THREE.Mesh<THREE.ShapeGeometry, THREE.MeshBasicMaterial>;
    drawLines: (data: any) => void;
    drawFlyLine: (data: any) => void;
    drawLocation: (data: any[], flag?: boolean) => void;
    /** 绘制文字 */
    createText(data: any, distance?: number): void;
    update: () => void;
}
