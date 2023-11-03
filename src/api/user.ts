/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 14:45:22
 * @LastEditors: ldx
 * @LastEditTime: 2022-04-25 11:04:23
 */
import axios from '@/utils/axios'
const { get, post } = axios
interface Login {
  userName: string
  nickName: string
  _id: string
  idsAuth: []
}
/** 获取用户信息 */
export const getUser = () => {
  // return get<Login>(`/account/userInfo`)
  return Promise.resolve({ data: { name: '道哥' } })
}
