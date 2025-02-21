/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2024-07-19 10:42:38
 */
import React from 'react'

import Layout from '@/layout'

import { examples } from './examples'
export const routes = [
  {
    path: '/',
    key: 'home',
    component: React.lazy(() => import('@/pages/home')),
    icon: '',
    title: '首页',
    hideInMenu: false,
    auth: []
  },
  {
    path: '/examples',
    key: 'examples',
    component: React.lazy(() => import('@/pages/examples')),
    icon: '',
    title: '示例',
    hideInMenu: false,
    auth: []
  },
  {
    path: '/vpp',
    key: 'vpp',
    component: React.lazy(() => import('@/pages/vpp')),
    icon: '',
    title: '虚拟电厂',
    hideInMenu: false,
    auth: []
  },
  {
    path: '/dxEditor',
    key: 'dxEditor',
    component: React.lazy(() => import('@/pages/dxEditor')),
    icon: '',
    title: '电路编辑器',
    hideInMenu: false,
    auth: []
  },
  {
    path: '/serviceZone',
    key: 'serviceZone',
    component: React.lazy(() => import('@/pages/serviceZone')),
    icon: '',
    title: '红格服务区',
    hideInMenu: false,
    auth: []
  },
  {
    /* 无匹配路由 放置在最后一个路由的位置 */
    path: '*',
    key: '*',
    component: React.lazy(() => import('@/layout/404'))
  }
]
export default [
  {
    path: '/*',
    key: '/*',
    component: Layout,
    routes: routes
  },
  ...examples,
]
export interface RoutesType {
  path: string
  redirect?: string
  key: string
  component?: any
  hideInMenu?: boolean
  icon?: string
  title?: string
  auth?: string[]
  routes?: RoutesType[]
}
