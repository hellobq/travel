<template>
  <div class="city-list">
    <div class="city-outer-box" ref="wrapper">
      <div class="content">
        <!-- current-city -->
        <div class="current-city common">
          <h3>当前城市</h3>
          <div class="list">
            <ul>
              <li>上海</li>
            </ul>
          </div>
        </div>

        <!-- hot-city -->
        <div class="hot-city common">
          <h3>热门城市</h3>
          <div class="list">
            <ul>
              <li
                v-for="item of hotCity"
                :key="item.id"
                @click="changeCurrentCity"
              >
                {{item.name}}
              </li>
            </ul>
          </div>
        </div>

        <!-- all-city -->
        <div class="all-city">
          <div
            v-for="(itemObj, key) of allCity"
            :key="key"
          >
            <h3 :ref="key">{{key}}</h3>
            <ul>
              <li
                v-for="item of itemObj"
                :key="item.id"
                @click="changeCurrentCity"
              >
                {{item.name}}
              </li>
            </ul>
          </div>
        </div>
      </div> <!--  content -->
    </div> <!--  city-outer-box -->
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'city-list',
  props: {
    hotCity: {
      type: Array,
      required: true
    },
    allCity: {
      type: Object,
      required: true
    },
    char: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      currentCity: '上海'
    }
  },
  methods: {
    changeCurrentCity (e) {
      this.currentCity = e.target.innerText
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {click: true})
  },
  watch: {
    char (val) {
      if (val) this.scroll.scrollToElement(this.$refs[val][0])
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/various.styl'

.city-outer-box
  position: absolute
  top: 1.4rem
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  .content
    .common
      h3
        padding: 0 .2rem
        font-size: .24rem
        line-height: .6rem
        background: $bgColor
      .list
        padding: 0 .2rem .2rem
        background: #fff
        ul
          display: flex
          flex-wrap: wrap
          li
            margin: .2rem .3rem 0 0
            width: 2rem
            border-radius: .06rem
            line-height: .48rem
            border: 1px solid $themeColor
            color: $themeColor
            text-align: center
    .hot-city
      .list ul li
        border: .02rem solid #ddd
        color: $textColor
    .all-city
      h3
        padding: 0 .2rem
        font-size: .24rem
        line-height: .6rem
        background: $bgColor
      ul
        li
          line-height: .6rem
          padding-left: .2rem
          border-bottom: .02rem solid #ddd
          color: $textColor
</style>
