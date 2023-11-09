/*
 * @Description: 案例路由
 * @Author: ldx
 * @Date: 2023-11-03 23:49:21
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-09 23:33:50
 */
import React from 'react';
import nebularOrbit from '/nebularOrbit/img/nebularOrbit.png';
import plane from '/plane/img/plane.png';
import propagate from '/propagate/img/propagate.png';
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
        icon: propagate,
        title: '枪战小游戏',
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
    }
];
