/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-01 14:49:12
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-05 22:21:42
 */
import _ from 'lodash'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import type Viewer from '../../three'
import { noise } from './Noise'
import shader from './shader'
export class Game {
  /** 视图 */
  viewer: Viewer
  gltfLoader: GLTFLoader
  /** 加载器 */
  textLoader!: THREE.TextureLoader
  plane!: THREE.Object3D
  bomb!: THREE.Object3D
  star!: THREE.Object3D
  obstacles!: THREE.Group
  obstacle!: THREE.Group
  clock1: THREE.Clock
  clock2: THREE.Clock
  /** 空格键是否按中 */
  spaceing = false
  /** 是否游戏中 */
  playing = false
  event: any = {}
  pos: THREE.Vector3
  ball!: THREE.Mesh
  ballUniforms: any
  starNum = 0
  lifeNum = 5
  constructor(viewer: Viewer) {
    this.event = {
      keydown: _.throttle(this.keydown, 60),
      keyup: _.throttle(this.keyup, 60),
      mousedown: _.throttle(this.mousedown, 60),
      mouseup: _.throttle(this.mouseup, 60)
    }
    viewer.useLoadingManager()
    this.viewer = viewer
    this.clock1 = new THREE.Clock()
    this.clock2 = new THREE.Clock()
    this.gltfLoader = new GLTFLoader(viewer.loadmanager)
    this.textLoader = new THREE.TextureLoader(viewer.loadmanager)
    this.textLoader.setCrossOrigin('')
    this.loadSky()
    this.loadPlane()
    this.loadObstacle()
    this.listen()
    this.initBall()
    this.initMusic()
    this.pos = new THREE.Vector3()
    this.viewer.on('complete', () => {
      this.obstacles = new THREE.Group()
      for (let i = 0; i < 10; i++) {
        const obstacle = this.obstacle.clone()

        obstacle.position.z += 150 * i
        obstacle.position.y += Math.sin(i) * 40
        // obstacle.position.y += (Math.random() * 2 - 1) * 40
        this.obstacles.add(obstacle)
      }
      // console.log('bbbb', this.obstacles, this.obstacle)
      this.viewer.scene.add(this.obstacles)
      this.render()
    })
  }
  render() {
    this.viewer.render()
  }
  /** 加载天空 */
  loadSky() {
    return new THREE.CubeTextureLoader()
      .setPath('skybox/漫天彩云/')
      .load(
        ['lf.jpg', 'rt.jpg', 'up.jpg', 'dn.jpg', 'fr.jpg', 'bk.jpg'],
        (cubeTexture) => {
          this.viewer.scene.background = cubeTexture
          this.render()
        }
      )
  }
  initBall() {
    const geometry = new THREE.IcosahedronGeometry(20, 14)
    ;(THREE.ShaderChunk as any).noise = noise
    this.ballUniforms = {
      u_time: { value: 0.0 },
      u_mouse: { value: { x: 0.0, y: 0.0 } },
      u_opacity: { value: 0.6 },
      u_resolution: { value: { x: 0, y: 0 } },
      u_tex: {
        value: this.textLoader.load(`plane/img/explosion.png`)
      }
    }
    const material = new THREE.ShaderMaterial({
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader,
      uniforms: this.ballUniforms,
      transparent: true,
      opacity: 0.6
    })
    this.ball = new THREE.Mesh(geometry, material)
    this.ball.name = 'ball'
  }
  /** 初始化音乐 */
  initMusic() {
    this.viewer.music.loadMusic('gliss.mp3', 'plane/music/')
    this.viewer.music.loadMusic('engine.mp3', 'plane/music/', true, 1)
    this.viewer.music.loadMusic('explosion.mp3', 'plane/music/')
  }
  /** 加载飞机 */
  loadPlane() {
    this.gltfLoader.setPath('plane/glb/')
    this.gltfLoader.load(
      'microplane.glb',
      (glb) => {
        this.plane = glb.scene
        this.plane.scale.set(10, 10, 10)
        this.plane.position.set(0, 0, -100)
        // console.log(' this.plane', this.plane)

        this.viewer.scene.add(this.plane)
        this.viewer.camera.position.set(-180, 0, -40)
        this.viewer.camera.lookAt(this.plane.position)
        // this.viewer.camera.rotateX(-Math.PI / 2)
        this.render()
      },
      (xhr) => {
        this.viewer.onProgress('microplane.glb', xhr)
      }
    )
  }
  /** 加载障碍物 */
  loadObstacle() {
    this.obstacle = new THREE.Group()
    this.gltfLoader.setPath('plane/glb/')
    this.gltfLoader.load(
      'bomb.glb',
      (glb) => {
        this.bomb = glb.scene
        this.bomb.scale.set(10, 10, 10)
        const values = [90, 45, -45, -90]
        for (let i = 0; i < 4; i++) {
          const bomb = this.bomb.clone()
          bomb.position.y += values[i]
          bomb.rotation.set(i % 2 ? -Math.PI / 2 : -Math.PI, 0, 0)
          bomb.name = 'bomb'
          bomb.userData.isCollide = false
          this.obstacle.add(bomb)
        }
      },
      (xhr) => {
        this.viewer.onProgress('bomb.glb', xhr)
      }
    )
    this.gltfLoader.load(
      'star.glb',
      (glb) => {
        this.star = glb.scene
        this.star.scale.set(10, 10, 10)
        const star = this.star.clone()
        star.name = 'star'
        star.userData.isCollide = false
        this.obstacle.add(star)
      },
      (xhr) => {
        this.viewer.onProgress('star.glb', xhr)
      }
    )
  }
  update() {
    const time = this.clock1.getElapsedTime()
    const time2 = this.clock2.getElapsedTime()

    if (!this.plane) return
    if (this.playing) {
      // console.log('this.spaceing', this.spaceing)
      if (this.spaceing) {
        this.plane.position.y += 0.8
      } else {
        this.plane.position.y -= 1.4
      }
      this.plane.position.z += 0.8
      this.viewer.camera.position.z += 0.8
      this.viewer.camera.position.y =
        this.plane.position.y + Math.cos(time * 1.5) * 10
      this.computedCollision(this.pos)
      this.ballUniforms.u_time.value = time2
      this.ballUniforms.u_opacity.value = Math.cos(time2)
      this.plane.children.forEach((child) => {
        child.children.forEach((mesh) => {
          if (mesh.name === 'propeller') {
            mesh.rotation.set(0, 0, Math.cos(time * 80))
          }
        })
      })
    } else {
      this.plane.position.y = Math.cos(time * 1.5) * 10
    }
    this.viewer.camera.lookAt(this.plane.position)
    this.plane.rotation.z = Math.sin(time * 3) * 0.2
    this.render()
    // this.plane.rotation
  }
  /** 计算碰撞 */
  computedCollision(position: THREE.Vector3) {
    this.plane.getWorldPosition(position)
    const { y, z } = position
    this.obstacles.children.forEach((child) => {
      const p2 = new THREE.Vector3()
      child.getWorldPosition(p2)
      // console.log('xxx', p2.z - z)
      const distance = p2.z - z
      if (distance < 14 && distance > -24) {
        child.children.forEach((mesh) => {
          const p3 = new THREE.Vector3()
          mesh.getWorldPosition(p3)
          const distance2 = p3.y - y
          if (distance2 < 10 && distance2 > -10 && !mesh.userData.isCollide) {
            mesh.userData.isCollide = true
            if (mesh.name === 'star') {
              this.viewer.music.setPlay('gliss.mp3')
              this.starNum++
              this.viewer.emit('addStar', this.starNum)
            } else {
              this.viewer.music.setPlay('explosion.mp3')
              this.lifeNum--
              this.viewer.emit('decLife', this.lifeNum)
              this.ball.position.set(p3.x, p3.y, p3.z)
              this.viewer.scene.add(this.ball)
              this.clock2.start()
            }
          }
        })
      } else {
        child.children.forEach((mesh) => {
          if (mesh.userData.isCollide) {
            mesh.userData.isCollide = false
            if (mesh.name === 'star') {
              this.viewer.music.setStop('gliss.mp3')
            } else {
              this.viewer.music.setStop('explosion.mp3')
              this.viewer.scene.remove(this.ball)
            }
          }
        })
      }
    })
  }
  listen() {
    document.addEventListener('keydown', this.event.keydown)
    document.addEventListener('keyup', this.event.keyup)
    document.addEventListener('mousedown', this.event.mousedown)
    document.addEventListener('mouseup', this.event.mouseup)
    document.addEventListener('touchstart', this.event.mousedown)
    document.addEventListener('touchend', this.event.mouseup)
  }
  destroy() {
    document.removeEventListener('keydown', this.event.keydown)
    document.removeEventListener('keyup', this.event.keyup)
    document.removeEventListener('mousedown', this.event.mousedown)
    document.removeEventListener('mouseup', this.event.mouseup)
    document.removeEventListener('touchstart', this.event.mousedown)
    document.removeEventListener('touchend', this.event.mouseup)
    this.viewer.destroy()
  }
  /** 键盘按下 */
  keydown = (event: KeyboardEventInit) => {
    switch (event.keyCode) {
      case 32:
        this.spaceing = true
        break
      default:
        break
    }
  }
  /** 键盘抬起 */
  keyup = (event: KeyboardEventInit) => {
    switch (event.keyCode) {
      case 32:
        this.spaceing = false
        break

      default:
        break
    }
  }
  /** 鼠标按下 */
  mousedown = (event: Event) => {
    // console.log('mousedown', event)
  }
  /** 鼠标抬起 */
  mouseup = (event: Event) => {
    // console.log('mouseup', event)
  }
  startGame() {
    this.playing = true
    this.viewer.music.setPlay('engine.mp3')
  }
  gameOver() {
    this.reset()
  }
  reset() {
    this.playing = false
    this.lifeNum = 5
    this.starNum = 0
    this.viewer.music.setStopAll()
    this.plane.position.set(0, 0, -100)
    this.viewer.camera.position.set(-180, 0, -40)
    // this.viewer.scene.remove(this.ball)
    // this.obstacles.children.forEach((child) => {
    //   child.children.forEach((mesh) => {
    //     mesh.userData.isCollide = false
    //   })
    // })
  }
}
