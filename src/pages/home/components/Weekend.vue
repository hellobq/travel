<template>
  <!-- weekend -->
  <div class="home-weekend">
    <div class="home-weekend-title">
      <h3>周末去哪儿</h3>
    </div>
    <div class="home-weekend-list">
      <ul>
        <li v-for="item of listData" :key="item.id">
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
  data () {
    return {
      listData: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1606/35/177a89a2b3a1e5.jpg_r_640x214_ba0ef2d4.jpg',
        title: '清凉撒欢好去处',
        desc: '这个夏天，周边消暑好去处'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ae/11f076c6cb7c47.jpg_r_640x214_6f643489.jpg',
        title: '张家界必游TOP10',
        desc: '到张家界最值得游玩的地方'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/fb/302620ed8350f8.jpg_r_640x214_25a07cb4.jpg',
        title: '长沙必游TOP10',
        desc: '到了长沙，一定要到这些地方走走'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1603/56/33894ef918e1a8.jpg_r_640x214_a9de6b4e.jpg',
        title: '湘西必游TOP10',
        desc: '神奇山水风光，浓郁民俗风情'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/39/d61194f054f1f4.jpg_r_640x214_03da9c61.jpg',
        title: '这里是休闲天堂',
        desc: '游仙，忘情，休性，问踪'
      }]
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
      padding-bottom: .2rem
      p
        padding: .12rem .2rem
        background: #fff
        &:last-of-type
          padding-top: 0
          color: $smallTextColor
</style>
