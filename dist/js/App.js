import { jsx as _jsx } from "react/jsx-runtime";
/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-04 01:27:14
 */
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { createHashHistory } from 'history';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
export const history = createHashHistory();
import RouteList from './router';
const App = () => {
    // 根据不同环境使用env内容
    // const VITE_ACCESS_KEY_ID = import.meta.env.VITE_ACCESS_KEY_ID
    // console.log(VITE_ACCESS_KEY_ID, 'VITE_ACCESS_KEY_ID')
    return (_jsx(ConfigProvider, { locale: zhCN, children: _jsx(RecoilRoot, { children: _jsx(Router, { history: history, children: _jsx(RouteList, {}) }) }) }));
};
export default App;
