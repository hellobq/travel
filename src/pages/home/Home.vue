<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-hot></home-hot>
    <home-love></home-love>
    <home-weekend></home-weekend>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeHot from './components/Hot'
import HomeLove from './components/Love'
import HomeWeekend from './components/Weekend'
import HomeFooter from './components/Footer'

export default {
  name: 'Home',
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeHot, HomeLove, HomeWeekend, HomeFooter }
}
</script>

<style scoped lang="stylus">

</style>
