<template>
  <div @click="click" class="ui button">
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
        console.log(this.file_input.files)
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
        console.log(file)
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
              if (data.error !== '0') {
                console.log(self.upload_url + ' error: ' + data.error)
                throw new Error(data.error)
              }
              self.$emit('upload_done', data.file_path, file.name)
              return data
            })
            .catch(function(error) {
              console.log('Request failed', error)
              throw error
            })
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
