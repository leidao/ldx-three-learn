/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-04 18:35:35
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-11 19:39:17
 */
import loading from '@/assets/loading.svg'
class LoadingBar {
  domElement: HTMLElement
  text: HTMLElement
  assets = new Map<any, { loaded: number; total: number }>([])
  constructor() {
    this.domElement = document.createElement('div')
    this.domElement.style.position = 'fixed'
    this.domElement.style.top = '0'
    this.domElement.style.left = '0'
    this.domElement.style.width = '100%'
    this.domElement.style.height = '100%'
    this.domElement.style.background = '#000'
    this.domElement.style.opacity = '0.8'
    this.domElement.style.display = 'flex'
    this.domElement.style.alignItems = 'center'
    this.domElement.style.justifyContent = 'center'
    this.domElement.style.zIndex = '9999'
    const progress = document.createElement('div')
    progress.style.display = 'flex'
    progress.style.flexDirection = 'column'
    progress.style.alignItems = 'center'
    const img = new Image()
    img.src = loading
    img.width = 260
    img.height = 180
    progress.appendChild(img)
    this.text = document.createElement('div')
    this.text.style.color = '#fff'
    this.text.innerText = '当前模型已加载 0 M'
    progress.appendChild(this.text)
    const explain = document.createElement('div')
    explain.innerText = '模型文件首次加载时间较长请耐心等待.....'
    explain.style.textAlign = 'center'
    explain.style.fontSize = '14px'
    explain.style.color = '#ff7c81'
    progress.appendChild(explain)
    this.domElement.appendChild(progress)
    // const barBase = document.createElement('div')
    // barBase.style.background = '#aaa'
    // barBase.style.width = '50%'
    // barBase.style.minWidth = '250px'
    // barBase.style.borderRadius = '10px'
    // barBase.style.height = '15px'
    // this.domElement.appendChild(barBase)
    // const bar = document.createElement('div')
    // bar.style.background = '#22a'
    // bar.style.width = '50%'
    // bar.style.borderRadius = '10px'
    // bar.style.height = '100%'
    // bar.style.width = '0'
    // barBase.appendChild(bar)
    // this.progressBar = bar

    document.body.appendChild(this.domElement)
    this.visible = false
    // function onprogress(delta) {
    //   const progress = delta * 100
    //   loader.progressBar.style.width = `${progress}%`
    // }
  }

  // set progress(delta: number) {
  //   const percent = delta * 100
  //   this.progressBar.style.width = `${percent}%`
  // }

  set visible(value: boolean) {
    if (value) {
      this.domElement.style.display = 'flex'
    } else {
      this.domElement.style.display = 'none'
    }
  }
  get total() {
    if (this.assets.size === 0) return 0
    let ptotal = 0
    this.assets.forEach((asset) => {
      ptotal += asset.total
    })
    return +(ptotal / 1024 / 1024).toFixed(2)
  }
  get loaded() {
    if (this.assets.size === 0) return false

    let ploaded = 0,
      ptotal = 0
    this.assets.forEach((asset) => {
      ploaded += asset.loaded
      ptotal += asset.total
    })
    console.log(ploaded, ptotal, this.assets, this.total, this.assets.size)

    return ploaded == ptotal
  }

  update(assets: Map<string, any>) {
    let ploaded = 0,
      ptotal = 0
    this.assets = assets
    assets.forEach((asset) => {
      ploaded += asset.loaded
      ptotal += asset.total
    })

    const progress = +(ploaded / 1024 / 1024).toFixed(2)
    const size = +(ptotal / 1024 / 1024).toFixed(2)
    const delta = Math.floor((ploaded / ptotal) * 100)
    // console.log(assets, ploaded, ptotal, delta, progress, size)

    // this.progress = ploaded / ptotal
    this.text.innerHTML = `当前已加载$${progress}M。`
  }
}

export { LoadingBar }
