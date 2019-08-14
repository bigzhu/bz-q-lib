<template>
  <span></span>
</template>

<script>
  import { CountUp } from 'countup.js'
  export default {
    data() {
      return {}
    },
    props: {
      end: {
        type: Number,
        required: !0
      }
    },
    watch: {
      'end': function (val, oldVal) {
        this.countUp.update(val)
      }
    },
    mounted() {
      this.countUp = new CountUp(this.$el, this.end, this.options)
      this.countUp.start()
    }
  }
</script>
