<template>
  <div @click="click">
    <slot></slot>
    <input type="file" @change="changeFile" :accept="accept" style="display: none" />
  </div>
</template>

<script>
  export default {
    props: {
      upload_url: { // 上传的 url
        type: String,
        default: '/api_file_upload'
      },
      accept: { // 上传类型
        type: String,
        default: '*'
      }
    },
    components: {},
    data: function() {
      return {
        file_input: null
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.file_input = this.$el.getElementsByTagName('input')[0]
      })
    },
    methods: {
      changeFile: function(e) {
        this.$emit('change_file', e)
        this.uploadFile()
      },
      uploadFile: function() {
        let file
        let fd
        fd = new window.FormData()
        let self = this
        file = this.file_input.files[0]
        if (file) {
          fd.append('file', file)
          return fetch(this.upload_url, {
              method: 'post',
              body: fd
            })
            .then(function(response) {
              if (response.status !== 200) {
                throw new Error(response.url + ' ' + response.status + ' ' + response.statusText)
              }
              return response.json()
            })
            .then(function(data) {
              // if (data.error !== '0') {
              //   console.log(self.upload_url + ' error: ' + data.error)
              //   throw new Error(data.error)
              // }
              let url = ''
              if (data.urls) url = data.urls[0].url // 律品的返回格式, 只取 url
              if (data.file_path) url = data.file_path // 以前的返回格式
              self.$emit('upload_done', url, file.name)
              return data
            })
            // .catch(function(error) {
            //   console.log('Request failed', error)
            //   throw new Error(error)
            // })
        }
      },
      click: function() {
        this.file_input.click()
      }
    },
    computed: {}
  }
</script>

<style lang="stylus" scoped>
</style>
