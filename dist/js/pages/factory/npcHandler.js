/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-06 15:33:12
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-10 14:57:38
 */
import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { NPC } from './npc';
export class NPCHandler {
    game;
    viewer;
    gltf;
    npcs = [];
    waypoints = [];
    constructor(game) {
        this.game = game;
        this.viewer = game.viewer;
        this.load();
        this.initMouseHandler();
    }
    get randonWaypoint() {
        const index = Math.floor(Math.random() * this.waypoints.length);
        return this.waypoints[index];
    }
    load() {
        this.game.gltfLoader.setPath('factory/glb/');
        const dracoLoader = new DRACOLoader(this.viewer.loadmanager);
        dracoLoader.setDecoderPath('factory/draco/');
        this.game.gltfLoader.setDRACOLoader(dracoLoader);
        this.game.gltfLoader.load('swat-guy2.glb', (gltf) => {
            if (this.game.pathfinder) {
                this.initNPCs(gltf);
            }
            else {
                this.gltf = gltf;
                // this.viewer.scene.add(gltf.scene)
                // this.game.render()
            }
        }, (xhr) => {
            this.viewer.onProgress('swat-guy2.glb', xhr);
        });
    }
    /** 初始化npc */
    initNPCs(gltf = this.gltf) {
        const gltfs = [gltf];
        this.waypoints = this.game.waypoints;
        this.npcs = [];
        for (let i = 0; i < 3; i++) {
            gltfs.push(this.cloneGLTF(gltf));
        }
        gltfs.forEach((gltf) => {
            const object = gltf.scene;
            object.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                }
            });
            const options = {
                object,
                speed: 0.8,
                animations: gltf.animations,
                waypoints: this.waypoints,
                app: this.game,
                showPath: false,
                zone: 'factory',
                name: 'swat-guy'
            };
            const npc = new NPC(options);
            npc.object.position.copy(this.randonWaypoint);
            npc.newPath(this.randonWaypoint);
            this.npcs.push(npc);
        });
    }
    cloneGLTF(gltf) {
        const clone = {
            animations: gltf.animations,
            scene: gltf.scene.clone(true)
        };
        const skinnedMeshs = {};
        gltf.scene.traverse((node) => {
            if (node.isSkinnedMesh) {
                skinnedMeshs[node.name] = node;
            }
        });
        const cloneBones = {};
        const cloneSkinnedMeshs = {};
        clone.scene.traverse((node) => {
            if (node.isBone) {
                cloneBones[node.name] = node;
            }
            if (node.isSkinnedMesh) {
                cloneSkinnedMeshs[node.name] = node;
            }
        });
        for (const key in skinnedMeshs) {
            const skinnedMesh = skinnedMeshs[key];
            const skeleton = skinnedMesh.skeleton;
            const cloneSkinnedMesh = cloneSkinnedMeshs[key];
            const orderedCloneBones = [];
            for (let i = 0; i < skeleton.bones.length; ++i) {
                const cloneBone = cloneBones[skeleton.bones[i].name];
                orderedCloneBones.push(cloneBone);
            }
            cloneSkinnedMesh.bind(new THREE.Skeleton(orderedCloneBones, skeleton.boneInverses), cloneSkinnedMesh.matrixWorld);
        }
        return clone;
    }
    /** 初始化鼠标事件 */
    initMouseHandler() {
        // this.viewer.raycaster
        const container = this.viewer.renderer.domElement;
        const mouse = { x: 0, y: 0 };
        const { width, height, left, top } = container.getBoundingClientRect();
        const raycast = (e) => {
            mouse.x = ((e.clientX - left) / width) * 2 - 1;
            mouse.y = -((e.clientY - top) / height) * 2 + 1;
            this.viewer.raycaster.setFromCamera(mouse, this.viewer.camera);
            const instersects = this.viewer.raycaster.intersectObject(this.game.navMesh);
            if (instersects.length > 0) {
                const pt = instersects[0].point;
                this.npcs[0].newPath(pt);
            }
        };
        container.addEventListener('click', raycast, false);
    }
    update(dt) {
        if (this.npcs)
            this.npcs.forEach((npc) => npc.update(dt));
    }
}
