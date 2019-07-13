<template>
<div>
  <LinkBtn loader v-for="o in oauths" :key="o.type" :href="getHref(o)" :icon="'ion-logo-'+o.type" :color="o.type" :no-caps="true">
    <q-spinner-facebook slot="loading" /> {{getName(o)}}
  </LinkBtn>
</div>
</template>

<script>
import LinkBtn from './LinkBtn'
export default {
  props: {
    url: {},
    run: {},
    oauths: {
      type: Array,
      default: function () {
        return [
          {
            type: 'github'
          },
          {
            type: 'twitter',
            url: '/fuck/apiTwitter'
            }, {
            type: 'facebook'
          },
          {
            type: 'google',
            url: '/api/google'
          },
          {
            type: 'qq'
          }
          ]
      }
    }
  },
  components: {
    LinkBtn
  },
  computed: {},
  data: function () {
    return {}
  },
  mounted: function () {
    this.$nextTick(function () {
      // code that assumes this.$el is in-document
    })
  },
  methods: {
    upperFirst: function (string) {
      return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
    },
    getName: function (oauth) {
      if (oauth.type === 'qq') {
        return 'QQ'
      } else {
        return this.upperFirst(oauth.type)
      }
    },
    getHref: function (oauth) {
      if (this.run) {
        return 'javascript:void(0);'
      }
      if (oauth.url) {
        return oauth.url
      } else {
        let url = '/api_' + oauth.type
        if (oauth.type === 'qq') url += '_login'
        return url
      }
    }
  }
}
</script>

<style lang="stylus">
  .bg-google.q-btn
    background-color #DD4B39
  .bg-qq.q-btn
    background-color #44badc
  .bg-facebook.q-btn
    background-color #3b5998
  .bg-twitter.q-btn
    background-color #00b2ff
  .bg-github.q-btn
    background-color #2b3137
</style>
