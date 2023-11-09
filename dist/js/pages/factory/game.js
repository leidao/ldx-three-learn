/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-04 19:09:27
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-06 16:15:51
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { NPCHandler } from './npcHandler';
export class Game {
    clock;
    /** 视图 */
    viewer;
    gltfLoader;
    factory;
    /** 风扇扇叶 */
    fans = [];
    navMesh;
    npcHandler;
    constructor(viewer) {
        this.viewer = viewer;
        viewer.useLoadingManager();
        this.clock = new THREE.Clock();
        this.gltfLoader = new GLTFLoader(viewer.loadmanager);
        this.init();
        this.loadFactory();
        this.npcHandler = new NPCHandler(this);
    }
    init() {
        const color = 0x201510;
        this.viewer.scene.background = new THREE.Color(color);
        // 雾
        this.viewer.scene.fog = new THREE.Fog(color, 100, 200);
        this.viewer.renderer.outputEncoding = THREE.sRGBEncoding;
        this.viewer.camera.position.set(0, 60, 20);
        this.viewer.camera.lookAt(0, 0, -10);
        this.viewer.renderer.shadowMap.enabled = true;
        const ambient = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        this.viewer.scene.add(ambient);
        // 投射阴影
        this.viewer.directionalLight.position.set(0, 20, 20);
        this.viewer.directionalLight.target.position.set(-2, 0, 0);
        this.viewer.directionalLight.castShadow = true;
        // 设置阴影的投射范围大小
        this.viewer.directionalLight.shadow.mapSize.set(1024, 512);
        this.viewer.directionalLight.shadow.camera.near = 0.5;
        this.viewer.directionalLight.shadow.camera.far = 50;
        const d = 30;
        this.viewer.directionalLight.shadow.camera.left = -d;
        this.viewer.directionalLight.shadow.camera.right = d;
        this.viewer.directionalLight.shadow.camera.top = d;
        this.viewer.directionalLight.shadow.camera.bottom = -d * 0.25;
        const cameraHelp = new THREE.CameraHelper(this.viewer.directionalLight.shadow.camera);
        this.viewer.scene.add(cameraHelp);
    }
    render() {
        this.viewer.render();
    }
    loadFactory() {
        this.gltfLoader.setPath('factory/glb/');
        this.gltfLoader.load('factory2.glb', (gltf) => {
            this.factory = gltf.scene;
            this.viewer.scene.add(this.factory);
            this.fans = [];
            const mergeObjs = { elements2: [], elements5: [], terrain: [] };
            this.factory.traverse((child) => {
                if (child.isMesh) {
                    if (child.name === 'NavMesh') {
                        this.navMesh = child;
                        // this.navMesh.geometry.rotateX(Math.PI / 2)
                        // this.navMesh.quaternion.identity()
                        // this.navMesh.position.set(0, 0, 0)
                        child.material.transparent = true;
                        child.material.opacity = 0.5;
                        child.material.wireframe = true;
                        // child.material.color = new THREE.Color(0x00ff00)
                    }
                    else if (child.name.includes('fan')) {
                        this.fans.push(child);
                    }
                    else if (child.material.name.includes('elements2')) {
                        // 木头箱子
                        mergeObjs.elements2.push(child);
                        child.castShadow = true;
                    }
                    else if (child.material.name.includes('elements5')) {
                        // 管道
                        mergeObjs.elements5.push(child);
                        child.castShadow = true;
                    }
                    else if (child.material.name.includes('terrain')) {
                        // 外围地形
                        mergeObjs.terrain.push(child);
                        child.castShadow = true;
                    }
                    else if (child.material.name.includes('sand')) {
                        // 内围地形/沙子 接收投影
                        child.receiveShadow = true;
                    }
                    else if (child.material.name.includes('elements1')) {
                        // 比地形高一点的平地
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                    else if (child.parent.name.includes('main')) {
                        // 风扇/罐体
                        child.castShadow = true;
                        // child.material.color = new THREE.Color(0x00ff00)
                    }
                }
            });
            this.viewer.scene.add(this.navMesh);
            // let material;
            // Object.keys(mergeObjs).forEach(key=>{
            //   if(material)
            // })
            this.render();
        }, (xhr) => {
            this.viewer.onProgress('factory.glb', xhr);
        });
    }
    update = () => {
        const dt = this.clock.getDelta();
        this.fans.forEach((fan) => fan.rotateY(dt));
        this.render();
    };
}
