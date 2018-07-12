<template>
<div class="scroll-bar">
  <ul>
    <li v-for="(item, key) of allCity" :key="key">{{key}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'city-bar',
  props: {
    allCity: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/various.styl'

.scroll-bar
  position: absolute
  z-index: 99
  right: .08rem
  top: 3rem
  li
    margin-bottom: .1rem
    color: $themeColor
    text-align: center
</style>
