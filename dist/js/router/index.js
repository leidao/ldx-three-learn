import { jsx as _jsx } from "react/jsx-runtime";
/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 14:45:22
 * @LastEditors: ldx
 * @LastEditTime: 2022-04-27 13:56:03
 */
// import { Layout } from 'antd'
import { Suspense, useEffect } from 'react';
// const { Footer } = Layout
import { Route, Routes, useLocation, useNavigate
// useParams
 } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { getUser } from '@/api/user';
import { RouteLoading } from '@/components';
import { commonState } from '@/recoil';
import { getToken } from '@/utils';
// import styles from './index.module.less'
import routes from './routes';
const RouteList = () => {
    const navigate = useNavigate();
    // const params = useParams()
    const location = useLocation();
    const setUserInfo = useSetRecoilState(commonState.userInfo);
    const [isLogin, setIsLogin] = useRecoilState(commonState.isLogin);
    const isToken = !!getToken();
    useEffect(() => {
        if (isToken) {
            setIsLogin(true);
        }
        else {
            setIsLogin(false);
        }
        if (!isToken && location.pathname != '/register') {
            navigate('/login' + location.search);
        }
        console.log('index', isToken);
    }, [isLogin]);
    useEffect(() => {
        if (!isToken)
            return;
        getUser().then((res) => {
            setUserInfo(res.data);
        });
    }, []);
    return (_jsx(Suspense, { fallback: _jsx(RouteLoading, {}), children: _jsx(Routes, { children: (routes || []).map((route) => {
                const Component = route.component;
                return (_jsx(Route, { path: route.path, element: _jsx(Component, {}) }, route.key));
            }) }) }));
};
export default RouteList;
