<template>
  <div class="home-swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperData" :key="item.id">
        <img :src="item.imgUrl" alt="去哪儿门票">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

export default {
  name: 'home-swiper',
  data () {
    return {
      swiperData: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/6a/18f9b171a9275c02.jpg_750x200_97cd5547.jpg'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/eb/f3d2fa5308fd5f02.jpg_750x200_38b8d6f7.jpg'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1706/b9/6b91b49794f46402.jpg_750x200_d7f254e2.jpg'
      }, {
        id: '006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1706/b8/a8e8ff02b094c802.jpg_750x200_ddaec8e5.jpg'
      }],
      swiperOption: {
        autoplay: {
          delay: 3000
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: { swiper, swiperSlide }
}
</script>

<style scoped lang="stylus">
.swiper-container
  overflow: hidden
  min-height: 2rem
  .swiper-slide
    img
      width: 100%
  .swiper-pagination
    bottom: 4px;
  .swiper-pagination >>> span.swiper-pagination-bullet-active
      background: #fff
</style>
