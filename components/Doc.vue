<template>
  <div class="layout-padding ">
    <Title>
      BzFab 文字菜单按钮
    </Title>
    <BzFab content="文字" color="" icon="" activeIcon="" direction="left">
      <q-fab-action color="" @click="updateLast" icon="whatshot">
        <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">清空未读!</q-tooltip>
      </q-fab-action>
    </BzFab>

    <Title>
      Login 用户登录
    </Title>
    <Login @login="login" />

    <Title>
      BzUploadFileMultiple 上传多文件
    </Title>
    <BzUploadFileMultiple v-model="files" upload_url="/api/file/upload/" alt="测试">
      <q-btn>上传</q-btn>
    </BzUploadFileMultiple>

    <Title>
      BzUploadImgMultiple 上传图片多张
    </Title>
    <BzUploadImgMultiple v-model="imgs" upload_url="/api/file/upload/" alt="测试" />

    <Title>
      BzUploadImg 上传图片
    </Title>
    <BzUploadImg v-model="img" alt="测试" upload_url="/api/file/upload/" />

    <Title>
      BzUploadFile 上传文件
    </Title>
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
  import Title from './Title'
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
      Title
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
