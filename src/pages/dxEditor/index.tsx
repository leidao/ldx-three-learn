/*
 * @Description:电路编辑器
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-10 16:09:58
 */
import { useEffect } from 'react'
import image from '/dxEditor/img/image.png'
const Home = () => {
  useEffect(() => {}, [])

  return (
    <div className="h-100%  box-border p-10px pb-0px">
      <div className="h-100%  bg-white">
        <div className="p-10px h-100%">
          <div className="overflow-hidden h-100%">
            <img
              className="hover:scale-110 duration-800 cursor-pointer"
              onClick={()=>{
                 window.open('https://leidao.github.io/dx-editor/')
              }}
              width='100%'
              height='100%'
              src={image}
              alt='电路编辑器'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
