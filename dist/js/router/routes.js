/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-03 23:58:01
 */
import React from 'react';
import Layout from '@/layout';
import { examples } from './examples';
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
        component: React.lazy(() => import('@/pages/home')),
        icon: '',
        title: '路网编辑器',
        hideInMenu: false,
        auth: []
    },
    {
        /* 无匹配路由 放置在最后一个路由的位置 */
        path: '*',
        key: '*',
        component: React.lazy(() => import('@/layout/404'))
    }
];
export default [
    {
        path: '/*',
        key: '/*',
        component: Layout,
        routes: routes
    },
    ...examples
];