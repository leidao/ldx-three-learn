/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-15 12:27:07
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-05 08:49:09
 */

import { Camera } from '../core/camera'
import { EventDispatcher } from '../core/eventDispatcher'
import { Vector2 } from '../math/vector2'
/* change 事件 */
// const _changeEvent = { type: 'change' }

/* 暂存数据类型 */
type Stage = {
  cameraZoom: number
  cameraPosition: Vector2
  panStart: Vector2
}

/* 配置项 */
type Option = {
  camera?: Camera
  enableZoom?: boolean
  zoomSpeed?: number
  enablePan?: boolean
  panSpeed?: number
}

/* 相机轨道控制 */
export class OrbitControler extends EventDispatcher {
  /** 相机 */
  camera: Camera
  /** 允许缩放 */
  enableZoom = true
  /** 缩放速度 */
  zoomSpeed = 3.0

  /** 允许位移 */
  enablePan = true
  /** 位移速度 */
  panSpeed = 1.0

  /** 是否正在拖拽中 */
  panning = false
  /** 最小缩放值 */
  minZoom = Infinity
  /** 最大缩放值 */
  maxZoom = Infinity

  //变换相机前的暂存数据
  stage: Stage = {
    cameraZoom: 1,
    cameraPosition: new Vector2(),
    panStart: new Vector2()
  }
  event!: {
    wheel: (event: WheelEvent) => void
    pointerdown: (event: PointerEvent) => void
    pointermove: (event: PointerEvent) => void
    pointerup: (event: PointerEvent) => void
  }
  constructor(camera: Camera, option: Option = {}) {
    super()
    this.camera = camera
    this.setOption(option)
  }

  /* 设置属性 */
  setOption(option: Option) {
    Object.assign(this, option)
  }

  /* 缩放 */
  wheel = (event: WheelEvent) => {
    const { deltaY } = event
    const { enableZoom, camera, zoomSpeed, stage } = this
    if (!enableZoom) {
      return
    }
    stage.cameraZoom = camera.zoom
    const scale = Math.pow(0.95, zoomSpeed)

    if (deltaY > 0) {
      if (camera.zoom > this.maxZoom) return

      camera.zoom /= scale
    } else {
      if (camera.zoom < this.minZoom) return

      camera.zoom *= scale
    }

    const _changeEvent = {
      type: 'change',
      target: event
    }
    this.dispatchEvent(_changeEvent)
  }

  /* 鼠标按下 */
  pointerdown = (event: PointerEvent) => {
    const { clientX: cx, clientY: cy } = event
    const {
      enablePan,
      stage: { cameraPosition, panStart },
      camera: { position }
    } = this
    if (!enablePan) {
      return
    }
    this.panning = true
    cameraPosition.copy(position)
    panStart.set(cx, cy)
  }

  /* 鼠标抬起 */
  pointerup = () => {
    this.panning = false
  }

  /* 位移 */
  pointermove = (event: PointerEvent, type = 'xy') => {
    const { clientX: cx, clientY: cy } = event
    const {
      enablePan,
      camera: { position },
      stage: {
        panStart: { x, y },
        cameraPosition
      },
      panning
    } = this
    if (!enablePan || !panning) {
      return
    }
    position.copy(
      cameraPosition
        .clone()
        .add(new Vector2(type === 'y' ? 0 : x - cx, type === 'x' ? 0 : y - cy))
    )

    const _changeEvent = {
      type: 'change',
      target: event
    }
    this.dispatchEvent(_changeEvent)
  }
}
