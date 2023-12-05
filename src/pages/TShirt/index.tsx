/*
 * @Description: T恤图案编辑
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-03 22:18:09
 */
import _ from 'lodash'
import { useEffect, useRef, useState } from 'react'

import { Img, ImgControler, OrbitControler, Scene, Vector2 } from '@/canvas'

const Home = () => {
  const ref = useRef<HTMLCanvasElement>(null)
  const [cursor, setCursor] = useState('default')
  useEffect(() => {
    /* 场景 */
    const scene = new Scene()

    /* 图案 */
    const image = new Image()
    image.src =
      'https://yxyy-pandora.oss-cn-beijing.aliyuncs.com/stamp-images/1.png'
    const pattern = new Img({ image })
    scene.add(pattern)

    const imgControler = new ImgControler()
    scene.add(imgControler)

    /* 鼠标的裁剪坐标位 */
    const mouseClipPos = new Vector2(Infinity)

    /* 测试 */
    function test() {
      const imgSize = new Vector2(image.width, image.height).multiplyScalar(0.6)
      pattern.setOption({
        /* 模型矩阵 */
        rotate: 0,
        position: new Vector2(0, 0),
        scale: new Vector2(0.5),

        /* Img属性 */
        size: imgSize.clone(),
        offset: imgSize.clone().multiplyScalar(-0.5),

        /* 样式 */
        style: {
          globalAlpha: 0.8,
          shadowColor: 'rgba(0,0,0,0.5)',
          shadowBlur: 0
        }
      })

      /* 相机位移测试 */
      // scene.camera.position.set(0, 100)

      /* 记录鼠标的裁剪坐标位 */
      // canvas.addEventListener('mousemove', ({ clientX, clientY }) => {
      //   mouseClipPos.copy(scene.clientToClip(clientX, clientY))
      //   console.log('mouseClipPos', mouseClipPos)
      // })

      /* 动画 */
      ani()
    }

    function ani(time = 0) {
      /* 相机缩放测试 */
      const inter = (Math.sin(time * 0.002) + 1) / 2
      // scene.camera.zoom = inter + 0.5
      /* 投影 */
      // pattern.style.shadowOffsetY = 80 * (1 - inter)
      // pattern.style.shadowBlur = 10 * (1 - inter)

      /* 选择测试 */
      if (scene.isPointInObj(pattern, mouseClipPos, pattern.pvmoMatrix)) {
        // pattern.rotate += 0.02
        // console.log('111')
      }
      /* 渲染 */
      scene.render()
      // requestAnimationFrame(ani)
    }
    // 选中框可以在另一个canvas上，并且鼠标样式用css控制而不是canvas绘制性能可能更好？
    const updateMouseCursor = () => {
      if (imgControler.mouseState) {
        setCursor('none')
      } else if (imgHover) {
        setCursor('pointer')
      } else {
        setCursor('default')
      }
    }
    if (!ref.current) return

    let imgHover: Img | null
    const canvas = ref.current
    // const ctx = canvas.getContext('2d')
    // ctx?.fillRect(100, 100, 100, 100)
    scene.setOption({ domElement: canvas })
    const orbitControler = new OrbitControler(scene.camera, scene.domElement)
    orbitControler.addEventListener('change', () => {
      scene.render()
    })
    imgControler.addEventListener('change', () => {
      scene.render()
    })
    image.onload = function () {
      test()
    }
    /** 事件 */
    const event = (() => {
      /** 缩放 */
      const wheel = (event: WheelEvent) => {
        orbitControler.wheel(event)
      }
      /** 鼠标按下 */
      const pointerdown = (event: PointerEvent) => {
        const { button, clientX, clientY } = event
        const mp = scene.clientToClip(clientX, clientY)
        if (button === 0) {
          orbitControler.pointerdown(event)
          imgHover = scene.selectObj(mp)
          imgControler.pointerdown(imgHover, mp)
          updateMouseCursor()
        }
      }
      /** 鼠标移动 */
      const pointermove = (event: PointerEvent) => {
        const { clientX, clientY } = event
        mouseClipPos.copy(scene.clientToClip(clientX, clientY))
        orbitControler.pointermove(event)
        imgHover = scene.selectObj(mouseClipPos)
        imgControler.pointermove(mouseClipPos)
        updateMouseCursor()
      }
      /** 鼠标松开 */
      const pointerup = (event: PointerEvent) => {
        if (event.button === 0) {
          orbitControler.pointerup()
        }
      }
      return {
        wheel: _.throttle(wheel, 60),
        pointerdown: _.throttle(pointerdown, 60),
        pointermove: _.throttle(pointermove, 0),
        pointerup: _.throttle(pointerup, 60)
      }
    })()
    /* 滑动滚轮缩放 */
    canvas.addEventListener('wheel', event.wheel, {
      passive: false
    })
    /* 按住滚轮平移 */
    canvas.addEventListener('pointerdown', event.pointerdown)
    canvas.addEventListener('pointermove', event.pointermove)
    window.addEventListener('pointerup', event.pointerup)

    // 销毁
    return () => {
      canvas.removeEventListener('wheel', event.wheel)
      /* 按住滚轮平移 */
      canvas.removeEventListener('pointerdown', event.pointerdown)
      canvas.removeEventListener('pointermove', event.pointermove)
      window.removeEventListener('pointerup', event.pointerup)
    }
  }, [])
  return (
    <div className="w-100% h-100% overflow-hidden">
      <canvas
        ref={ref}
        className="w-100% h-100%"
        style={{ cursor: cursor }}
      ></canvas>
    </div>
  )
}
export default Home
