/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-12-09 18:58:58
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-09 19:25:52
 */
import CommandBase from './commandBase'
import { KeyboardCode } from './keybord-code'
type State = {
  current: number
  queue: any[]
  commandArray: CommandBase[]
}

export default class Command {
  [key: string]: any
  // [key: string]: () => void
  state: State = {
    // 前进后退需要指针
    current: -1, // 前进后退的索引值
    queue: [], //  存放所有的操作命令
    commandArray: [] // 存放所有的命令
  }
  commands = {} // 制作命令和执行功能一个映射表  undo : ()=>{}  redo:()=>{}
  constructor() {
    // 监听键盘事件
    this.listen()
  }
  execute(cmd: CommandBase) {
    // 执行命令
    cmd.redo()
    // 如果该命令不允许撤销/重做，结束～
    if (!cmd.inMemory) {
      return
    }
    let { queue } = this.state
    const { current } = this.state
    // 如果先做了 操作1 -> 操作2 => 操作3 => 撤销： 操作4 => 操作3
    // 操作1 -> 操作3
    if (queue.length > 0) {
      queue = queue.slice(0, current + 1) // 可能在操作的过程中有撤销操作，所以根据当前最新的current值来计算新的队列
      this.state.queue = queue
    }
    queue.push(cmd) // 保存指令的前进后退
    this.state.current = current + 1
  }
  registry(command: CommandBase) {
    this.state.commandArray.push(command)
    this[command.name] = command.execute
  }

  onKeydown = (event: KeyboardEvent) => {
    const { keyCode, shiftKey, altKey, ctrlKey, metaKey } = event
    const keyString: string[] = []
    if (ctrlKey || metaKey) keyString.push('ctrl')
    if (shiftKey) keyString.push('shift')
    if (altKey) keyString.push('alt')

    keyString.push(KeyboardCode[keyCode])
    const keyNames = keyString.join('+')
    console.log('keyNames', keyNames)

    const commandArray = this.state.commandArray
    // 执行对应键盘命令
    commandArray.forEach(({ keyboard, execute }) => {
      if (!keyboard) {
        return
      }
      const keys = Array.isArray(keyboard) ? keyboard : [keyboard]
      if (keys.indexOf(keyNames) > -1) {
        execute.call(this)
        event.stopPropagation()
        event.preventDefault()
      }
    })
  }

  // 初始化事件
  listen() {
    window.addEventListener('keydown', this.onKeydown)
  }
  // 销毁事件
  destroy() {
    window.removeEventListener('keydown', this.onKeydown)
  }
}