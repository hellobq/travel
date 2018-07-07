<template>
  <div class="home-hot">
    <div class="bg">
      <div class="hot-title clearfix">
        <h3>本周热门榜单</h3>
        <div class="all-hot">
          <span class="iconfont">全部榜单&#xe614;</span>
        </div>
      </div>

      <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperData" :key="item.id">
          <img :src="item.imgUrl" :alt="item.title">
          <p>{{item.title}}</p>
          <p><em>￥{{item.price}}</em> 起</p>
          <div v-if="item.topUrl" class="top-num">
            <img :src="item.topUrl">
          </div>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'home-hot',
  data () {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 6,
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        }
      },
      swiperData: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_150x150_8156d2ff.jpg',
        topUrl: 'http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png',
        title: '上海迪士尼乐园',
        price: '69'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_150x150_90f7eeef.jpg',
        topUrl: 'http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png',
        title: '东方明珠',
        price: '128'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/1a/1aac2b1dd96b36ba3.water.jpg_150x150_edd4b21c.jpg',
        topUrl: 'http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png',
        title: '上海欢乐谷',
        price: '95.1'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_150x150_1b331280.jpg',
        title: '上海野生动物园',
        price: '63'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/9f/fbff2a5302c0ce906ef9b64159730f89.water.jpg_150x150_e0ad3151.jpg',
        title: '上海海洋水族馆',
        price: '103'
      }, {
        id: '006',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_150x150_58302249.jpg',
        title: '上海杜莎夫人蜡像馆',
        price: '125'
      }, {
        id: '007',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201407/03/0fecc57b14cf94dde413aa08f1a4719a.jpg_150x150_a0459fee.jpg',
        title: '黄浦江游船',
        price: '125'
      }, {
        id: '008',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_150x150_b068dce5.jpg',
        title: '上海玛雅海滩水公园',
        price: '140'
      }, {
        id: '009',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1502/ba/ba5f873a22327e0f.water.jpg_150x150_dda11aca.jpg',
        title: '上海影视乐园',
        price: '58.7'
      }, {
        id: '010',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/9b/9bf694a468dd774490.water.jpg_150x150_7211be01.jpg',
        title: '上海动物园',
        price: '37.4'
      }]
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
    .hot-title
      padding: .2rem 0
      font-size: .32rem
      line-height: .6rem
      background: url('~@/assets/img/hot.png') no-repeat center left .2rem / .32rem auto
      h3
        float: left
        padding-left: .6rem
        color: $textColor
      .all-hot
        float: right
        color: #616161
        span
          margin-right: .2rem
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
</style>
