/*
 * @Description: 变电站
 * @Author: ldx
 * @Date: 2023-12-08 17:10:26
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-12 15:44:47
 */
import React, { useEffect, useRef } from 'react'
const preventDefaultScalePage = (event: WheelEvent) => {
  if (event.ctrlKey || event.metaKey) {
    event.preventDefault()
  }
}
import { Viewer } from './viewer'
import map from './map.json'
import { useAsyncEffect } from 'ahooks'
const Substation: React.FC = () => {
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!container.current) return
    const viewer = new Viewer({ container: container.current })
    viewer.drawShape(map)
    const data = [
      {
        from: [111.43, 34.49],
        to: [112.45, 34.62]
      },
      {
        from: [112.30, 34.51],
        to: [112.11,34.10]
      }
    ]
    viewer.drawLine(data)
    document.addEventListener('wheel', preventDefaultScalePage, {
      capture: false,
      passive: false
    })
    return () => {
      document.removeEventListener('wheel', preventDefaultScalePage)
      viewer.destroy()
    }
  }, [])
  return <div className="h-100% w-100%" ref={container}></div>
}

export default Substation
