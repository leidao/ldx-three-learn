/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 14:45:22
 * @LastEditors: ldx
 * @LastEditTime: 2022-04-25 11:23:50
 */
import axios from '@/utils/axios'
const { get, post } = axios
interface Login {
  account: any
  status: string
  token: string
}
/** 帐号密码登录 */
export const loginByPwd = (data: any) => {
  // return post<Login>(`/account/login`, data)
  return Promise.resolve({ data: { token: 'ldx:xxxxx' } })
}
