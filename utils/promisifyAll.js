import { promisify } from './promisify'

export function promisifyAll (obj) {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return obj
  }
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'function' && !/[sS]ync$/.test(key)) {
      obj[`${key}Async`] = promisify(obj[key])
    }
  })
  return obj
}
