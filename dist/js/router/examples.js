/*
 * @Description: 案例路由
 * @Author: ldx
 * @Date: 2023-11-03 23:49:21
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-04 01:30:55
 */
import React from 'react';
export const examples = [
    {
        path: '/plane',
        key: 'plane',
        component: React.lazy(() => import('@/pages/plane')),
        icon: '/plane/img/plane.png',
        title: '飞机',
        hideInMenu: true,
        auth: []
    }
];
