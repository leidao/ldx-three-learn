/*
 * @Description:
 * @Author: ldx
 * @Date: 2022-04-08 10:49:48
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-10 10:06:37
 */
declare module 'slash2'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module 'omit.js'
declare module 'three-pathfinding'
// google analytics interface
interface GAFieldsObject {
  eventCategory: string
  eventAction: string
  eventLabel?: string
  eventValue?: number
  nonInteraction?: boolean
}
interface Window {
  ga: (
    command: 'send',
    hitType: 'event' | 'pageview',
    fieldsObject: GAFieldsObject | string
  ) => void
  reloadAuthorized: () => void
}

declare let ga: () => void

// preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
declare let ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
  | 'site'
  | undefined

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false
declare const SHJPSERVER: string
declare const DXFURL: string

declare module 'mathjs'
declare module 'mhtml-to-word'
declare module 'jquery'
declare module 'html-formatter'
declare module 'uuid'
// declare module 'acorn-jsx';
