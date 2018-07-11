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

export default {
  name: 'home-swiper',
  props: {
    swiperData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
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
  .swiper-pagination >>>  .swiper-pagination-bullet
      width: 6px
      height: 6px
</style>
