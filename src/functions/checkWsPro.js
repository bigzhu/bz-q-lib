// 根据是 https 还是 http, 决定使用 ws 还是 wss
export default function() {
  if (window.location.protocol === 'https:') return 'wss'
  else return 'ws'
}
