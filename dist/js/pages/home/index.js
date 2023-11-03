import { jsx as _jsx } from "react/jsx-runtime";
/*
 * @Description:地图首页
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-03 23:52:54
 */
import { useEffect } from 'react';
const Home = () => {
    useEffect(() => { }, []);
    return (_jsx("div", { className: "h-100%  box-border p-10px pb-0px", children: _jsx("div", { className: "h-100%  bg-white", children: _jsx("div", { id: "container", className: "h-100%" }) }) }));
};
export default Home;
