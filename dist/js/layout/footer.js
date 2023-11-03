import { jsxs as _jsxs } from "react/jsx-runtime";
/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 14:45:22
 * @LastEditors: ldx
 * @LastEditTime: 2022-04-27 14:50:28
 */
import { Layout } from 'antd';
const { Footer } = Layout;
const Footers = () => {
    const currentYear = new Date().getFullYear();
    return (_jsxs(Footer, { className: "h-60px text-center text-rgba(0, 0, 0, 0.65)", children: ["\u00A9 ", currentYear, " \u4E0A\u6D77\u8425\u9091\u57CE\u5E02\u89C4\u5212\u8BBE\u8BA1\u80A1\u4EFD\u6709\u9650\u516C\u53F8"] }));
};
export default Footers;
