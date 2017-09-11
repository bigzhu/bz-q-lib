<template>
  <div class="layout-padding relative-position">
    <BzTitle>
      BzFab 文字菜单按钮
    </BzTitle>
    <BzFab content="文字" color="" icon="" activeIcon="" direction="left">
      <q-fab-action color="" icon="whatshot">
        <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">清空未读!</q-tooltip>
      </q-fab-action>
    </BzFab>

    <BzTitle>
      Login 用户登录
    </BzTitle>
    <Login @login="login" />

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
  import Login from './Login'
  import BzFab from './BzFab'
  import BzUploadFileMultiple from './BzUploadFileMultiple'
  import BzUploadImgMultiple from './BzUploadImgMultiple'
  import BzUploadFile from './BzUploadFile'
  import BzUploadImg from './BzUploadImg'
  import BzTitle from './BzTitle'
  import {
    QTooltip,
    QFabAction,
    QBtn
  } from 'quasar'
  export default {
    props: [],
    components: {
      QTooltip,
      QFabAction,
      BzFab,
      Login,
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
        test: '2017/09/24 00:30:00',
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
    methods: {
      login: function(user_name, password) {
        alert(`user_name: ${user_name} \npassword: ${password}`)
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
