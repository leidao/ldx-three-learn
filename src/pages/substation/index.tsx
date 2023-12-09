/*
 * @Description: 变电站
 * @Author: ldx
 * @Date: 2023-12-08 17:10:26
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-08 17:20:13
 */
import React, { useEffect, useRef } from 'react'

import { Viewer } from './viewer'

const Substation: React.FC = () => {
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!container.current) return
    const viewer = new Viewer({ container: container.current })
  }, [])
  return <div className="h-100% w-100%" ref={container}></div>
}

export default Substation
