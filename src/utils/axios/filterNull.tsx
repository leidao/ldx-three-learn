// 参数过滤函数
type O = {
  [key: string]: any
}

const toType = (obj: any) => {
  return ({} as any).toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase()
}

export const filterNull = (o: O) => {
  for (const k in o) {
    if (o[k] === null || o[k] === undefined) {
      delete o[k]
    }
    o[k] = toType(o[k]) === 'string' ? o[k].trim() : o[k]
    o[k] = ['object', 'array'].includes(toType(o[k])) ? filterNull(o[k]) : o[k]
  }
  return o
}
