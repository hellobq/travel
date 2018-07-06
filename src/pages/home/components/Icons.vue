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
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      iconsData: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        title: '景点门票'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        title: '一日游'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        title: '必游榜单'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        title: '动植物园'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
        title: '夏日玩水'
      }, {
        id: '006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png',
        title: '普陀山'
      }, {
        id: '007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
        title: '上海欢乐谷'
      }, {
        id: '008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
        title: '上海迪士尼'
      }, {
        id: '009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        title: '全部'
      }]
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
    padding-bottom: .4rem
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
    .swiper-pagination
      bottom: -0.04rem
    .swiper-pagination >>>  .swiper-pagination-bullet
        width: 6px
        height: 6px
</style>
