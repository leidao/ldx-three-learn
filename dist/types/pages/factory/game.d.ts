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
    constructor(viewer: Viewer);
    init(): void;
    render(): void;
    loadFactory(): void;
    update: () => void;
}
