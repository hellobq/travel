<template>
  <div class="banner-fade">
    <transition name="fade">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'fade'
}
</script>

<style scoped lang="stylus">
.fade-enter, .fade-leave-to
  opacity: 0
.fade-enter-active, .fade-leave-active
  transition: opacity .3s
</style>
