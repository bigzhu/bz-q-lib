<template>
<div>
</div>
</template>

<script>
import checkWsPro from '../functions/checkWsPro' // 用这个来确定加密协议
export default {
  props: {
    // ws 的 url 路径
    path: {
      type: String,
      required: true
    },
    // 根据什么key去注册 websocket
    theKey: {
      type: String,
      required: true
    }
  },
  watch: {
    'theKey': function (val) {
      this.initSocket()
    }
  },
  data: function () {
    return {
      webSocket: null
    }
  },
  mounted() {
    if (this.webSocket === null) {
      this.initSocket()
    }
  },
  methods: {
    initSocket: function () {
      let url = checkWsPro() + '://' + window.location.hostname + ':' + window.location.port + this.path
      this.webSocket = new window.WebSocket(url)
      this.webSocket.onopen = this.register
      this.webSocket.onclose = this.onClose
      this.webSocket.onmessage = this.onMessage
    },
    onClose: function (event) {
      window.setTimeout(this.initSocket(), 5000)
    },
    onMessage: function (event) {
      let data = JSON.parse(event.data)
      // if (data.error !== '0') { throw new Error(data.error) }
      this.$emit('onMessage', data, this.webSocket)
    },
    register: function () {
      let data = {}
      data.oper = 'register'
      data.key = this.theKey
      data = JSON.stringify(data)
      this.webSocket.send(data)
    }
  }
}
</script>
