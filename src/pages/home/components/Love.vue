<template>
  <div class="home-love">
    <!-- title -->
    <div class="home-love-title">
      <h3>猜你喜欢</h3>
    </div>

    <!-- list -->
    <div class="love-list">
      <ul>
        <router-link
          tag="li"
          v-for="item of loveData"
          :key="item.id"
          :to="{ name: 'Detail', params: {area_title: item.title} }"
        >
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
        </router-link>
      </ul>
    </div>

    <!-- all products -->
    <div class="all-products">查看所有产品</div>
  </div>
</template>

<script>
export default {
  name: 'home-love',
  props: {
    loveData: {
      type: Array,
      required: true
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
  background: url('~@/assets/img/love.png') no-repeat center left .2rem / .32rem auto
  h3
    padding-left: .6rem
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
  color: $themeColor
  text-align: center
  border-top: 1px solid #e0e0e0
</style>
