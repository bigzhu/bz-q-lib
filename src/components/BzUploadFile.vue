<template>
  <div @click="click">
    <slot></slot>
    <input type="file" @change="changeFile" :accept="accept" style="display: none" />
  </div>
</template>

<script>
  import lrz from 'lrz'
  export default {
    props: {
      zip: { // 是否压缩图片
        type: Boolean,
        default: false
      },
      uploadUrl: { // 上传的 url
        type: String,
        default: '/apiFileUpload'
      },
      accept: { // 上传类型
        type: String,
        default: '*'
      }
    },
    components: {},
    data: function() {
      return {
        fileInput: null
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.fileInput = this.$el.getElementsByTagName('input')[0]
      })
    },
    methods: {
      changeFile: function(e) {
        this.$emit('changeFile', e)
        this.uploadFile()
      },
      fetchFile: function(fd) {
        let self = this
        return fetch(this.uploadUrl, {
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
            let url = ''
            let name = ''
            if (data.urls) {
              url = data.urls[0].url // 律品的返回格式, 只取 url
              name = data.urls[0].name
            }
            if (data.filePath) url = data.filePath // 以前的返回格式
            self.$emit('uploadDone', url, name)
            return data
          })
        // .catch(function(error) {
        //   console.log('Request failed', error)
        //   throw new Error(error)
        // })
      },
      uploadFile: function() {
        let self = this
        let file = this.fileInput.files[0]
        if (file) {
          if (this.zip) {
            lrz(file)
              .then(function(rst) {
                // 处理成功会执行
                self.fetchFile(rst.formData)
              })
              .catch(function(err) {
                // 处理失败会执行
                throw new Error(err)
              })
              .always(function() {
                // 不管是成功失败，都会执行
              })
          } else {
            let fd = new window.FormData()
            fd.append('file', file)
            self.fetchFile(fd)
          }
        }
      },
      click: function() {
        this.fileInput.click()
      }
    },
    computed: {}
  }
</script>

<style lang="stylus" scoped>
</style>
