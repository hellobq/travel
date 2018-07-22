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
    axios({
      method: 'get',
      url: '/api/index.json',
      params: {
        city: '上海' // 初始化应该是已定位的城市旅游资源
      }
    })
      .then(req => {
        const mydata = req.data.data
        this.swiperList = mydata.swiperList
        this.iconList = mydata.iconList
        this.hotList = mydata.HotList
        this.loveList = mydata.LoveList
        this.weekendList = mydata.weekendList
      })
      .catch(err => {
        console.log(err)
      })
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      hotList: [],
      loveList: [],
      weekendList: []
    }
  }
}
</script>
