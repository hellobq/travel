<template>
  <!-- weekend -->
  <div class="home-weekend">
    <div class="home-weekend-title">
      <h3>周末去哪儿</h3>
    </div>
    <div class="home-weekend-list">
      <ul>
        <li v-for="item of weekendData" :key="item.id">
          <img v-lazy="item.imgUrl" :alt="item.title" width="100%">
          <p>{{item.title}}</p>
          <p>{{item.desc}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-weekend',
  props: {
    weekendData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/various.styl'

.home-weekend
  color: $textColor
  background: $bgColor;
  .home-weekend-title
    padding: .2rem
  .home-weekend-list
    li
      max-heigt: 3rem
      padding-bottom: .2rem
      p
        padding: .12rem .2rem
        background: #fff
        &:last-of-type
          padding-top: 0
          color: $smallTextColor
</style>
