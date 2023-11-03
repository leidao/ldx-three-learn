/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-02 12:23:15
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-04 00:39:41
 */
import mitt from 'mitt'

export class Emit {
  eventBus = mitt()
  on(event: string, callback: (...args: any) => void) {
    this.eventBus.on(event, callback)
  }
  off(event: string, callback: () => void) {
    this.eventBus.off(event, callback)
  }
  emit(event: string, ...args: any) {
    this.eventBus.emit(event, ...(args as []))
  }
}
