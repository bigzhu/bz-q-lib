<template>
  <!-- 右上角的用户登录的头像 -->
  <q-btn flat>
    <img :src="oauth_info.avatar_url" class="avatar" />
    <slot></slot>
  </q-btn>
</template>

<script>
  export default {
    computed: {
      oauth_info() {
        return this.$store.state.lib.oauth_info
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .avatar
    width 2.4rem
    height 2.4rem
</style>
