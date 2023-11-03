/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 14:45:22
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-03 17:10:09
 */
import { Layout } from 'antd'
import _ from 'lodash'
import React, { Fragment, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

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
          <NavMenu mode={mode} theme="light" routes={routes} />
        ) : (
          <Fragment />
        )}
        <Content routes={routes} />
      </Layout>
    </Layout>
  )
}

export default ProLayout
