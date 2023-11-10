/*
 * @Description: three视图
 * @Author: ldx
 * @Date: 2023-10-26 09:21:40
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-10 16:57:42
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
import { LoadingBar } from './LoadingBar';
import { lon2phi, lon2xyz, startEndQuaternion, threePointToCenter, threeToScreen, xyz2lon } from './math';
import Music from './music';
export { lon2phi, lon2xyz, startEndQuaternion, threePointToCenter, threeToScreen, xyz2lon };
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
    /** 容器 */
    container;
    /** 平行光 */
    directionalLight;
    loadmanager;
    music;
    loadingBar;
    onProgress;
    constructor(container) {
        super();
        this.container = container;
        this.initScene();
        this.raycaster = new THREE.Raycaster();
        this.loadingBar = new LoadingBar();
        this.music = new Music(this.camera, this.loadmanager);
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
            antialias: true,
            alpha: true // 是否可以设置背景色透明
        });
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(width, height);
        this.renderer.shadowMap.enabled = false;
        this.container.appendChild(this.renderer.domElement);
        /** 创建光照 */
        const ambientLight = new THREE.AmbientLight(config.AMBIENT_LIGHT_COLOR, 1);
        this.scene.add(ambientLight);
        const obj3d = new THREE.Object3D();
        obj3d.position.set(0, 0, 0);
        this.directionalLight = new THREE.DirectionalLight(config.DIRECTIONAL_LIGHT_COLOR, 1);
        this.directionalLight.position.set(0, 0, 500);
        this.directionalLight.target = obj3d;
        this.scene.add(obj3d);
        this.scene.add(this.directionalLight);
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
    // useLoadingManager() {
    //   // this.loadingBar.visible = true
    //   this.loadmanager = {
    //     onProgress: (assetName, xhr) => {
    //       // console.log('onProgress', url, itemsLoaded, itemsTotal)
    //       // console.log('this.loadingBar.total', this.loadingBar.total)
    //       if (this.loadingBar.total > 1 && !this.loadingBar.visible) {
    //         this.loadingBar.visible = true
    //       }
    //       this.loadingBar.update(assetName, xhr)
    //       if (this.loadingBar.loaded) {
    //         this.emit('complete')
    //         this.loadingBar.visible = false
    //       }
    //       // console.log('loaded', this.loadingBar.loaded)
    //     },
    //     onError: (err) => {
    //       console.log('资源加载出错：', err)
    //     }
    //   }
    // }
    useLoadingManager() {
        const assets = new Map();
        this.loadmanager = new THREE.LoadingManager();
        this.loadmanager.onStart = () => {
            // console.log('onStart', url, itemsLoaded, itemsTotal)
            this.loadingBar.visible = true;
        };
        this.loadmanager.onLoad = () => {
            this.emit('load_complete');
            this.loadingBar.visible = false;
        };
        // this.loadmanager.onProgress = () => {
        // }
        this.loadmanager.onError = (url) => {
            console.log('资源加载出错：', url);
        };
        this.onProgress = (assetName, xhr) => {
            const asset = assets.get(assetName);
            if (!asset) {
                assets.set(assetName, { loaded: xhr.loaded, total: xhr.total });
            }
            else {
                asset.loaded = xhr.loaded;
            }
            this.loadingBar.update(assets);
        };
    }
}
