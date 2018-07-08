<template>
  <div class="home-footer">
    <div class="ticket-price">
      <span class="iconfont">&#xe724;</span>
      <strong>票面价</strong>
      是指通过景区指定窗口售卖的纸质门票上标注的价格
    </div>
    <p>触屏版<em>电脑板</em></p>
    <p>Qunar 京ICP备05021087意见反馈</p>
  </div>
</template>

<script>
export default {
  name: 'home-footer'
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/various.styl'

.home-footer
  padding-bottom: .2rem
  background: $bgColor
  .ticket-price
    padding-left: .2rem
    margin-bottom: .2rem
    background: #fff
    font-size: .24rem
    line-height: .6rem
    color: $smallTextColor
    span
      vertical-align: bottom
      font-size: .2rem
  p
    text-align: center
    &:first-of-type
      margin-bottom: .16rem
      em
        margin-left: .4rem
        color: $themeColor
    &:last-of-type
      color: $smallTextColor
</style>
