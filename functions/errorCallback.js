export default function initErrorHandle(callBack) {
  window.addEventListener('unhandledrejection', function(error, promise) {
    console.log('unhandledrejection')
    callBack(error.reason.message)
  })
  window.onpossiblyunhandledexception = function() {
    console.log('unhandledrejection')
    window.onerror.apply(this, arguments) // call
  }
  window.onerror = function(message, source, lineno, colno, error) {
    callBack(error.message)
    return false
  }
}
