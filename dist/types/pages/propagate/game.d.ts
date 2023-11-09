import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
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
    labelRenderer: CSS3DRenderer;
    controls: OrbitControls;
    R: number;
    customUniforms: {
        baseTexture: {
            type: string;
            value: {};
        };
        mixAmount: {
            type: string;
            value: number;
        };
    };
    group3D: THREE.Group;
    group2D: THREE.Group;
    sphere: THREE.Mesh;
    constructor(viewer: Viewer);
    useCss3Render(): void;
    onResize: () => void;
    listen: () => void;
    destroy: () => void;
    startGame(): void;
    render(): void;
    /** 加载天空 */
    loadSky(): void;
    createEarth: (R: number) => void;
    /** 绘制轮廓线 */
    drawOutline: () => void;
    drawLineLoop: (point1Arr: number[], point2Arr: number[], material: THREE.ShaderMaterial) => THREE.LineLoop<THREE.BufferGeometry, THREE.ShaderMaterial>;
    /** 绘制填充 */
    drawShpae: (pointArr: number[], material: THREE.MeshBasicMaterial) => THREE.Mesh<THREE.ShapeGeometry, THREE.MeshBasicMaterial>;
    /** 飞线 */
    drawLines: (R: number, data: any) => void;
    draw2DLine(elem: any, material: THREE.LineBasicMaterial): {
        fly: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
        point: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;
    };
    draw3DLine(elem: any, material: THREE.LineBasicMaterial): {
        fly: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
        point: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;
    };
    drawFlyLine: (points: THREE.Vector3[], number: number, name: string) => THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;
    drawLocation: (data: any[], flag?: boolean) => void;
    /** 绘制文字 */
    createText(data: any): void;
    update: () => void;
}
