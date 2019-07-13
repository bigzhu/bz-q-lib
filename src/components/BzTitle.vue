<template>
<div>
  <br>
  <q-banner class="bg-secondary text-white">
    <q-icon name="settings_input_component" color="white" />
    <slot/>
  </q-banner>
  <br>
</div>
</template>

<script>
export default {
  props: [],
  components: {
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
  methods: {}
}
</script>

<style lang="stylus" scoped>
</style>
