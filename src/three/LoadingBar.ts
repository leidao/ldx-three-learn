/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-04 18:35:35
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-04 20:18:50
 */
class LoadingBar {
  domElement: HTMLElement
  progressBar: HTMLElement
  assets: { [key: string]: { loaded: number; total: number } } = {}
  constructor() {
    this.domElement = document.createElement('div')
    this.domElement.style.position = 'fixed'
    this.domElement.style.top = '0'
    this.domElement.style.left = '0'
    this.domElement.style.width = '100%'
    this.domElement.style.height = '100%'
    this.domElement.style.background = '#000'
    this.domElement.style.opacity = '0.7'
    this.domElement.style.display = 'flex'
    this.domElement.style.alignItems = 'center'
    this.domElement.style.justifyContent = 'center'
    this.domElement.style.zIndex = '1111'
    const barBase = document.createElement('div')
    barBase.style.background = '#aaa'
    barBase.style.width = '50%'
    barBase.style.minWidth = '250px'
    barBase.style.borderRadius = '10px'
    barBase.style.height = '15px'
    this.domElement.appendChild(barBase)
    const bar = document.createElement('div')
    bar.style.background = '#22a'
    bar.style.width = '50%'
    bar.style.borderRadius = '10px'
    bar.style.height = '100%'
    bar.style.width = '0'
    barBase.appendChild(bar)
    this.progressBar = bar

    document.body.appendChild(this.domElement)
    this.visible = false
    // function onprogress(delta) {
    //   const progress = delta * 100
    //   loader.progressBar.style.width = `${progress}%`
    // }
  }

  set progress(delta: number) {
    const percent = delta * 100
    this.progressBar.style.width = `${percent}%`
  }

  set visible(value: boolean) {
    if (value) {
      this.domElement.style.display = 'flex'
    } else {
      this.domElement.style.display = 'none'
    }
  }

  get loaded() {
    if (this.assets === undefined) return false

    let ploaded = 0,
      ptotal = 0
    Object.values(this.assets).forEach((asset) => {
      ploaded += asset.loaded
      ptotal += asset.total
    })

    return ploaded == ptotal
  }

  update(loaded: number, total: number) {
    // if (this.assets === undefined) this.assets = {}

    // if (this.assets[assetName] === undefined) {
    //   this.assets[assetName] = { loaded, total }
    // } else {
    //   this.assets[assetName].loaded = loaded
    //   this.assets[assetName].total = total
    // }

    // let ploaded = 0,
    //   ptotal = 0
    // Object.values(this.assets).forEach((asset) => {
    //   ploaded += asset.loaded
    //   ptotal += asset.total
    // })

    this.progress = loaded / total
  }
}

export { LoadingBar }
