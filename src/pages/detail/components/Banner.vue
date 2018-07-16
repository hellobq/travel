<template>
  <div class="detail-banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of listData" :key="item.id">
        <img :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'detail-banner',
  props: {
    listData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observeParents: true,
        observer: true
      }
    }
  },
  mounted () {
    console.log(this.listData)
  },
  components: { swiper, swiperSlide }
}
</script>

<style scoped lang="stylus">
.detail-banner
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: #000
  .swiper-container
    padding-top: 2rem
    .swiper-slide
      img
        margin-top: 50%
        transform: translateY(-50%)
        width: 100%
    .swiper-pagination
      width: 7.5rem
      color: #fff
</style>
