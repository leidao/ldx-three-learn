/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 21:56:29
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-03 23:39:25
 */
import { Layout } from 'antd'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { RouteLoading } from '@/components'

import { RoutesType } from '../router/routes'
function Content(props: any) {
  const renderRoutes = (routes: any) => {
    return (routes || []).map((route: RoutesType) => {
      const childRoutes = route.routes || []
      if (route.component) {
        const Component = route.component
        if (childRoutes.length > 0) {
          return (
            <Route path={route.path} element={<Component />} key={route.key}>
              {renderRoutes(childRoutes)}
            </Route>
          )
        } else {
          return (
            <Route
              path={route.path}
              element={<Component />}
              key={route.key}
            ></Route>
          )
        }
      } else {
        return renderRoutes(childRoutes)
      }
    })
  }
  console.log('props.routes', props.routes)

  return (
    <Layout.Content
      style={{
        minHeight: 280
      }}
    >
      {/* <Suspense fallback={<RouteLoading />}> */}
      <Routes>{renderRoutes(props.routes)}</Routes>
      {/* </Suspense> */}
    </Layout.Content>
  )
}
export default Content
