/*
 * @Description:地图首页
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-10 16:13:04
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
          <Divider orientation="left">简介</Divider>
          <div style={{ padding: '0 20px 30px 40px' }}>
            由于大环境的原因，尝试了下面试，不出意料的难找。因为决定把工作和学习中遇到的有趣的案例作为我的个人展示区，期待能给自己的面试加分。我会每年保持一定的更新频率，希望大家能喜欢。
          </div>
          <Divider orientation="left">最近目标</Divider>
          <div style={{ padding: '0 20px 30px 40px' }}>
            <div>废弃工厂</div>
            <div>· 巡逻NPC（已添加）</div>
            <div>· 玩家动作（未添加）</div>
            <div>· 玩家自动寻路（未添加）</div>
            <div>· 玩家按键控制（未添加）</div>
            <div>· 射击及交互（未添加）</div>
          </div>
          <Divider orientation="left">规划</Divider>
          <div style={{ padding: '0 20px 30px 40px' }}>
            后续准备写一个基于高德地图结合THREE自定义图层的路网编辑器，这是一个大工程，我会基于之前工作中的相关功能先实现一个简版，然后慢慢的把自己的想法添加上去。
            <br />
            在这期间可能会先实现一个基于canvas的衣服图案编辑器。
            <br />
            当然，小案例在这期间会一直更新的
            <br />
            总之，想法很多，慢慢实现。
          </div>
          <Divider orientation="left">主要技术</Divider>
          <div style={{ padding: '0 20px 30px 40px' }}>
            <div>· 框架使用vite+react+tailwindcss搭建</div>
            <div>· 3d主要还是使用three.js</div>
            <div>· 地图的话就以amap为主</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
