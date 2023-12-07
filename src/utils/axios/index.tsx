import { message } from 'antd'
import axios, { AxiosRequestConfig } from 'axios'

import { history } from '@/App'

import { getToken } from '..'
import { ResponseProps } from './types'

interface Request {
  <T>(
    url: string,
    params?: Record<string, unknown>,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<ResponseProps<T>>
}

//创建实例
const request = axios.create({
  baseURL: '/components',
  timeout: 1000 * 60 // 60s后请求超时
})

request.interceptors.request.use(
  async function (config: any) {
    const aToken = getToken()
    // 更新token
    if (aToken) {
      config.headers['Authorization'] = JSON.parse(aToken)
    }

    //TODO 全局loading，暂未完成
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截
request.interceptors.response.use(
  (response) => {
    console.log('response:', response)
    const { data } = response
    const { code, msg } = data
    switch (code) {
      // case 1000:
      case 200:
        // message.success(msg)
        return Promise.resolve(data)
      case 403:
        message.error('登录过期')
        //TODO 把当前的路由信息缓存，重新登陆后跳转到当前路由
        history.push('/login')
        return Promise.reject(data)
      case 5000:
        message.error(msg)
        return Promise.reject(data)
      default:
        // 失败
        message.error(msg)
        return Promise.reject(data)
    }
  },
  (error) => {
    console.log('requset error', error)
    // history.push('/register')
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          message.error('登录过期')
          history.push('/login')
          // window.location.href = '/login'
          break
        case 403:
          //TODO 把当前的路由信息缓存，重新登陆后跳转到当前路由
          message.error('拒绝访问')
          break
        case 404:
          message.error('请求错误,未找到该资源')
          break
        case 405:
          message.error('请求方法未允许')
          break
        case 500:
          // window.location.href='/error500'
          break
        default:
          message.error(`连接错误${error.response.data.status}`)
      }
    } else {
      message.error('连接到服务器失败')
    }
    return Promise.reject(error)
  }
)

export default {
  get: function (url: string, params?: any) {
    return request({
      url,
      params,
      method: 'GET'
    })
  } as Request,
  post: function (url: string, data?: any) {
    return request({
      url,
      data,
      method: 'POST'
    })
  } as Request,
  put: function (url: string, data?: any) {
    return request({
      url,
      data,
      method: 'PUT'
    })
  } as Request,
  delete: function (url: string, data?: any) {
    return request({
      url,
      data,
      method: 'DELETE'
    })
  } as Request,
  request: function (options: AxiosRequestConfig) {
    return request(options)
  }
  // cancels // 切换路由之前 遍历cancels 执行方法 取消之前的请求
}
