/*
 * @Description: three视图
 * @Author: ldx
 * @Date: 2023-10-26 09:21:40
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-04 00:48:48
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
// import {
//   CSS2DObject,
//   CSS2DRenderer
// } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
// import SpriteText from 'three-spritetext'
import { Emit } from './emit';
import { lon2xyz, threeToScreen } from './math';
export { lon2xyz, threeToScreen };
const config = {
    /** 环境光 */
    AMBIENT_LIGHT_COLOR: 0xffffff,
    /** 平行光 */
    DIRECTIONAL_LIGHT_COLOR: 0xffffff,
    /** 投影空间大小 */
    SCALE: 130
};
export default class Viewer extends Emit {
    /** 场景 */
    scene;
    /** 透视相机 */
    camera;
    /** 渲染 */
    renderer;
    /** 控制器 */
    controls;
    /** 射线 */
    raycaster;
    /** 加载器 */
    textLoader;
    /** 容器 */
    container;
    manager;
    constructor(container) {
        super();
        this.container = container;
        this.raycaster = new THREE.Raycaster();
        this.textLoader = new THREE.TextureLoader();
        this.textLoader.setCrossOrigin('');
        this.useLoadingManager();
    }
    /**
     * @function: 初始化编辑器场景
     */
    initScene() {
        const { width, height } = this.container.getBoundingClientRect();
        /** 创建场景 */
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xaaaaaa);
        /** 创建相机 */
        const k = width / height;
        this.camera = new THREE.PerspectiveCamera(45, k, 1, 1000);
        this.camera.up.y = 1;
        const target = this.scene.position;
        this.camera.lookAt(target);
        this.camera.position.set(0, 0, 180);
        /** 创建渲染器 */
        this.renderer = new THREE.WebGLRenderer({
            antialias: true //开启抗锯齿
        });
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(width, height);
        this.renderer.shadowMap.enabled = false;
        this.container.appendChild(this.renderer.domElement);
        /** 创建光照 */
        const ambientLight = new THREE.AmbientLight(config.AMBIENT_LIGHT_COLOR);
        this.scene.add(ambientLight);
        const obj3d = new THREE.Object3D();
        obj3d.position.set(0, 0, 0);
        const directionalLight = new THREE.DirectionalLight(config.DIRECTIONAL_LIGHT_COLOR, 1);
        directionalLight.position.set(0, 0, 500);
        directionalLight.target = obj3d;
        this.scene.add(obj3d);
        this.scene.add(directionalLight);
    }
    /**
     * @function: 使用控制器
     */
    useOrbitControls = () => {
        // 创建控件对象
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        //监听鼠标、键盘事件
        this.controls.addEventListener('change', () => {
            this.render();
        });
    };
    /**
     * @function: 更新场景
     */
    render = () => {
        this.renderer.render(this.scene, this.camera);
    };
    /**
     * @function: 自适应窗口
     */
    onResize = () => {
        const { width, height } = this.container.getBoundingClientRect();
        const k = width / height;
        this.renderer.setSize(width, height);
        this.camera.aspect = k;
        this.camera.updateProjectionMatrix();
        this.render();
    };
    listen = () => {
        window.addEventListener('resize', this.onResize);
    };
    destroy = () => {
        window.removeEventListener('resize', this.onResize);
    };
    useLoadingManager() {
        this.manager = new THREE.LoadingManager();
        this.manager.onStart = (url, itemsLoaded, itemsTotal) => {
            console.log('onStart', url, itemsLoaded, itemsTotal);
        };
        this.manager.onLoad = () => {
            this.emit('complete', '123');
        };
        this.manager.onProgress = (url, itemsLoaded, itemsTotal) => {
            console.log('onProgress', url, itemsLoaded, itemsTotal);
        };
        this.manager.onError = (url) => {
            console.log('There was an error loading ' + url);
        };
    }
}