import * as THREE from 'three';
import { Game } from './game';
export interface Options {
    object: THREE.Group;
    speed: number;
    animations: THREE.AnimationClip[];
    waypoints: THREE.Vector3[];
    app: Game;
    showPath: boolean;
    zone: string;
    name: string;
}
export declare class NPC {
    object: THREE.Group;
    pathfinder: any;
    name: string;
    actionName: string;
    /**  npc动作 */
    animations: any;
    app: Game;
    speed: number;
    calculatedPath: THREE.Vector3[];
    waypoints: THREE.Vector3[];
    quaternion: THREE.Quaternion;
    pathLines: THREE.Line;
    navMeshGroup: THREE.Group;
    pathColor: THREE.Color;
    /** 是否显示路径 */
    showPath: boolean;
    dead: boolean;
    ZONE: string;
    mixer: THREE.AnimationMixer;
    curAction: THREE.AnimationAction;
    constructor(options: Options);
    get randomWaypoint(): THREE.Vector3;
    set action(name: string);
    setTargetDirection(pt: THREE.Vector3): void;
    newPath(pt: THREE.Vector3): void;
    update(dt: number): void;
}
