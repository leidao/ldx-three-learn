/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 14:45:22
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-10 15:40:00
 */
import { StarOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'
import _ from 'lodash'
import React, { Fragment, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

import github from '@/assets/github.svg'
import { commonState, Mode } from '@/recoil'

import { routes as initRoutes, RoutesType } from '../router/routes'
import Content from './content'
import Header from './header'
import NavMenu from './navMenu'

const findAutnRoutes = (routes: any, auths: string[]): RoutesType[] => {
  return routes.filter((route: RoutesType) => {
    const childRoutes = route.routes || []
    if (childRoutes.length > 0) {
      route.routes = findAutnRoutes(childRoutes, auths)
    }
    // 不需要权限就可以访问
    if (!route.auth || route.auth.length === 0) return true
    // 需要权限但是有权限
    if (auths.some((auth: string) => (route.auth || []).includes(auth)))
      return true
    // 需要权限但是没有权限
    return false
  })
}
const ProLayout = () => {
  const [routes, setRoutes] = useState([])
  const auths = useRecoilValue(commonState.auths)
  const mode = useRecoilValue<Mode>(commonState.mode)

  useEffect(() => {
    const cloneRoutes = _.cloneDeep(initRoutes)
    const authRoutes = findAutnRoutes(cloneRoutes, auths)
    setRoutes(authRoutes as any)
  }, [auths])
  return (
    <Layout className="h-100vh">
      <Header>
        {mode === 'horizontal' ? (
          <div>
            <NavMenu routes={routes} mode={mode} theme="dark" />
            <span></span>
          </div>
        ) : (
          <Fragment />
        )}
      </Header>
      <Layout>
        {mode !== 'horizontal' ? (
          <div>
            <NavMenu mode={mode} theme="light" routes={routes} />
            <div
              className="rounded h-180px w-236px mx-10px mt-10px p-20px box-border text-#fff"
              style={{
                boxShadow: '#fff 0 0 2px,#fff 0 12px 24px -4px',
                background: '#1e293b'
              }}
            >
              <div className="flex items-center justify-center mb-8px">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z"
                    fill="#fff"
                  />
                </svg>

                <span className="ml-10px text-22px ">道哥</span>
              </div>
              <div className="mb-10px">
                <div className="text-16px">Github:</div>
                <div className="text-12px">
                  https://github.com/leidao/ldx-three-learn
                </div>
              </div>
              <Button
                onClick={() => {
                  window.open('https://github.com/leidao/ldx-three-learn')
                }}
                className="w-200px"
                icon={<StarOutlined />}
              >
                给个star呗
              </Button>
            </div>
          </div>
        ) : (
          <Fragment />
        )}
        <Content routes={routes} />
      </Layout>
    </Layout>
  )
}

export default ProLayout
