import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*
 * @Description: T恤图案编辑
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-15 11:33:41
 */
import { SwitcherOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect } from 'react';
import factory from '/factory/img/factory.png';
const Home = () => {
    useEffect(() => { }, []);
    return (_jsx("div", { className: "h-100%  box-border p-10px pb-0px", children: _jsx("div", { className: "h-100%  bg-white", children: _jsx("div", { id: "container", className: "h-100% text-#555 text-14px leading-7 overflow-auto", children: _jsx("div", { className: "p-10px h-100%", children: _jsxs("div", { className: "overflow-hidden w-100% h-100% relative", children: [_jsx("img", { className: "hover:scale-110 duration-800", width: "100%", height: "100%", src: factory, alt: "T\u6064\u56FE\u6848\u7F16\u8F91\u5668" }), _jsx(Button, { icon: _jsx(SwitcherOutlined, {}), type: "primary", className: "absolute left-50% top-50% z-999 translate-x--50%", onClick: () => {
                                    window.open('/ldx-three-learn/#/TShirt');
                                }, children: "\u70B9\u51FB\u4F7F\u7528" })] }) }) }) }) }));
};
export default Home;
