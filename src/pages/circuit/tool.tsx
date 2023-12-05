/*
 * @Description: 工具栏
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-05 14:07:33
 */
import { Dropdown, Space } from 'antd'
import { useEffect, useState } from 'react'

import { Editor } from './editor'
import {
  DownOutlined,
  HandOutlined,
  LineOutlined,
  SelectOutlined,
  TextFilled
} from './icons'
type Props = {
  className: string
  editor: Editor | undefined
}
const Tool: React.FC<Props> = ({ className, editor }) => {
  const [selected, setselected] = useState('')
  // useEffect(() => {}, [])
  const items: any = [
    { label: '菜单项一', key: 'item-1' },
    { label: '菜单项二', key: 'item-2' }
  ]
  return (
    <div className={`${className} flex justify-center items-center`}>
      <div className="flex-1 flex items-center ">
        <div
          className="cursor-pointer w-32px h-32px hover:bg-#f2f2f2  rounded-6px flex justify-center items-center ml-10px"
          style={{
            background: selected === 'SelectOutlined' ? '#1890ff' : '',
            color: selected === 'SelectOutlined' ? '#fff' : '#000'
          }}
          onClick={() => setselected('SelectOutlined')}
        >
          <SelectOutlined></SelectOutlined>
        </div>
        <div
          className="cursor-pointer w-32px h-32px hover:bg-#f2f2f2  rounded-6px flex justify-center items-center ml-10px"
          style={{
            background: selected === 'TextFilled' ? '#1890ff' : '',
            color: selected === 'TextFilled' ? '#fff' : '#000'
          }}
          onClick={() => setselected('TextFilled')}
        >
          <TextFilled></TextFilled>
        </div>
        <div
          className="cursor-pointer w-32px h-32px hover:bg-#f2f2f2  rounded-6px flex justify-center items-center ml-10px"
          style={{
            background: selected === 'HandOutlined' ? '#1890ff' : '',
            color: selected === 'HandOutlined' ? '#fff' : '#000'
          }}
          onClick={() => setselected('HandOutlined')}
        >
          <HandOutlined></HandOutlined>
        </div>
        <div
          className="cursor-pointer w-32px h-32px hover:bg-#f2f2f2  rounded-6px flex justify-center items-center ml-10px"
          style={{
            background: selected === 'LineOutlined' ? '#1890ff' : '',
            color: selected === 'LineOutlined' ? '#fff' : '#000'
          }}
          onClick={() => setselected('LineOutlined')}
        >
          <LineOutlined></LineOutlined>
        </div>
      </div>
      <div className="w-100px">
        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <div>100%</div>
              <DownOutlined className="mt-6px fill-#1890ff " />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  )
}
export default Tool
