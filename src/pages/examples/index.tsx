/*
 * @Description: 示例
 * @Author: ldx
 * @Date: 2023-11-03 23:23:44
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-04 01:32:23
 */
// import { useEffect } from 'react'

import { Card } from 'antd'

import { examples } from '@/router/examples'
import { RoutesType } from '@/router/routes'

const Home = () => {
  // useEffect(() => {}, [])
  return (
    <div className="h-100%  box-borderpb-0px">
      <div className="h-100%  bg-white">
        <div id="container" className="h-100%  p-10px ">
          {examples.map((example: RoutesType) => {
            return (
              <div
                key={example.path}
                className="border-1px border-#ebeef5 w-400px cursor-pointer"
                style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,.1)' }}
                onClick={() => {
                  window.open(`/ldx-three-learn/#${example.path}`)
                }}
              >
                <div className="h-38px leading-38px px-10px text-18px text-#303133 border-b-1px border-b-#ebeef5">
                  {example.title}
                </div>
                <div className="p-10px h-230px">
                  <div className="overflow-hidden ">
                    <img
                      className="hover:scale-110 duration-800"
                      width={380}
                      height={210}
                      src={example.icon}
                      alt={example.title}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Home
