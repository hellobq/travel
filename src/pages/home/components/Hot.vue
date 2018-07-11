<template>
  <div class="home-hot">
    <div class="bg">
      <div class="hot-title clearfix">
        <h3>本周热门榜单</h3>
        <div class="all-hot">
          <span class="iconfont">全部榜单&#xe614;</span>
        </div>
      </div>

      <swiper :options="swiperOption" ref="mySwiper" >
        <swiper-slide v-for="item of hotData" :key="item.id">
          <img :src="item.imgUrl" :alt="item.title">
          <p>{{item.title}}</p>
          <p><em>￥{{item.price}}</em> 起</p>
          <div v-if="item.topUrl" class="top-num">
            <img v-lazy="item.topUrl">
          </div>
        </swiper-slide>
        <div ref="scrollbar" class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'home-hot',
  props: {
    hotData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 6,
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        },
        onSlideChange: () => {
          console.log('hahaha!')
        }
      }
    }
  },
  mounted () {
    this.swiper
      .on('touchMove', e => {
        this.$refs.scrollbar.style.opacity = 1
      })
      .on('touchEnd', e => {
        this.$refs.scrollbar.style.opacity = 0
      })
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  components: { swiper, swiperSlide }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/various.styl'
@import '~@/assets/styles/ellipsis.styl'

.home-hot
  padding: .2rem 0
  background: #f5f5f5
  .bg
    background: #fff
    padding: 0 .2rem
    .hot-title
      padding: .2rem 0
      font-size: .32rem
      line-height: .6rem
      background: url('~@/assets/img/hot.png') no-repeat center left / .32rem auto
      h3
        float: left
        padding-left: .4rem
        color: $textColor
      .all-hot
        float: right
        color: #616161
        span
          font-size: .28rem
    .swiper-slide
      padding: .2rem 0 .4rem
      img
        width: 100%
      p
        color: $textColor
        font-size: .24rem
        text-align: center
        setEllipsis()
        &:first-of-type
          margin: .08rem 0
        em
          color: #ff8300
      .top-num
        position: absolute
        top: .12rem
        left: 0
        width: .84rem
        height: .4rem
    .swiper-scrollbar
      height: 2px
      opacity: 0
      transition: opacity .3s
</style>
