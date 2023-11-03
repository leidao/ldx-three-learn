/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-06 14:45:22
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-04 01:17:04
 */
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import * as fs from 'fs'
import LessPluginImportNodeModules from 'less-plugin-import-node-modules'
import lessToJS from 'less-vars-to-js'
import { resolve } from 'path'
import { presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
// import autoCSSModulePlugin from 'vite-plugin-auto-css-modules'
// import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import'

const themeVariables = lessToJS(
  fs.readFileSync(resolve(__dirname, './src/css/variables.less'), 'utf8')
)
// const safelist = []
// for (let i = 0; i < 800; i++) {
//   safelist.push(`h-${i}px`)
//   safelist.push(`top-${i}px`)
//   safelist.push(`-top-${i}px`)
// }
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 可以直接使用index.less文件名，会导致debug不准
    // autoCSSModulePlugin(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    Unocss({
      presets: [
        presetUno()
        // ...custom presets
      ]
      // safelist: safelist
    })
    // 按需加载组件库样式，会导致debug稍微不准
    // createStyleImportPlugin({
    //   resolves: [AntdResolve()]
    // })
  ],
  // publicPath: '/vue-three-traffic-editor',
  base: '/ldx-three-learn',
  server: {
    port: 8004,
    open: true,
    // 接口代理地址设置
    proxy: {
      '/api/v1/': {
        target: 'http://10.168.1.100:30100/',
        // rewrite: (path) => path.replace(/^\/api\/v1/, ''),
        changeOrigin: true
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // 全局导入
        additionalData: '@import "./src/css/variables.less";',
        // 支持内联 JavaScript
        javascriptEnabled: true,
        module: true,
        // 解析第三方包的less样式
        plugins: [new LessPluginImportNodeModules()],
        // 重写 less 变量，定制样式
        modifyVars: themeVariables
      }
    }
  },
  resolve: {
    alias: {
      // 路径别名设置
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'node_modules/')
    }
  }
})
