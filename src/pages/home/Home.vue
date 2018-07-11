<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiper-data="swiperList"></home-swiper>
    <home-icons :icons-data="iconList"></home-icons>
    <home-hot :hot-data="hotList"></home-hot>
    <home-love :love-data="loveList"></home-love>
    <home-weekend :weekend-data="weekendList"></home-weekend>
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
import axios from 'axios'

export default {
  name: 'Home',
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeHot, HomeLove, HomeWeekend, HomeFooter },
  created () {
    this.getData()
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      hotList: [],
      loveList: [],
      weekendList: []
    }
  },
  methods: {
    getData () {  
      axios({
        method: 'get',
        url: 'http://localhost:8080/static/mock/index.json'
      })
        .then(req => {
          console.log(req)
          this.swiperList = req.data.data.swiperList
          this.iconList = req.data.data.iconList
          this.hotList = req.data.data.HotList
          this.loveList = req.data.data.LoveList
          this.weekendList = req.data.data.weekendList
          console.log(this.$data)
        })
        .catch(err => {
          console.log('出错啦' + err)
        })
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
