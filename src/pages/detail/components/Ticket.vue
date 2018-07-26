<template>
  <div class="detail-ticket">
    <div class="ticket-box" v-for="(item, index) of ticketList" :key="index">
      <div class="ticket-icon"></div>
      <div class="ticket">{{item.title}}</div>

      <!-- 递归组件 -->
      <div class="ticket-children" v-if="item.children">
        <detail-ticket :ticketList="item.children"></detail-ticket>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-ticket',
  props: {
    ticketList: Array
  }
}
</script>

<style scoped lang="stylus">
.ticket-box
  position: relative
  .ticket-icon
    position: absolute
    top: 0
    left: .2rem
    width: .6rem
    height: .6rem
    background:url(//s.qunarzz.com/piao/image/touch/sight/detail.png) no-repeat 0 -.54rem / .5rem 4rem;
  .ticket-children
    padding: 0 .2rem
  .ticket
    line-height: .6rem
    padding-left: .8rem
</style>
