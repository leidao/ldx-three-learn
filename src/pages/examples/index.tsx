/*
 * @Description: 示例
 * @Author: ldx
 * @Date: 2023-11-03 23:23:44
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-11 19:53:36
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
        <div
          id="container"
          className="h-100%  p-10px "
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(374px, 1fr))',
            gridTemplateRows: 'repeat(1, 268px)',
            gap: '10px 12px',
            overflow: 'auto'
          }}
        >
          {examples.map((example: RoutesType) => {
            return (
              <div
                key={example.path}
                className="border-1px border-#ebeef5 w-378px cursor-pointer h-268px"
                style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,.1)' }}
                onClick={() => {
                  const url = example.path.startsWith('http') ? example.path : `/ldx-three-learn/#${example.path}`
                  window.open(url)
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
