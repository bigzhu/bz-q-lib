<template>
  <!-- 右上角的用户登录的头像 -->
  <q-btn flat>
    <img :src="oauthInfo.avatarURL" class="avatar" />
    <slot></slot>
  </q-btn>
</template>

<script>
  export default {
    computed: {
      oauthInfo() {
        return this.$store.state.lib.oauthInfo
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .avatar
    width 2.4rem
    height 2.4rem
</style>
