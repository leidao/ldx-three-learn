/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-11 19:52:08
 */
// import github from '@/assets/github.svg'
import gitee from '@/assets/gitee.svg'
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
        <div
          onClick={() => {
            window.open('https://gitee.com/ldx18015816566/ldx-three-learn')
          }}
          className="cursor-pointer"
        >
          <img className="w-70px h-30px" src={gitee} alt="github" />
          {/* <span className="ml-8px align-middle">给个star呗</span> */}
        </div>
      </div>
    </div>
  )
}

export default Header
