/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-06 15:33:12
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-06 15:59:40
 */
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

import Viewer from '@/three'

import { Game } from './game'
export class NPCHandler {
  game: Game
  viewer: Viewer
  constructor(game: Game) {
    this.game = game
    this.viewer = game.viewer
    this.load()
  }
  load() {
    this.game.gltfLoader.setPath('factory/glb/')
    const dracoLoader = new DRACOLoader(this.viewer.loadmanager)
    dracoLoader.setDecoderPath('factory/draco/')
    this.game.gltfLoader.setDRACOLoader(dracoLoader)
    this.game.gltfLoader.load(
      'swat-guy2.glb',
      (gltf) => {
        // this.gltf = gltf.scene
        this.viewer.scene.add(gltf.scene)
        // gltf.scene.scale.set(10, 10, 10)
        this.game.render()
      },
      (xhr) => {
        this.viewer.onProgress('swat-guy2.glb', xhr)
      }
    )
  }
  initNpcs() {}
}
