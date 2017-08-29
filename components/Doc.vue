<template>
  <div class="layout-padding relative-position">
    <BzTitle>
      BzUploadFile 上传文件
    </BzTitle>
    <BzUploadFile>
      <img src="https://cdn.jin10.com/board/1cc712b684fc01406c7f2f94d04cd197.gif">
    </BzUploadFile>
    <BzTitle>
      BzUploadImg 上传图片
    </BzTitle>
    <BzUploadImg v-model="img" alt="测试" />
  </div>
</template>

<script>
  import BzUploadFile from './BzUploadFile'
  import BzUploadImg from './BzUploadImg'
  import BzTitle from './BzTitle'
  export default {
    props: [],
    components: {
      BzUploadImg,
      BzUploadFile,
      BzTitle
    },
    computed: {},
    data: function() {
      return {
        img: ''
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        // code that assumes this.$el is in-document
      })
    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>
</style>
