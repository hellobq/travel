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
        v-model="keyword"
      >
    </div>

    <!-- search-result -->
    <div class="search-result" v-show="keyword" ref="wrapper">
      <ul>
        <li
          v-for="(item, index) of resData"
          :key="index"
          @click="changeCurrentCity"
        >
          {{item}}
        </li>
        <li v-show="hasResData">未找到相关地点</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'city-search',
  props: {
    allCity: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      keyword: '',
      resData: [],
      timer: null
    }
  },
  methods: {
    changeCurrentCity (e) {
      this.$store.dispatch('changeCity', e.target.innerText)
      this.$router.push('/')
      this.resData = []
      this.keyword = ''
    }
  },
  watch: {
    keyword (val) {
      if (val) {
        this.timer && clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          if (this.resData.length) this.resData = []
          for (let k in this.allCity) {
            this.allCity[k].forEach(obj => {
              (obj.name.indexOf(val) !== -1 || obj.spell.indexOf(val) !== -1) && this.resData.push(obj.name)
            })
          }
        }, 100)
      }
    }
  },
  computed: {
    hasResData () {
      return !this.resData.length
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/various.styl'

.city-search
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
      box-sizing: border-box
      width: 100%
      height: .6rem
      padding: 0 .1rem
      text-align: center
      border-radius: .04rem
      font: .26rem 'Microsoft yahei'
  .search-result
    overflow: hidden
    z-index: 22
    position: absolute
    top: 1.42rem
    left: 0
    right: 0
    bottom: 0
    background: #f2f2f2
    li
      padding-left: .2rem
      text-align: left
      line-height: .6rem
      border-bottom: .02rem solid #ddd
      background: #fff
</style>
