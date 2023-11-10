import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-10 15:18:18
 */
import github from '@/assets/github.svg';
const Header = (props) => {
    return (_jsxs("div", { className: "flex justify-between h-52px items-center px-20px bg-#fff z-999", style: { boxShadow: '0 0 6px #ddd' }, children: [_jsx("div", { children: _jsx("span", { className: "text-22px", children: "3D\u6848\u4F8B" }) }), props.children, _jsx("div", { children: _jsx("div", { onClick: () => {
                        window.open('https://github.com/leidao/ldx-three-learn');
                    }, className: "cursor-pointer", children: _jsx("img", { className: "w-30px h-30px", src: github, alt: "github" }) }) })] }));
};
export default Header;
