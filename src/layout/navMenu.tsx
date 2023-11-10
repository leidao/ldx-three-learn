/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 21:56:29
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-10 15:26:39
 */
import { Layout, Menu } from 'antd'
const { Sider } = Layout
const { SubMenu } = Menu
import { Fragment, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Icon } from '@/components/Icon'
import { Mode } from '@/recoil'

import { RoutesType } from '../router/routes'
interface Props {
  mode: Mode
  theme: 'light' | 'dark'
  routes: RoutesType[]
}
const findParent = (route: RoutesType) => {
  while (route.hideInMenu) {
    route = (route as any).parent
  }
  return route
}
const findKey = (
  routes: RoutesType[],
  path: string,
  parent?: RoutesType
): string[] => {
  const keys = []
  for (let i = 0; i < routes.length; i++) {
    let route = routes[i] as any
    route.parent = parent
    const routeChildren = route.routes || []
    if (route.path === path) {
      if (route.hideInMenu) {
        route = findParent(route)
        keys.push(route.key)
      } else {
        keys.push(route.key)
      }
      break
    } else {
      const childrenKeys = findKey(routeChildren, path, route)
      if (childrenKeys.length > 0) {
        keys.push(route.key, ...childrenKeys)
        break
      }
    }
  }
  return keys
}
const NavMenu: React.FC<Props> = ({
  mode = 'vertical',
  theme = 'dark',
  routes
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  // const [currentMenu, setCurrentMenu] = useState<Array<string>>([])
  const [defaultMenu, setDefaultMenu] = useState<Array<string>>([])
  // const [collapsed, setCollapsed] = useState<boolean>(false)
  const [openKey, setOpenKey] = useState<Array<string>>([])
  // const location = useLocation()

  const onOpenChange = (keys: any) => {
    setOpenKey(keys)
  }
  useEffect(() => {
    const keys: any = findKey(routes, location.pathname)

    const selectMenu = keys.pop()

    setDefaultMenu([selectMenu])
    mode === 'vertical' && setOpenKey([...openKey, ...keys])
    //TODO 判断用户是否登陆拦截
  }, [location.pathname, routes])
  // 判断当前路由的子路由是否需要显示菜单，如果有任一需要，当前路由为SubMenu菜单
  const isChildrenMenuShow = (childRoutes: RoutesType[]) => {
    return childRoutes.some((route: RoutesType) => !route.hideInMenu)
  }
  const renderChildren = (routes: RoutesType[]) => {
    return (routes || []).map((route: RoutesType) => {
      if (route.path === '*') return
      const childRoutes = route.routes || []
      if (route.hideInMenu) return <Fragment key={route.key} />
      if (childRoutes.length > 0 && isChildrenMenuShow(childRoutes)) {
        return (
          <SubMenu
            key={route.key}
            title={route.title}
            onTitleClick={() => {
              if (route.redirect) {
                navigate(route.redirect)
              } else {
                if (route.path) {
                  navigate(route.path)
                } else {
                  console.log('没有跳转路径')
                }
              }
            }}
            icon={
              route.icon && (
                <Icon
                  type={route.icon}
                  className="mr-12px text-18px text-#666"
                />
              )
            }
          >
            {renderChildren(childRoutes)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item
            key={route.key}
            onClick={() => {
              if (route.redirect) {
                navigate(route.redirect)
              } else {
                if (route.path) {
                  navigate(route.path)
                } else {
                  console.log('没有跳转路径')
                }
              }
            }}
            icon={
              route.icon && (
                <Icon
                  type={route.icon}
                  className="mr-12px text-18px text-#666"
                />
              )
            }
          >
            {route.title}
          </Menu.Item>
        )
      }
    })
  }

  return (
    <Sider
      style={{
        flex: mode === 'horizontal' ? 1 : '0 0',
        background: theme === 'dark' ? '#000' : '#fff',
        height: `calc(100vh - 250px)`
      }}
      width={mode === 'horizontal' ? '100%' : '256px'}
      className="bg-#000"
    >
      <Menu
        className="h-100%"
        onOpenChange={onOpenChange}
        theme={theme}
        mode={mode === 'horizontal' ? 'horizontal' : 'inline'}
        selectedKeys={defaultMenu}
        openKeys={openKey}
      >
        {renderChildren(routes)}
      </Menu>
    </Sider>
  )
}
export default NavMenu
