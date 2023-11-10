import { jsx as _jsx } from "react/jsx-runtime";
/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 21:56:29
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-10 15:49:14
 */
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
function Content(props) {
    const renderRoutes = (routes) => {
        return (routes || []).map((route) => {
            const childRoutes = route.routes || [];
            if (route.component) {
                const Component = route.component;
                if (childRoutes.length > 0) {
                    return (_jsx(Route, { path: route.path, element: _jsx(Component, {}), children: renderRoutes(childRoutes) }, route.key));
                }
                else {
                    return (_jsx(Route, { path: route.path, element: _jsx(Component, {}) }, route.key));
                }
            }
            else {
                return renderRoutes(childRoutes);
            }
        });
    };
    return (_jsx(Layout.Content, { style: {
            minHeight: 280,
            background: '#fff'
        }, children: _jsx(Routes, { children: renderRoutes(props.routes) }) }));
}
export default Content;
