<template>
  <div>
  </div>
</template>

<script>
  import checkWsPro from '../functions/checkWsPro'// 用这个来确定加密协议
  export default {
    props: {
      // ws 的 url 路径
      path: {
        type: String,
        required: true
      },
      // 根据什么key去注册 websocket
      the_key: {
        type: String,
        required: true
      }
    },
    watch: {
      'the_key': function (val) {
        this.initSocket()
      }
    },
    data: function () {
      return {
        web_socket: null
      }
    },
    mounted () {
      if (this.web_socket === null) {
        this.initSocket()
      }
    },
    methods: {
      initSocket: function () {
        let url = checkWsPro() + '://' + window.location.hostname + ':' + window.location.port + this.path
        this.web_socket = new window.WebSocket(url)
        this.web_socket.onopen = this.register
        this.web_socket.onclose = this.onClose
        this.web_socket.onmessage = this.onMessage
      },
      onClose: function (event) {
        window.setTimeout(this.initSocket(), 5000)
      },
      onMessage: function (event) {
        console.log(event.data)
        let data = JSON.parse(event.data)
        // if (data.error !== '0') { throw new Error(data.error) }
        this.$emit('on_message', data, this.web_socket)
      },
      register: function () {
        let data = {}
        data.oper = 'register'
        data.key = this.the_key
        data = JSON.stringify(data)
        this.web_socket.send(data)
        console.log('register web socke with key: ' + this.the_key)
      }
    }
  }
</script>
