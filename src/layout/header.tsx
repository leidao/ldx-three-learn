/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-03 17:10:48
 */
import { LogoutOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

const Header = (props: any) => {
  const navigate = useNavigate()

  const exitToLogin = async () => {
    localStorage.removeItem('token')
    sessionStorage.removeItem('token')
    const redirect = encodeURIComponent(window.location.pathname)
    navigate(`/login?redirect=${redirect}`)
  }

  const infos = [
    // { label: '个人中心', icon: UserIcon, key: 'user' },
    // { label: '修改密码', icon: KeyIcon, key: 'change' },
    {
      label: '退出登录',
      icon: () => <LogoutOutlined className="mr-12px text-14px text-#666" />,
      key: 'exit',
      click: exitToLogin
    }
  ]

  return (
    <div
      className="flex justify-between h-52px items-center px-20px bg-#fff z-999"
      style={{ boxShadow: '0 0 6px #ddd' }}
    >
      <div>
        <span className="text-22px">3D案例</span>
      </div>
      {props.children}
      <div>
        <div>
          <img
            className="w-30px h-30px"
            src="/src/assets/坐席头像.png"
            alt="头像"
          />
          <span className="ml-8px">道哥</span>
        </div>
      </div>
    </div>
  )
}

export default Header
