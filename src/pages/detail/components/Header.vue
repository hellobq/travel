<template>
  <div class="detail-header" @click="changeFlag">
    <div class="top-box">
      <div
        @click.stop="toHome"
        tag="div"
        class="back-to-home"
      >
        <span class="iconfont">&#xe603;</span>
      </div>

      <img
        width="100%"
        :src="currentImg"
        :alt="area_title"
      >

      <div class="num-desc">
        <div class="pic-num">
          <span class="iconfont">&#xe691;</span>
          <em>{{listDataLen}}</em>
        </div>
        <div class="area-name">{{area_title}}</div>
      </div>
    </div>

    <!-- fix-header-box -->
    <div class="fix-header" :style="{opacity}">
      <div @click.stop="toHome" tag="div" >
        <span class="iconfont">&#xe603;</span>
      </div>
      <h3>{{$route.params.area_id}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-header',
  props: {
    currentImg: {
      type: String,
      reqired: true
    },
    area_title: String,
    listDataLen: Number
  },
  data () {
    return {
      opacity: 0
    }
  },
  activated () {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    window.addEventListener('scroll', this.handleScroll, false)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll, false)
  },
  methods: {
    changeFlag () {
      this.$emit('reciveFlag', true)
    },
    toHome () {
      this.$router.push('/')
    },
    handleScroll () {
      const sTop = document.body.scrollTop || document.documentElement.scrollTop
      this.opacity = sTop < 50 ? 0 : (sTop >= 50 && sTop <= 140 ? sTop / 140 : 1)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/various.styl'

.detail-header
  .top-box
    position: relative
    top: 0
    left: 0
    background: linear-gradient(top, rgba(0,0,0,0) 90%, rgba(0,0,0,.8))
    .num-desc
      position: absolute
      left: .2rem
      bottom: .3rem
      .pic-num
        width: 1.2rem
        line-height: .4rem
        background: rgba(0,0,0,.5)
        border-radius: .2rem
        text-align: center
        color: #fff
        span
          margin-right: .1rem
          font-size: .2rem
      .area-name
        margin-top: .12rem
        color: #fff
        font-size: .36rem
    .back-to-home
      position: absolute
      top: .1rem
      left: .1rem
      width: .72rem
      height: .72rem
      line-height: .72rem
      background: rgba(0,0,0,.5)
      border-radius: 50%
      text-align: center
      span
        margin-left: -.06rem
        font-size: .54rem
        color: #fff
  .fix-header
    z-index: 2
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: .88rem
    font-size: .32rem
    text-align: center
    background: #fff
    color: #fff
    &>div
      position: absolute
      left: .1rem
      top: .1rem
      span
        display: block
        font-size: .56rem
    h3
      width: 100%
      height: .88rem
      line-height: .88rem
      background: $themeColor
</style>
