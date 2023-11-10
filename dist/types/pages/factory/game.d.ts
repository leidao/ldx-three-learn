import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Viewer from '@/three';
import { NPCHandler } from './npcHandler';
export declare class Game {
    clock: THREE.Clock;
    /** 视图 */
    viewer: Viewer;
    gltfLoader: GLTFLoader;
    factory: THREE.Group;
    /** 风扇扇叶 */
    fans: THREE.Mesh[];
    navMesh: THREE.Mesh;
    npcHandler: NPCHandler;
    pathfinder: any;
    waypoints: THREE.Vector3[];
    constructor(viewer: Viewer);
    render(): void;
    init(): void;
    /** 加载工厂地图 */
    loadFactory(): void;
    /** 初始化寻路器 */
    initPathfinding(navmesh: THREE.Mesh): void;
    update: () => void;
}
