<template>
  <div class="layout-padding relative-position">
    <BzUploadFile>
      <img src="https://cdn.jin10.com/board/1cc712b684fc01406c7f2f94d04cd197.gif">
    </BzUploadFile>
  </div>
</template>

<script>
  import BzUploadFile from './BzUploadFile'
  export default {
    props: [],
    components: {
      BzUploadFile
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
