/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 14:45:22
 * @LastEditors: ldx
 * @LastEditTime: 2022-04-06 17:04:25
 */
export type dFn = () => void
export interface ResponseProps<T> {
  data: T
  code?: number
  status?: number
  message?: string
}
