<template>
  <span></span>
</template>

<script>
  import CountUp from 'countup.js'
  export default{
    data () {
      return {}
    },
    props: {
      start: {
        type: Number,
        default: 0
      },
      end: {
        type: Number,
        required: !0
      },
      decimal: {
        type: Number,
        default: 0
      },
      duration: {
        type: Number,
        default: 2.5
      },
      options: {
        type: Object
      }
    },
    computed: {
      startValue: function () {
        return this.start
      },
      endValue: function () {
        return this.end
      },
      decimalValue: function () {
        return this.decimal
      },
      durationValue: function () {
        return this.duration
      }
    },
    watch: {
      'end': function (val, oldVal) {
        this.countUp.update(val)
      }
    },
    mounted () {
      this.countUp = new CountUp(this.$el, this.startValue,
        this.endValue,
        this.decimalValue,
        this.durationValue,
        this.options
      )
      this.countUp.start()
    }
  }
</script>
