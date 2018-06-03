<template>
  <div class="layout-padding relative-position">
    <BzTitle>
      BzRouteTab 可以指定哪些 route name tab 高亮
    </BzTitle>
    <q-tabs color="secondary">
      <BzRouteTab :names="['test', 'test2']" slot="title" :to="{'name': 'CustTypes'}" replace label="客户1" />
      <BzRouteTab :names="['test', 'test2']" slot="title" :to="{'name': 'CustTypes'}" replace label="客户2" />
      <BzRouteTab :names="['test', 'test2']" slot="title" :to="{'name': 'CustTypes'}" replace label="客户3" />
    </q-tabs>

    <BzTitle>
      promise exception test
    </BzTitle>
    <q-btn @click="promiseExp">
      test
    </q-btn>

    <BzTitle>
      TimeLen 和当前的时间间隔
    </BzTitle>
    <TimeLen date_time="2012/04/03 09:21:34" />

    <BzTitle>
      Oauth Oauth 按钮
    </BzTitle>
    <Oauth/>

    <BzTitle>
      LinkBtn 直接挂link的button
    </BzTitle>
    <LinkBtn loader href="https://follow.center">follow center
      <q-spinner-facebook slot="loading" size="20px" />
    </LinkBtn>

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
  // import loadComponents from '../functions/loadComponents'
  import BzRouteTab from './BzRouteTab'
  import TimeLen from './TimeLen'
  import Oauth from './Oauth'
  import LinkBtn from './LinkBtn'
  import BzFab from './BzFab'
  import Login from './Login'
  import BzUploadFileMultiple from './BzUploadFileMultiple'
  import BzUploadImgMultiple from './BzUploadImgMultiple'
  import BzUploadImg from './BzUploadImg'
  import BzUploadFile from './BzUploadFile'
  import BzTitle from './BzTitle'
  export default {
    props: [],
    components: {
      BzRouteTab,
      TimeLen,
      Oauth,
      LinkBtn,
      BzFab,
      Login,
      BzUploadFileMultiple,
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
    methods: {
      promiseExp: function() {
        return this.$store.dispatch('get', '/notExist').then(function(response) {
          throw new Error('promise error')
        })
      },
      login: function(user_name, password) {
        alert(`user_name: ${user_name} \npassword: ${password}`)
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
