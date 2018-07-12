<template>
  <div class="city-search">
    <div class="city-search-header">
      <router-link to="/">
        <span class="iconfont">&#xe603;</span>
      </router-link>
      城市选择
    </div>
    <div class="city-input">
      <input
        type="text"
        placeholder="输入城市名或拼音"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'city-search'
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/various.styl'

.city-search
  position: relative
  padding: .08rem
  background: $themeColor
  text-align: center
  .city-search-header
    margin-bottom: .08rem
    line-height: .6rem
    color: #fff
    font-size: .3rem
    span
      position: absolute
      left: 0
      top: .08rem
      font-size: .56rem
  .city-input
    input
      width: 100%
      height: .6rem
      text-align: center
      border-radius: .04rem
      font: .26rem 'Microsoft yahei'

</style>
