/*
 * @Description: 电路图编辑
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-05 14:34:37
 */
import { useCallback, useEffect, useRef, useState } from 'react'

import { Editor } from './editor'
import Tool from './tool'
const Home = () => {
  const [editor, setEditor] = useState<Editor>()
  const [selected, setselected] = useState('')
  const ref = useRef<HTMLCanvasElement>(null)
  const styleFn = (value: string): { [key: string]: string } => {
    return {
      writingMode: 'vertical-lr',
      background: selected === value ? '#fff' : '#eee',
      color: selected === value ? '#0f8fff' : '#000',
      borderColor: selected === value ? '#fff' : '#dadadc99',
      width: selected === value ? '43px' : '42px'
    }
  }
  useEffect(() => {
    const editor = new Editor(ref)
    setEditor(editor)
  }, [])
  return (
    <div className="flex h-100% w-100% overflow-hidden">
      <div className="w-240px h-100% flex">
        <div className="w-43px border-r-1px border-#dadadc99 text-##202020 bg-#eee">
          <div
            className="cursor-pointer hover:text-#0f8fff "
            style={styleFn('电力')}
            onClick={() => setselected('电力')}
          >
            <div className="my-20px mx-10px">电力</div>
          </div>
          <div
            className="cursor-pointer hover:text-#0f8fff"
            style={styleFn('食品加工厂')}
            onClick={() => setselected('食品加工厂')}
          >
            <div className="my-20px mx-10px">食品加工厂</div>
          </div>
          <div
            className="cursor-pointer hover:text-#0f8fff"
            style={styleFn('污水处理厂')}
            onClick={() => setselected('污水处理厂')}
          >
            <div className="my-20px mx-10px">污水处理厂</div>
          </div>
        </div>
        <div className="flex-1 border-r-1px border-#dadadc99"></div>
      </div>
      <div className="flex-1 relative box-border h-100%">
        <Tool
          className="h-40px border-b-1px border-#dadadc99 text-##202020"
          editor={editor}
        ></Tool>
        <div
          className="absolute left-0px top-40px box-border w-100%"
          style={{
            height: 'calc(100% - 40px)'
          }}
        >
          <canvas ref={ref} className="w-100% h-100%"></canvas>
        </div>
      </div>
      <div className="w-240px h-100% border-l-1px border-#dadadc99"></div>
    </div>
  )
}
export default Home
