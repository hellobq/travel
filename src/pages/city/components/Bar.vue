<template>
<div class="scroll-bar">
  <ul>
    <li
      v-for="(item, index) of chars"
      :key="index"
      :ref="item"
      @click="getCurrentChar"
      @touchstart="handleStart"
      @touchmove="handleMove"
      @touchend="handleEnd"
    >
      {{item}}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'city-bar',
  props: {
    allCity: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      startY: 0,
      status: false,
      timer: null
    }
  },
  methods: {
    getCurrentChar (e) {
      this.$emit('char', e.target.innerHTML.replace(/\s*(\w+)\s*/, (str, current) => current))
    },
    handleMove (e) {
      if (this.status) {
        if (this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          const num = ~~((e.touches[0].clientY - this.startY) / e.target.clientHeight)
          if (this.chars[num]) this.$emit('char', this.chars[num])
        }, 16)
      }
    },
    handleStart (e) {
      this.status = true
    },
    handleEnd () {
      this.status = false
    }
  },
  computed: {
    chars () {
      const charArr = []
      for (let item in this.allCity) charArr.push(item)
      return charArr
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/various.styl'

.scroll-bar
  position: absolute
  z-index: 11
  right: .08rem
  top: 0
  padding-top: 3rem
  li
    margin-bottom: .1rem
    color: $themeColor
    text-align: center
</style>
