import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-03 17:10:48
 */
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const Header = (props) => {
    const navigate = useNavigate();
    const exitToLogin = async () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        const redirect = encodeURIComponent(window.location.pathname);
        navigate(`/login?redirect=${redirect}`);
    };
    const infos = [
        // { label: '个人中心', icon: UserIcon, key: 'user' },
        // { label: '修改密码', icon: KeyIcon, key: 'change' },
        {
            label: '退出登录',
            icon: () => _jsx(LogoutOutlined, { className: "mr-12px text-14px text-#666" }),
            key: 'exit',
            click: exitToLogin
        }
    ];
    return (_jsxs("div", { className: "flex justify-between h-52px items-center px-20px bg-#fff z-999", style: { boxShadow: '0 0 6px #ddd' }, children: [_jsx("div", { children: _jsx("span", { className: "text-22px", children: "3D\u6848\u4F8B" }) }), props.children, _jsx("div", { children: _jsxs("div", { children: [_jsx("img", { className: "w-30px h-30px", src: "/src/assets/\u5750\u5E2D\u5934\u50CF.png", alt: "\u5934\u50CF" }), _jsx("span", { className: "ml-8px", children: "\u9053\u54E5" })] }) })] }));
};
export default Header;
