/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-04 01:38:32
 */

const Header = (props: any) => {
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
