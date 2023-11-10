import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import Viewer from '@/three';
import { Game } from './game';
import { NPC } from './npc';
export declare class NPCHandler {
    game: Game;
    viewer: Viewer;
    gltf: GLTF;
    npcs: NPC[];
    waypoints: THREE.Vector3[];
    constructor(game: Game);
    get randonWaypoint(): THREE.Vector3;
    load(): void;
    /** 初始化npc */
    initNPCs(gltf?: GLTF): void;
    cloneGLTF(gltf: GLTF): GLTF;
    /** 初始化鼠标事件 */
    initMouseHandler(): void;
    update(dt: number): void;
}
