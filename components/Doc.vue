<template>
  <div class="layout-padding relative-position">
    <BzTitle>
      BzUploadFileMultiple 上传多文件
    </BzTitle>
    <BzUploadFileMultiple v-model="files" upload_url="/api/file/upload/" alt="测试">
      <q-btn>上传</q-btn>
    </BzUploadFileMultiple>
    <BzTitle>
      BzUploadImgMultiple 上传图片多张
    </BzTitle>
    <BzUploadImgMultiple v-model="imgs" upload_url="/api/file/upload/" alt="测试" />

    <BzTitle>
      BzUploadImg 上传图片
    </BzTitle>
    <BzUploadImg v-model="img" alt="测试" upload_url="/api/file/upload/" />

    <BzTitle>
      BzUploadFile 上传文件
    </BzTitle>
    <BzUploadFile>
      <q-btn>上传</q-btn>
    </BzUploadFile>
  </div>
</template>

<script>
  import BzUploadFileMultiple from './BzUploadFileMultiple'
  import BzUploadImgMultiple from './BzUploadImgMultiple'
  import BzUploadFile from './BzUploadFile'
  import BzUploadImg from './BzUploadImg'
  import BzTitle from './BzTitle'
  import {
    QBtn
  } from 'quasar'
  export default {
    props: [],
    components: {
      BzUploadFileMultiple,
      QBtn,
      BzUploadImgMultiple,
      BzUploadImg,
      BzUploadFile,
      BzTitle
    },
    computed: {},
    data: function() {
      return {
        files: [],
        imgs: [],
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
