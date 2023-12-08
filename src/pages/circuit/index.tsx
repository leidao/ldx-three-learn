/*
 * @Description: 电路图编辑
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-07 13:36:38
 */
import { useEffect, useRef, useState } from 'react'

import axios from '@/utils/axios'

import imgData, { Children } from './imgs'
const preventDefaultScalePage = (event: WheelEvent) => {
  if (event.ctrlKey || event.metaKey) {
    event.preventDefault()
  }
}
import { Editor } from './editor'
import Tool from './tool'

const Home = () => {
  const [editor, setEditor] = useState<Editor>()
  const [selected, setSelected] = useState('电力')
  const [imgs, setImgs] = useState<Children[]>(
    imgData.find((data) => data.name === selected)?.children || []
  )
  const container = useRef<HTMLDivElement>(null)
  const styleFn = (value: string): { [key: string]: string } => {
    return {
      writingMode: 'vertical-lr',
      background: selected === value ? '#fff' : '#eee',
      color: selected === value ? '#0f8fff' : '#000',
      borderColor: selected === value ? '#fff' : '#dadadc99',
      width: selected === value ? '43px' : '42px'
    }
  }
  const dragstart = (event: React.DragEvent<HTMLImageElement>) => {
    if (!editor) return
    const img = event.target as HTMLImageElement | null
    editor.selectImg = img
    const container = editor.domElement
    container.addEventListener('dragenter', editor.dragenter)
    container.addEventListener('dragleave', editor.dragleave)
    container.addEventListener('dragover', editor.dragover)
    container.addEventListener('drop', editor.drop)
  }
  const dragend = () => {
    if (!editor) return
    editor.selectImg = null
    const container = editor.domElement
    container.removeEventListener('dragenter', editor.dragenter)
    container.removeEventListener('dragleave', editor.dragleave)
    container.removeEventListener('dragover', editor.dragover)
    container.removeEventListener('drop', editor.drop)
  }
  useEffect(() => {
    const editor = new Editor({ container: container.current })
    setEditor(editor)
    // axios.get('/list').then((res) => {
    //   console.log('res', res)
    // })
    // 禁止页面放大
    document.addEventListener('wheel', preventDefaultScalePage, {
      capture: false,
      passive: false
    })
    return () => {
      document.removeEventListener('wheel', preventDefaultScalePage)
    }
  }, [])
  return (
    <div className="flex h-100% w-100% overflow-hidden">
      <div className="w-240px h-100% flex">
        <div className="w-43px border-r-1px border-#dadadc99 text-##202020 bg-#eee">
          {imgData.map((data) => {
            return (
              <div
                key={data.name}
                className="cursor-pointer hover:text-#0f8fff "
                style={styleFn(data.name)}
                onClick={() => {
                  setSelected(data.name)
                  setImgs(data.children)
                }}
              >
                <div className="my-20px mx-10px">{data.name}</div>
              </div>
            )
          })}
        </div>
        <div className="flex-1 border-r-1px border-#dadadc99 p-10px">
          {imgs.map((img) => {
            return (
              <div
                key={img.id}
                className="w-82px p-6px box-border cursor-pointer border-1px hover:border-#666 rounded-6px border-#fff"
              >
                <img
                  src={img.url}
                  alt={img.name}
                  width="70"
                  height="50"
                  onDragStart={dragstart}
                  onDragEnd={dragend}
                />
                <div
                  className="max-w-70px text-center"
                  style={{ font: '12px arial, sans-serif' }}
                >
                  {img.name}
                </div>
              </div>
            )
          })}
        </div>
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
          ref={container}
        >
          {/* <canvas  className="w-100% h-100%"></canvas> */}
        </div>
      </div>
      <div className="w-240px h-100% border-l-1px border-#dadadc99"></div>
    </div>
  )
}
export default Home
