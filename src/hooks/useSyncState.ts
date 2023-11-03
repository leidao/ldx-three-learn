/*
 * @Description: 获取useState的最新值
 * @Author: ldx
 * @Date: 2022-04-11 14:34:32
 * @LastEditors: ldx
 * @LastEditTime: 2022-04-11 15:39:21
 */
import { useRef, useState } from 'react'

export const useSyncState = <T>(
  initState?: T
): [{ current: T }, (data: T) => void] => {
  const [state, setStateValue] = useState<T>(initState as T)
  const stateRef = useRef<T>(state)
  const setState = (value: T) => {
    stateRef.current = value
    setStateValue(value)
  }

  return [stateRef, setState]
}
