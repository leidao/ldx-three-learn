/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-06 15:33:12
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-13 22:20:50
 */
import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

import Viewer from '@/three'

import { Game } from './game'
import { NPC, Options } from './npc'
export class NPCHandler {
  game: Game
  viewer: Viewer
  gltf!: GLTF
  npcs: NPC[] = []
  waypoints: THREE.Vector3[] = []
  constructor(game: Game) {
    this.game = game
    this.viewer = game.viewer
    this.load()
    this.initMouseHandler()
  }
  get randonWaypoint() {
    const index = Math.floor(Math.random() * this.waypoints.length)
    return this.waypoints[index]
  }
  load() {
    this.game.gltfLoader.setPath('factory/glb/')
    const dracoLoader = new DRACOLoader(this.viewer.loadmanager)
    dracoLoader.setDecoderPath('factory/draco/')
    this.game.gltfLoader.setDRACOLoader(dracoLoader)
    this.game.gltfLoader.load(
      'swat-guy2.glb',
      (gltf) => {
        if (this.game.pathfinder) {
          this.initNPCs(gltf)
        } else {
          this.gltf = gltf
          // this.viewer.scene.add(gltf.scene)
          // this.game.render()
        }
      },
      (xhr) => {
        this.viewer.onProgress('swat-guy2.glb', xhr)
      }
    )
  }
  /** 初始化npc */
  initNPCs(gltf = this.gltf) {
    const gltfs = [gltf]
    this.waypoints = this.game.waypoints
    this.npcs = []
    // for (let i = 0; i < 3; i++) {
    //   gltfs.push(this.cloneGLTF(gltf))
    // }
    gltfs.forEach((gltf) => {
      const object = gltf.scene
      object.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          child.castShadow = true
        }
      })
      const options: Options = {
        object,
        speed: 0.8,
        animations: gltf.animations,
        // waypoints: this.waypoints,
        app: this.game,
        showPath: true,
        zone: 'factory',
        name: 'swat-guy'
      }
      const npc = new NPC(options)
      npc.object.position.copy(this.randonWaypoint)
      // npc.newPath(this.randonWaypoint)
      this.npcs.push(npc)
    })
  }
  cloneGLTF(gltf: GLTF) {
    const clone = {
      animations: gltf.animations,
      scene: gltf.scene.clone(true)
    } as GLTF
    const skinnedMeshs: any = {}
    gltf.scene.traverse((node) => {
      if ((node as any).isSkinnedMesh) {
        skinnedMeshs[node.name] = node
      }
    })
    const cloneBones: any = {}
    const cloneSkinnedMeshs: any = {}
    clone.scene.traverse((node) => {
      if ((node as any).isBone) {
        cloneBones[node.name] = node
      }
      if ((node as any).isSkinnedMesh) {
        cloneSkinnedMeshs[node.name] = node
      }
    })
    for (const key in skinnedMeshs) {
      const skinnedMesh = skinnedMeshs[key]
      const skeleton = skinnedMesh.skeleton
      const cloneSkinnedMesh = cloneSkinnedMeshs[key]
      const orderedCloneBones = []
      for (let i = 0; i < skeleton.bones.length; ++i) {
        const cloneBone = cloneBones[skeleton.bones[i].name]
        orderedCloneBones.push(cloneBone)
      }
      cloneSkinnedMesh.bind(
        new THREE.Skeleton(orderedCloneBones, skeleton.boneInverses),
        cloneSkinnedMesh.matrixWorld
      )
    }
    return clone
  }
  /** 初始化鼠标事件 */
  initMouseHandler() {
    // this.viewer.raycaster
    const container = this.viewer.renderer.domElement
    const mouse = { x: 0, y: 0 }
    const { width, height, left, top } = container.getBoundingClientRect()
    const raycast = (e: any) => {
      mouse.x = ((e.clientX - left) / width) * 2 - 1
      mouse.y = -((e.clientY - top) / height) * 2 + 1
      this.viewer.raycaster.setFromCamera(mouse, this.viewer.camera)
      const instersects = this.viewer.raycaster.intersectObject(
        this.game.navMesh
      )

      if (instersects.length > 0) {
        const pt = instersects[0].point
        console.log('pt', pt)

        this.npcs[0].newPath(pt)
      }
    }
    container.addEventListener('click', raycast, false)
  }
  update(dt: number) {
    if (this.npcs) this.npcs.forEach((npc) => npc.update(dt))
  }
}
