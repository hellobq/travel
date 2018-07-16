<template>
  <div class="detail-banner">
    <img
      width="100%"
      src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg"
      alt="上海迪士尼乐园"
    >

    <div class="bg-box">
      <router-link
        to="/"
        tag="div"
        class="back-to-home"
      >
        <span class="iconfont">&#xe603;</span>
      </router-link>

      <div class="num-desc">
        <div class="pic-num">
          <span class="iconfont">&#xe691;</span>
          <em>{{listData.length}}</em>
        </div>
        <div class="area-name">上海迪士尼乐园</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-banner',
  data () {
    return {
      area: 0,
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
  mounted () {
    console.log(this.$route.params)
  }
}
</script>

<style scoped lang="stylus">
.detail-banner
  position: relative
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
  .bg-box
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
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
</style>
