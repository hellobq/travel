<template>
  <div class="detail">
    <detail-header @reciveFlag="getFlag"></detail-header>
    <detail-banner @click.native="getFlag(false)" v-show="flag" :listData="listData"></detail-banner>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'

export default {
  name: 'detail',
  data () {
    return {
      flag: false,
      listData: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/d2/d2a029bded2f6b4aa3.img.jpg_350x240_6ed8e68e.jpg'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/1e/1e5eaf5ac11a1dea3.img.jpg_350x240_1654220c.jpg'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/d7/d75e41fc3bf305d8a3.img.jpg_350x240_384ad477.jpg'
      }, {
        id: '006',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/d9/d9119bcadf6045f5a3.img.jpg_350x240_95ba8b32.jpg'
      }]
    }
  },
  methods: {
    getFlag (bool) {
      this.flag = bool
    }
  },
  components: { DetailHeader, DetailBanner }
}
</script>

<style scoped lang="stylus">

</style>
