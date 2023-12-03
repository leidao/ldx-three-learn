/*
 * @Description: 电路图编辑
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-01 13:46:24
 */
import { SwitcherOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useEffect } from 'react'

import factory from '/factory/img/factory.png'
const Home = () => {
  useEffect(() => {}, [])

  return (
    <div className="h-100%  box-border p-10px pb-0px">
      <div className="h-100%  bg-white">
        <div
          id="container"
          className="h-100% text-#555 text-14px leading-7 overflow-auto"
        >
          <div className="p-10px h-100%">
            <div className="overflow-hidden w-100% h-100% relative">
              <img
                className="hover:scale-110 duration-800"
                width="100%"
                height="100%"
                src={factory}
                alt="T恤图案编辑器"
              />
              <Button
                icon={<SwitcherOutlined />}
                type="primary"
                className="absolute left-50% top-50% z-999 translate-x--50%"
                onClick={() => {
                  window.open('/ldx-three-learn/#/TShirt')
                }}
              >
                点击使用
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
