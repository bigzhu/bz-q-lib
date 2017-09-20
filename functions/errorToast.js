// 错误处理
import errorCallback from './errorCallback'
import toast from './toast'

function warning(message) {
  toast(message, 'warning')
  console.log('show: warning')
}
export default function() {
  errorCallback(warning)
}
