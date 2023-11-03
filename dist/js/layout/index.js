import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 14:45:22
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-03 17:10:09
 */
import { Layout } from 'antd';
import _ from 'lodash';
import { Fragment, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { commonState } from '@/recoil';
import { routes as initRoutes } from '../router/routes';
import Content from './content';
import Header from './header';
import NavMenu from './navMenu';
const findAutnRoutes = (routes, auths) => {
    return routes.filter((route) => {
        const childRoutes = route.routes || [];
        if (childRoutes.length > 0) {
            route.routes = findAutnRoutes(childRoutes, auths);
        }
        // 不需要权限就可以访问
        if (!route.auth || route.auth.length === 0)
            return true;
        // 需要权限但是有权限
        if (auths.some((auth) => (route.auth || []).includes(auth)))
            return true;
        // 需要权限但是没有权限
        return false;
    });
};
const ProLayout = () => {
    const [routes, setRoutes] = useState([]);
    const auths = useRecoilValue(commonState.auths);
    const mode = useRecoilValue(commonState.mode);
    useEffect(() => {
        const cloneRoutes = _.cloneDeep(initRoutes);
        const authRoutes = findAutnRoutes(cloneRoutes, auths);
        setRoutes(authRoutes);
    }, [auths]);
    return (_jsxs(Layout, { className: "h-100vh", children: [_jsx(Header, { children: mode === 'horizontal' ? (_jsxs("div", { children: [_jsx(NavMenu, { routes: routes, mode: mode, theme: "dark" }), _jsx("span", {})] })) : (_jsx(Fragment, {})) }), _jsxs(Layout, { children: [mode !== 'horizontal' ? (_jsx(NavMenu, { mode: mode, theme: "light", routes: routes })) : (_jsx(Fragment, {})), _jsx(Content, { routes: routes })] })] }));
};
export default ProLayout;
