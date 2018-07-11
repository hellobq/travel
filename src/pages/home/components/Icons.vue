<template>
  <div class="home-icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(pageIcons, index) of iconsPageData" :key="index">
        <ul>
          <li v-for="item of pageIcons" :key="item.id">
            <div class="img-box">
              <img :src="item.imgUrl" alt="item.title">
            </div>
            <p>{{item.title}}</p>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'home-icons',
  props: {
    iconsData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    iconsPageData () {
      var n
      var pageArr = []
      this.iconsData.forEach((obj, i) => {
        n = ~~(i / 8)
        if (!pageArr[n]) pageArr[n] = []
        pageArr[n].push(obj)
      })
      return pageArr
    }
  },
  components: { swiper, swiperSlide }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/various.styl'
@import '~@/assets/styles/ellipsis.styl'

.home-icons
  .swiper-container
    padding-bottom: .8rem
    .swiper-slide ul
      display: flex
      flex-wrap: wrap
      li
        margin-top: .08rem
        width: 25%
        text-align: center
        color: $textColor
        .img-box
          min-height: 1.2rem
          img
            margin: .08rem 0
            width: 60%
        p
          setEllipsis()
    .swiper-pagination >>>  .swiper-pagination-bullet
        width: 6px
        height: 6px
</style>
