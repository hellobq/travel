<template>
  <div class="home-love">
    <!-- title -->
    <div class="home-love-title">
      <h3>猜你喜欢</h3>
    </div>

    <!-- list -->
    <div class="love-list">
      <ul>
        <li v-for="item of imgData" :key="item.id">
          <div class="left-box">
            <img :src="item.imgUrl" :alt="item.title">
          </div>
          <div class="right-box">
            <div class="play-title">{{item.title}}</div>
            <div class="price-area clearfix">
              <span><em>￥{{item.price}}</em>起</span>
              <small>{{item.playArea}}</small>
            </div>
            <div v-if="item.ad" class="ad">{{item.ad}}</div>
          </div>
        </li>
      </ul>
    </div>

    <!-- all products -->
    <div class="all-products">查看所有产品</div>
  </div>
</template>

<script>
export default {
  name: 'home-love',
  data () {
    return {
      imgData: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg',
        title: '上海玛雅海滩水公园',
        price: '140',
        playArea: '佘山国家旅游度假区'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '上海迪士尼乐园',
        price: '69',
        playArea: '浦东新区'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/9f/fbff2a5302c0ce906ef9b64159730f89.water.jpg_200x200_87806940.jpg',
        title: '上海海洋水族馆',
        price: '103',
        playArea: '浦东新区'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_200x200_6d7378b2.jpg',
        title: '东方明珠',
        price: '128',
        playArea: '浦东新区',
        ad: '感受云端漫步，品味老上海风情'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_200x200_a32b9a92.jpg',
        title: '上海野生动物园',
        price: '62.9',
        playArea: '浦东新区'
      }, {
        id: '006',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/1a/1aac2b1dd96b36ba3.water.jpg_200x200_8148509f.jpg',
        title: '上海欢乐谷',
        price: '95.1',
        playArea: '松江区',
        ad: '游乐项目惊险刺激，特色表演异彩纷呈'
      }, {
        id: '007',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_200x200_46052773.jpg',
        title: '上海杜莎夫人蜡像馆',
        price: '130',
        playArea: '黄浦区',
        ad: '上海本月收藏Top5╰(￣▽￣)╭'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/various.styl'
@import '~@/assets/styles/ellipsis.styl'

// title
.home-love-title
  padding: .2rem 0
  font-size: .32rem
  line-height: .6rem
  background: url('~@/assets/img/love.png') no-repeat center left / .32rem auto
  h3
    padding-left: .4rem
    color: $textColor

// list
.love-list
  padding-left: .2rem
  li
    display: flex
    padding: .2rem 0
    border-bottom: 1px solid #e0e0e0
    &:last-child
      border-bottom: none
    .left-box
      position: relative
      width: 2rem
      img
        width: 100%
        border-radius: .04rem
    .right-box
      flex: 1
      padding-left: .2rem
      .play-title
        margin-top: .26rem
        font-size: .32rem
        line-height: .44rem
        color: $texColor
      .price-area
        margin: .4rem .2rem 0 0
        color: $smallTextColor
        font-size: .24rem
        span
          float: left
          em
            font-size: .4rem
            color: #ff8300
        small
            float: right
            margin-top: .12rem
            max-width: 1.2rem
            setEllipsis()
    .ad
      padding-top: .6rem
      font-size: .24rem
      color: #f55
      line-height: .34rem

// all-products
.all-products
  padding: .2rem 0
  color: $bgColor
  text-align: center
  border-top: 1px solid #e0e0e0
</style>
