/*
 * @Description: 音效
 * @Author: ldx
 * @Date: 2023-11-04 02:00:19
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-06 11:00:49
 */
import * as THREE from 'three'

export default class Music {
  camera: THREE.PerspectiveCamera
  audioLoader!: THREE.AudioLoader
  loadmanager!: THREE.LoadingManager
  sounds: { [key: string]: THREE.Audio } = {}

  constructor(
    camera: THREE.PerspectiveCamera,
    loadmanager: THREE.LoadingManager
  ) {
    this.camera = camera
    this.loadmanager = loadmanager
    this.useAudioLoader()
  }
  useAudioLoader() {
    this.audioLoader = new THREE.AudioLoader(this.loadmanager)
  }
  loadMusic(name: string, path: string, loop = false, volume = 0.5) {
    const listener = new THREE.AudioListener()
    this.camera.add(listener)
    const sound = new THREE.Audio(listener)
    this.audioLoader.setPath(path)

    this.audioLoader.load(name, (buffer) => {
      sound.setBuffer(buffer)
      sound.setLoop(loop)
      sound.setVolume(volume)
      // sound.play()
    })
    this.sounds[name] = sound
  }
  /** 设置音量 */
  setVolume(name: string, volume: number) {
    const sound = this.sounds[name]
    if (!sound) return
    sound.setVolume(volume)
  }
  /** 设置循环 */
  setLoop(name: string, loop: boolean) {
    const sound = this.sounds[name]
    if (!sound) return
    sound.setLoop(loop)
  }
  /** 设置播放 */
  setPlay(name: string) {
    const sound = this.sounds[name]
    if (!sound || sound.isPlaying) return
    sound.play()
  }
  /** 设置停止 */
  setStop(name: string) {
    const sound = this.sounds[name]
    if (!sound || !sound.isPlaying) return
    sound.stop()
  }
  /** 设置停止所有 */
  setStopAll() {
    Object.keys(this.sounds).forEach((key) => {
      this.setStop(key)
    })
  }
  /** 暂停 */
  pause(name: string) {
    const sound = this.sounds[name]
    if (!sound || !sound.isPlaying) return
    sound.pause()
  }
}
