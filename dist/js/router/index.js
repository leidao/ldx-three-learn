import { jsx as _jsx } from "react/jsx-runtime";
/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 14:45:22
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-04 01:39:06
 */
// import { Layout } from 'antd'
import { Suspense } from 'react';
// const { Footer } = Layout
import { Route, Routes
// useParams
 } from 'react-router-dom';
import { RouteLoading } from '@/components';
// import styles from './index.module.less'
import routes from './routes';
const RouteList = () => {
    // const params = useParams()
    return (_jsx(Suspense, { fallback: _jsx(RouteLoading, {}), children: _jsx(Routes, { children: (routes || []).map((route) => {
                const Component = route.component;
                return (_jsx(Route, { path: route.path, element: _jsx(Component, {}) }, route.key));
            }) }) }));
};
export default RouteList;
