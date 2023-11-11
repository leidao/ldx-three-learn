import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 14:45:22
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-11 19:53:07
 */
import { StarOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import _ from 'lodash';
import { Fragment, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
// import github from '@/assets/github.svg'
import gitee from '@/assets/gitee2.svg';
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
    return (_jsxs(Layout, { className: "h-100vh", children: [_jsx(Header, { children: mode === 'horizontal' ? (_jsxs("div", { children: [_jsx(NavMenu, { routes: routes, mode: mode, theme: "dark" }), _jsx("span", {})] })) : (_jsx(Fragment, {})) }), _jsxs(Layout, { children: [mode !== 'horizontal' ? (_jsxs("div", { children: [_jsx(NavMenu, { mode: mode, theme: "light", routes: routes }), _jsxs("div", { className: "rounded h-180px w-236px mx-10px mt-10px p-20px box-border text-#fff", style: {
                                    boxShadow: '#fff 0 0 2px,#fff 0 12px 24px -4px',
                                    background: '#1e293b'
                                }, children: [_jsxs("div", { className: "flex items-center justify-center mb-8px", children: [_jsx("img", { className: "w-70px h-30px", src: gitee, alt: "github" }), _jsx("span", { className: "ml-10px text-22px ", children: "\u9053\u54E5" })] }), _jsxs("div", { className: "mb-10px", children: [_jsx("div", { className: "text-16px", children: "Github:" }), _jsx("div", { className: "text-12px", children: "https://gitee.com/ldx18015816566/ldx-three-learn" })] }), _jsx(Button, { onClick: () => {
                                            window.open('https://gitee.com/ldx18015816566/ldx-three-learn');
                                        }, className: "w-200px", icon: _jsx(StarOutlined, {}), children: "\u7ED9\u4E2Astar\u5457" })] })] })) : (_jsx(Fragment, {})), _jsx(Content, { routes: routes })] })] }));
};
export default ProLayout;
