/*
 * @Description: 全局配置数据
 * @Author: ldx
 * @Date: 2022-04-25 10:53:57
 * @LastEditors: ldx
 * @LastEditTime: 2022-04-27 15:09:45
 */
import { atom } from 'recoil';
// 官网链接 https://www.recoiljs.cn/docs/basic-tutorial/atoms
// 通过atom包裹的内容, 通过key获取对用的数据 key值与设置的属性值一致 default为默认数据
// 通过 useRecoilValue 获取数据
// const factoryName = useRecoilValue(factoryName)
// 通过 useSetRecoilState 设置数据
// const setFactoryName = useSetRecoilState(factoryName)
// 通过hook的方式
// const [factoryName, setFactoryName] = useRecoilState(factoryName);
const auths = atom({
    key: 'auths',
    default: ['home', 'predictManage', 'reportManage', 'systemSettings']
});
const userInfo = atom({
    key: 'userInfo',
    default: {
        name: ''
    },
    dangerouslyAllowMutability: true
});
const isLogin = atom({
    key: 'isLogin',
    default: false
});
const mode = atom({
    key: 'mode',
    default: 'vertical' // vertical | horizontal
});
export default { auths, userInfo, isLogin, mode };
