/*
 * @Description: three视图
 * @Author: ldx
 * @Date: 2023-10-26 09:21:40
 * @LastEditors: ldx
 * @LastEditTime: 2024-07-19 10:41:24
 */
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { LoadingBar } from '@/three/LoadingBar'

export type LoaderManager = {
  onProgress: (assetName: string, xhr: ProgressEvent<EventTarget>) => void
  onError: (error: ErrorEvent) => void
}

const config = {
  /** 环境光 */
  AMBIENT_LIGHT_COLOR: 0xcecbcb,
  /** 平行光 */
  DIRECTIONAL_LIGHT_COLOR: 0xffffff,
  /** 投影空间大小 */
  SCALE: 130
}
export default class Viewer  {
  /** 场景 */
  scene!: THREE.Scene
  /** 透视相机 */
  camera!: THREE.PerspectiveCamera
  /** 渲染 */
  renderer!: THREE.WebGLRenderer
  /** 控制器 */
  controls!: OrbitControls
  /** 射线 */
  raycaster!: THREE.Raycaster
  gltfLoader!: GLTFLoader
  /** 容器 */
  container!: HTMLDivElement
  /** 平行光 */
  directionalLight!: THREE.DirectionalLight
  loadmanager!: THREE.LoadingManager
  loadingBar: LoadingBar
  onProgress!: (assetName: string, xhr: ProgressEvent) => void
  constructor(container: HTMLDivElement) {
    this.container = container
    this.initScene()
    this.raycaster = new THREE.Raycaster()
    this.loadingBar = new LoadingBar()

  }
  /**
   * @function: 初始化编辑器场景
   */
  initScene() {
    const { width, height } = this.container.getBoundingClientRect()
    /** 创建场景 */
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0xaaaaaa)
    /** 创建相机 */
    const k = width / height
    this.camera = new THREE.PerspectiveCamera(45, k, 1, 1000)
    this.camera.up.y = 1
    const target = this.scene.position
    this.camera.lookAt(target)
    this.camera.position.set(80, 30, -30)
    /** 创建渲染器 */
    this.renderer = new THREE.WebGLRenderer({
      antialias: true, //开启抗锯齿
      alpha: true // 是否可以设置背景色透明
    })
    this.renderer.setClearColor(0x000000, 0)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(width, height)
    this.renderer.shadowMap.enabled = false
    this.container.appendChild(this.renderer.domElement)

    const obj3d = new THREE.Object3D();
    obj3d.position.set(0, 0, 0);
    /** 创建光照 */
    const ambientLight = new THREE.AmbientLight(config.AMBIENT_LIGHT_COLOR, 1)
    ambientLight.position.set(0,20,0)
    this.scene.add(ambientLight)

    const directionalLight1 = new THREE.DirectionalLight(
      config.DIRECTIONAL_LIGHT_COLOR,
      2
    )
    directionalLight1.position.set(30, 100, 50)
    directionalLight1.target = obj3d
    this.scene.add(directionalLight1)
    const directionalLight2 = new THREE.DirectionalLight(
      config.DIRECTIONAL_LIGHT_COLOR,
      1
    )
    directionalLight2.position.set(0, 20, -50)
    directionalLight2.target = obj3d
    // this.scene.add(directionalLight2)

    this.scene.fog = new THREE.Fog(0xaaaaaa, 110, 160)

    // this.renderer.outputEncoding = THREE.sRGBEncoding

    // const axesHelper1 = new THREE.DirectionalLightHelper(directionalLight1,10);
    // const axesHelper2 = new THREE.DirectionalLightHelper(directionalLight2,10);
    // axesHelper.position.set(0,30,0)
    // this.scene.add(axesHelper1);
    // this.scene.add(axesHelper2);

    this.restoreContext()
  }
  /**
   * @function: 使用控制器
   */
  useOrbitControls = () => {
    // 创建控件对象
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.maxPolarAngle = Math.PI * 0.40;
    this.controls.minDistance = 15.0;
    this.controls.maxDistance = 100.0;
    this.controls.enablePan = false
    //监听鼠标、键盘事件
    this.controls.addEventListener('change', () => {
      this.render()
    })
  }
  /**
   * @function: 更新场景
   */
  render = () => {
    this.renderer.render(this.scene, this.camera)
  }
  /**
   * @function: 自适应窗口
   */
  onResize = () => {
    const { width, height } = this.container.getBoundingClientRect()
    const k = width / height
    this.renderer.setSize(width, height)
    this.camera.aspect = k
    this.camera.updateProjectionMatrix()
    this.render()
  }
  restoreContext() {
    const canvas = this.renderer.domElement
    canvas.addEventListener('webglcontextlost', (event) => {
      event.preventDefault()
      setTimeout(() => {
        this.renderer.forceContextRestore()
      }, 1)
    })
  }
  listen = () => {
    window.addEventListener('resize', this.onResize)
  }
  destroy = () => {
    window.removeEventListener('resize', this.onResize)
  }

  useLoadingManager() {
    const assets = new Map()
    this.loadmanager = new THREE.LoadingManager()
    this.loadmanager.onStart = () => {
      // console.log('onStart', url, itemsLoaded, itemsTotal)
      this.loadingBar.visible = true
    }

    this.loadmanager.onLoad = () => {
      this.loadingBar.visible = false
    }

    this.loadmanager.onError = (url) => {
      console.log('资源加载出错：', url)
    }

    this.onProgress = (assetName, xhr) => {
      const asset = assets.get(assetName)
      if (!asset) {
        assets.set(assetName, { loaded: xhr.loaded, total: xhr.total })
      } else {
        asset.loaded = xhr.loaded
        asset.total = xhr.total
      }
      this.loadingBar.update(assets)
    }
  }

  /** 加载高速服务区 */
  loadServiceArea() {
    this.gltfLoader = new GLTFLoader(this.loadmanager)
    this.gltfLoader.setPath('serviceArea/glb/')
    this.gltfLoader.load(
      'serviceArea.glb',
      (gltf) => {
        // this.factory = gltf.scene
        this.scene.add(gltf.scene)
        // this.fans = []
        // const mergeObjs: any = { elements2: [], elements5: [], terrain: [] }
        gltf.scene.traverse((child: any) => {
          if (child.isMesh) {
            if (child.name === '平面001') {
              const material = new THREE.MeshLambertMaterial({
                map: child.material.map,
              })
              child.material = material
            }
            if (child.name === '平面003') {
              child.material = new THREE.MeshLambertMaterial({
                color:'#545454'
              })
            }
          }
          // console.log('child', child, child.isMesh);
        })

        this.render()
      },
      (xhr) => {
        this.onProgress('serviceArea.glb', xhr)
      }
    )
  }
}
