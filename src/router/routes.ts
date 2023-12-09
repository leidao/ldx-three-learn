/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-08 17:12:15
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
    path: '/roadnet',
    key: 'roadnet',
    component: React.lazy(() => import('@/pages/roadnet')),
    icon: '',
    title: '路网编辑器',
    hideInMenu: false,
    auth: []
  },
  {
    path: '/tShirt/entry',
    key: 'tShirt.entry',
    component: React.lazy(() => import('@/pages/tShirt/entry')),
    icon: '',
    title: 'T恤图案编辑器',
    hideInMenu: false,
    auth: []
  },
  {
    path: '/circuit/entry',
    key: 'circuit.entry',
    component: React.lazy(() => import('@/pages/circuit/entry')),
    icon: '',
    title: '电路图编辑器',
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
  {
    path: '/tShirt',
    key: 'tShirt',
    component: React.lazy(() => import('@/pages/tShirt')),
    icon: '',
    title: 'T恤图案编辑器',
    hideInMenu: true,
    auth: []
  },
  {
    path: '/circuit',
    key: 'circuit',
    component: React.lazy(() => import('@/pages/circuit')),
    icon: '',
    title: '电路图编辑器',
    hideInMenu: true,
    auth: []
  },
  {
    path: '/substation',
    key: 'substation',
    component: React.lazy(() => import('@/pages/substation')),
    icon: '',
    title: '变电站',
    hideInMenu: true,
    auth: []
  }
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
