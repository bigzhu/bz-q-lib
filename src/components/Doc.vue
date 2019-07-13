<template>
<div class="layout-padding relative-position">
  <BzTitle>
    显示 OauthInfo 头像
  </BzTitle>
  <OauthInfo>
    <q-menu>
      <q-list item-separator link>
        <q-item @click.native="$router.push('/UserSet')">
          {{ $t("设置") }}
        </q-item>
        <q-item @click.native="logout">
          {{ $t("退出") }}
        </q-item>
      </q-list>
    </q-menu>
  </OauthInfo>

  <BzTitle>
    BzWebSocket 向服务器注册 WebSocket
  </BzTitle>

  <BzWebSocket @onMessage="socketCallback" path="/api/ws" theKey="test" />
  <BzWebSocket @onMessage="socketCallback" path="/api/ws" theKey="test2" />
  <BzWebSocket @onMessage="socketCallback" path="/api/ws" theKey="test3" />

  <BzTitle>
    BzCountUp 递次增加的数字
  </BzTitle>
  <BzCountUp :end="1000" :duration="2.5" :options="{useEasing : true,
      useGrouping : true,
      separator : ',',
      decimal : '.',
      prefix : '',
      suffix : ''}" />

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
  <TimeLen dateTime="2012/04/03 09:21:34" />

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

  <!--
  <BzTitle>
    BzFab 文字菜单按钮
  </BzTitle>
  <BzFab content="文字" color="" icon="" activeIcon="" direction="left">
    <q-fab-action color="" icon="whatshot">
      <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">清空未读!</q-tooltip>
    </q-fab-action>
  </BzFab>
  -->

  <BzTitle>
    Login 用户登录
  </BzTitle>
  <Login @login="login" />

  <BzTitle>
    BzUploadFileMultiple 上传多文件
  </BzTitle>
  <BzUploadFileMultiple v-model="files" uploadUrl="/api/file/upload/" alt="测试">
    <q-btn>上传</q-btn>
  </BzUploadFileMultiple>

  <BzTitle>
    BzUploadImgMultiple 上传图片多张
  </BzTitle>
  <BzUploadImgMultiple v-model="imgs" uploadUrl="/api/file/upload/" alt="测试" />

  <BzTitle>
    BzUploadImg 上传图片
  </BzTitle>
  <BzUploadImg v-model="img" alt="测试" uploadUrl="/api/file/upload/" />

  <BzTitle>
    BzUploadFile 上传文件
  </BzTitle>
  <BzUploadFile>
    <q-btn>上传</q-btn>
  </BzUploadFile>
</div>
</template>

<script>
import BzWebSocket from './BzWebSocket'
import BzCountUp from './BzCountUp'
import BzRouteTab from './BzRouteTab'
import TimeLen from './TimeLen'
import Oauth from './Oauth'
import LinkBtn from './LinkBtn'
// import BzFab from './BzFab'
import Login from './Login'
import BzUploadFileMultiple from './BzUploadFileMultiple'
import BzUploadImgMultiple from './BzUploadImgMultiple'
import BzUploadImg from './BzUploadImg'
import BzUploadFile from './BzUploadFile'
import BzTitle from './BzTitle'
import OauthInfo from './OauthInfo'
export default {
  props: [],
  components: {
    OauthInfo,
    BzWebSocket,
    BzCountUp,
    BzRouteTab,
    TimeLen,
    Oauth,
    LinkBtn,
    // BzFab,
    Login,
    BzUploadFileMultiple,
    BzUploadImgMultiple,
    BzUploadImg,
    BzUploadFile,
    BzTitle
  },
  computed: {},
  data: function () {
    return {
      test: '2017/09/24 00:30:00',
      files: [],
      imgs: [],
      img: ''
    }
  },
  methods: {
    socketCallback: function (data) {
      window.alert(data.result)
    },
    promiseExp: function () {
      return this.$store.dispatch('get', '/notExist').then(function (response) {
        throw new Error('promise error')
      })
    },
    login: function (userName, password) {
      alert(`userName: ${userName} \npassword: ${password}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
