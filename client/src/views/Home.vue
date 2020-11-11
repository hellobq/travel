<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <img alt="Vue logo" src="../assets/art-babochki-nasekomye-risunki-9226.jpg">
    <img alt="Vue logo" src="../assets/babochki-cvety-nasekomye-pejzazh-priroda-41836.jpg">
    <img alt="Vue logo" src="../assets/babochki-cvety-priroda-rasteniya-7.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
