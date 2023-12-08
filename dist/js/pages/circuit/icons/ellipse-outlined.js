import { jsx as _jsx } from "react/jsx-runtime";
/*
 * @Description: 椭圆
 * @Author: ldx
 * @Date: 2023-12-05 11:14:15
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-05 11:14:19
 */
import React from 'react';
export const EllipseOutlined = React.memo(() => {
    return (_jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: _jsx("circle", { cx: "12", cy: "12", r: "7.5" }) }));
});
