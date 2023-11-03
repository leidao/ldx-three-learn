/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 14:45:22
 * @LastEditors: ldx
 * @LastEditTime: 2022-04-27 14:50:28
 */
import { Layout } from 'antd'

const { Footer } = Layout
const Footers = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Footer className="h-60px text-center text-rgba(0, 0, 0, 0.65)">
      &#169; {currentYear} 上海营邑城市规划设计股份有限公司
    </Footer>
  )
}

export default Footers
