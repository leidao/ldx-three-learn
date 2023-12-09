import { OrbitControler, Rect, Scene } from '@/canvas'

type Option = {
  container: HTMLDivElement
}
export class Viewer {
  option: Option
  /** canvas元素 */
  domElement!: HTMLCanvasElement
  /** 场景 */
  scene!: Scene
  /** 控制器 */
  orbitControler!: OrbitControler
  constructor(option: Option) {
    this.option = option
    this.init()
  }
  init() {
    if (!this.option.container) return
    const container = this.option.container
    const canvas = document.createElement('canvas')
    container.appendChild(canvas)
    this.domElement = canvas
    this.scene = new Scene({ domElement: canvas })

    const rect = new Rect({ startX: 0, startY: 0, width: 100, height: 100 })

    this.scene.add(rect)

    this.orbitControler = new OrbitControler(this.scene, {
      maxZoom: 10,
      minZoom: 0.1
    })

    this.scene.render()
    this.orbitControler.addEventListener('change', () => {
      this.scene.render()
    })
  }
}
