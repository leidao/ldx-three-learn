/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 14:45:22
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-04 01:39:06
 */
// import { Layout } from 'antd'
import React, { Suspense } from 'react'
// const { Footer } = Layout
import {
  Route,
  Routes
  // useParams
} from 'react-router-dom'

import { RouteLoading } from '@/components'

// import styles from './index.module.less'
import routes from './routes'
const RouteList: React.FC = () => {
  // const params = useParams()

  return (
    <Suspense fallback={<RouteLoading />}>
      <Routes>
        {(routes || []).map((route) => {
          const Component = route.component
          return (
            <Route path={route.path} element={<Component />} key={route.key} />
          )
        })}
      </Routes>
    </Suspense>
  )
}

export default RouteList
