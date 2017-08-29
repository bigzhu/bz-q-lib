<template>
  <q-alert color="secondary" icon='settings_input_component'>
    <slot/>
  </q-alert>
</template>

<script>
  import {
    QAlert
  } from 'quasar'
  export default {
    props: [],
    components: {
      QAlert
    },
    computed: {},
    data: function() {
      return {}
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
