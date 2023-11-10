/*
 * @Description:地图首页
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-10 16:09:58
 */
import { Divider } from 'antd'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {}, [])

  return (
    <div className="h-100%  box-border p-10px pb-0px">
      <div className="h-100%  bg-white">
        <div
          id="container"
          className="h-100% text-#555 text-14px leading-7 overflow-auto"
        >
          敬请期待
        </div>
      </div>
    </div>
  )
}
export default Home
