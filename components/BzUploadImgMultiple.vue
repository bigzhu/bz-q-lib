<template>
  <div>
    <BzUploadImg v-for="v in value" :key="v.url" :upload_url="upload_url" v-model="v.url" :alt="v.name"/>
    <BzUploadImg v-model="new_img"  :upload_url="upload_url" @upload_done="addNew"/>
  </div>
</template>

<script>
  import BzUploadImg from './BzUploadImg'
  export default {
    watch: {
      value: {
        handler: function (val, oldVal) {
          let imgs = val.filter(item => item.src !== '')
          if (val.length !== imgs.length) {
            this.$emit('input', val.filter(item => item.src !== ''))
          }
        },
        deep: true
      }
    },
    props: {
      upload_url: {
        type: String,
        default: '/api_file_upload'
      },
      value: {
        default: function () { return [] }
      }
    },
    components: {
      BzUploadImg
    },
    data: function () {
      return {
        new_img: ''
      }
    },
    methods: {
      addNew: function (src, alt) {
        this.value.push(src)
        this.new_img = ''
      }
    }
  }
</script>
