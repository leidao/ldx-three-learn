/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 14:45:22
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-11 19:53:07
 */
import { StarOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'
import _ from 'lodash'
import React, { Fragment, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

// import github from '@/assets/github.svg'
import gitee from '@/assets/gitee2.svg'
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
                <img className="w-70px h-30px" src={gitee} alt="github" />

                <span className="ml-10px text-22px ">道哥</span>
              </div>
              <div className="mb-10px">
                <div className="text-16px">Github:</div>
                <div className="text-12px">
                  https://gitee.com/ldx18015816566/ldx-three-learn
                </div>
              </div>
              <Button
                onClick={() => {
                  window.open(
                    'https://gitee.com/ldx18015816566/ldx-three-learn'
                  )
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
