/*
 * @Description: 案例路由
 * @Author: ldx
 * @Date: 2023-11-03 23:49:21
 * @LastEditors: ldx
 * @LastEditTime: 2024-07-18 13:48:30
 */
import React from 'react'

import factory from '/factory/img/factory.png'
import nebularOrbit from '/nebularOrbit/img/nebularOrbit.png'
import image from '/nebularOrbit/img/image.png'
import plane from '/plane/img/plane.png'
import propagate from '/propagate/img/propagate.png'
import 河南 from '/energy-picture/img/河南.png'
export const examples = [
  {
    path: '/plane',
    key: 'plane',
    component: React.lazy(() => import('@/pages/plane')),
    icon: plane,
    title: '飞机小游戏',
    hideInMenu: true,
    auth: []
  },
  {
    path: '/propagate',
    key: 'propagate',
    component: React.lazy(() => import('@/pages/propagate')),
    icon: propagate,
    title: '孔子学院全球传播',
    hideInMenu: true,
    auth: []
  },
  {
    path: '/factory',
    key: 'factory',
    component: React.lazy(() => import('@/pages/factory')),
    icon: factory,
    title: '废弃工厂',
    hideInMenu: true,
    auth: []
  },
  {
    path: '/nebularOrbit',
    key: 'nebularOrbit',
    component: React.lazy(() => import('@/pages/nebularOrbit')),
    icon: nebularOrbit,
    title: '星云轨道',
    hideInMenu: true,
    auth: []
  },
  {
    path: '/map',
    key: 'map',
    component: React.lazy(() => import('@/pages/map')),
    icon: image,
    title: '地图',
    hideInMenu: true,
    auth: []
  },
  {
    path: 'https://leidao.github.io/energy-picture/',
    key: 'energy-picture',
    icon: 河南,
    title: '河南一张图',
    hideInMenu: true,
    auth: []
  },
  
]
