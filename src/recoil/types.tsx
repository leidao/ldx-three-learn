/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-25 10:53:57
 * @LastEditors: ldx
 * @LastEditTime: 2022-04-27 15:06:16
 */
export interface ResponseProps {
  code?: number
  status?: number
  message?: string
  [key: string]: any
}

export type Mode = 'vertical' | 'horizontal'

export interface UserInfo {
  name: string
}
