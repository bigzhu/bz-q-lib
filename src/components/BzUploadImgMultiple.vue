<template>
  <div>
    <BzUploadImg v-for="v in value" :key="v.url" :uploadUrl="uploadUrl" v-model="v.url" :alt="alt||v.name"/>
    <BzUploadImg v-model="newImg"  :uploadUrl="uploadUrl" @uploadDone="addNew"/>
  </div>
</template>

<script>
  import BzUploadImg from './BzUploadImg'
  export default {
    watch: {
      value: {
        handler: function (val, oldVal) {
          let imgs = val.filter(o => o.url !== '')
          if (val.length !== imgs.length) {
            this.$emit('input', imgs)
          }
        },
        deep: true
      }
    },
    props: {
      uploadUrl: {
        type: String,
        default: '/apiFileUpload'
      },
      value: {
        default: function () { return [] }
      },
      alt: {
        type: String,
        default: ''
      }
    },
    components: {
      BzUploadImg
    },
    data: function () {
      return {
        newImg: ''
      }
    },
    methods: {
      addNew: function (url, name) {
        this.value.push({ url, name })
        this.newImg = ''
      }
    }
  }
</script>
