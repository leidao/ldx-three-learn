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
          <Divider orientation="left">项目简介</Divider>
          <div style={{ padding: '0 20px 30px 40px' }}>
            这是一个综合性的前端可视化案例集合，包含 Three.js 3D渲染、Canvas 2D绘图、数据大屏展示等多个领域的实践案例。本项目汇集了工作实践中的技术积累和学习探索的创意作品，会持续保持更新。
          </div>

          <Divider orientation="left">已实现案例</Divider>
          <div style={{ padding: '0 20px 30px 40px' }}>
            <div>1. 电路图编辑器</div>
            <div>· 基于Canvas开发</div>
            <div>· 支持电路组件拖拽编辑</div>
            <div>· 电路连接关系绘制</div>
            <br/>
            <div>2. 虚拟电厂数据大屏</div>
            <div>· 基于ECharts实现</div>
            <div>· 电厂运行数据可视化</div>
            <div>· 多维数据实时监控展示</div>
            <br/>
            <div>3. 零碳服务区</div>
            <div>· Three.js 3D场景展示</div>
            <div>· 服务区建筑及设施模型</div>
            <div>· 零碳理念可视化演示</div>
          </div>

          <Divider orientation="left">开发计划</Divider>
          <div style={{ padding: '0 20px 30px 40px' }}>
            <div>1. 路网编辑器</div>
            <div>· 基于高德地图与THREE自定义图层</div>
            <div>· 支持路网数据可视化编辑</div>
            <div>· 计划整合实际工作经验</div>
            <br/>
            <div>2. 衣服图案编辑器</div>
            <div>· 基于Canvas开发</div>
            <div>· 支持图案设计与编辑</div>
          </div>

          <Divider orientation="left">技术栈</Divider>
          <div style={{ padding: '0 20px 30px 40px' }}>
            <div>· 框架：Vue3/React + TailwindCSS</div>
            <div>· 2D渲染：自研dxCanvas框架</div>
            <div>· 3D渲染：Three.js</div>
            <div>· 地图服务：高德地图</div>
            <div>· 数据可视化：ECharts</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
