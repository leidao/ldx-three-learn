import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import type Viewer from '../../three';
export declare class Game {
    /** 视图 */
    viewer: Viewer;
    gltfLoader: GLTFLoader;
    plane: THREE.Object3D;
    bomb: THREE.Object3D;
    star: THREE.Object3D;
    obstacles: THREE.Group;
    obstacle: THREE.Group;
    clock1: THREE.Clock;
    clock2: THREE.Clock;
    /** 空格键是否按中 */
    spaceing: boolean;
    /** 是否游戏中 */
    playing: boolean;
    event: any;
    pos: THREE.Vector3;
    ball: THREE.Mesh;
    ballUniforms: any;
    starNum: number;
    lifeNum: number;
    constructor(viewer: Viewer);
    render(): void;
    /** 加载天空 */
    loadSky(): THREE.CubeTexture;
    initBall(): void;
    initMusic(): void;
    /** 加载飞机 */
    loadPlane(): void;
    loadObstacle(): void;
    update(): void;
    /** 计算碰撞 */
    computedCollision(position: THREE.Vector3): void;
    listen(): void;
    destroy(): void;
    /** 键盘按下 */
    keydown: (event: KeyboardEventInit) => void;
    /** 键盘抬起 */
    keyup: (event: KeyboardEventInit) => void;
    /** 鼠标按下 */
    mousedown: (event: Event) => void;
    /** 鼠标抬起 */
    mouseup: (event: Event) => void;
    startGame(): void;
    gameOver(): void;
    reset(): void;
}
