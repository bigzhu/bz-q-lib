<template>
  <div>
    <BzUploadImg v-for="v in value" v-model="v.src" :alt="v.alt"/>
    <BzUploadImg v-model="new_img" @upload_done="addNew"/>
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
        this.value.push({src: src, alt: alt})
        this.new_img = ''
      }
    }
  }
</script>
