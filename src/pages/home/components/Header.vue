<template>
  <div class="home-header">
    <div class="header-left-iconfont">
      <span class="iconfont">&#xe603;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe657;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right-area">
      湘潭
      <span class="iconfont">&#xe631;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-header'
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/various.styl'

.home-header
  display: flex
  height: .88rem
  background: #00bcd4
  line-height: .88rem
  color: #fff
  font-size: .28rem
  .header-left-iconfont
    float: left
    width: .8rem
    height: 100%
    span
      display: block
      font-size: .56rem
  .header-search
    flex: 1
    margin-top: .14rem
    height: .6rem
    line-height: .6rem
    background: #fff
    border-radius: .06rem
    color: #e4e7ea
    text-indent: .4em
    span
      font-size: .36rem
      vertical-align: top
  .header-right-area
    float: right
    width: 1.28rem
    height: 100%
    text-align: center
    span
      margin-left: -.06rem
      vertical-align: top
</style>
