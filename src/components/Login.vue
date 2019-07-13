<template>
  <div class="ui segment">
    <q-field icon="accountCircle" :error="!!userNameError" :error-label="userNameError">
      <q-input v-model="userName" @focus="cleanError" type="text" float-label="请输入邮箱/用户名" />
    </q-field>
    <q-field icon="vpnKey" :error="!!passwordError" :error-label="passwordError">
      <q-input v-model="password" @keyup.enter="check" @focus="cleanError" type="password" float-label="请输入密码" />
    </q-field>
    <q-btn @click="check" :color="buttonColor" class="full-width">登录</q-btn>
  </div>
</template>

<script>
  import {
    QBtn,
    QInput,
    QField
  } from 'quasar'
  export default {
    props: {
      buttonColor: {
        type: String,
        default: 'primary'
      }
    },
    components: {
      QBtn,
      QField,
      QInput
    },
    data: function() {
      return {
        userName: '',
        userNameError: '',
        password: '',
        passwordError: ''
      }
    },
    ready() {},
    methods: {
      check: function() {
        if (!this.userName) {
          this.userNameError = '必须输入用户名!'
          return
        }
        if (!this.password) {
          this.passwordError = '必须输入密码!'
          return
        }
        this.$emit('login', this.userName, this.password)
      },
      cleanError: function() {
        this.userNameError = ''
        this.passwordError = ''
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
