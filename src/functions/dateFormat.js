// 日期格式化
import preZero from './preZero'
export default function (timestamp, mask) {
  if (!timestamp) return ''
  var date, matchedArray, o, regStr, res
  let timestampStandard = (typeof timestamp === 'string') ? timestamp.replace(/-/g, '/') : timestamp
  date = new Date(timestampStandard)
  o = {
    'y+': function (len) {
      return preZero(date.getFullYear(), len)
    },
    'Y+': function (len) {
      return preZero(date.getFullYear(), len)
    },
    'M+': function (len) {
      return preZero(date.getMonth() + 1, len)
    },
    'd+': function (len) {
      return preZero(date.getDate(), len)
    },
    'h+': function (len) {
      return preZero(date.getHours(), len)
    },
    'm+': function (len) {
      return preZero(date.getMinutes(), len)
    },
    's+': function (len) {
      return preZero(date.getSeconds(), len)
    }
  }
  for (regStr in o) {
    matchedArray = mask.match(new RegExp(regStr))
    if (matchedArray) {
      res = o[regStr](matchedArray[0].length)
      mask = mask.replace(matchedArray[0], res)
    }
  }
  return mask
}
