<template>
  <div id="app">
    <!-- <keep-alive exclude="detail">
      <router-view/>
    </keep-alive> -->
    app
    <test></test>
  </div>
</template>

<script>
import test from './test'
export default {
  name: 'App',
  components: {
    test
  }
}
</script>

<style scoped>
div {
  color: red;
}
</style>
