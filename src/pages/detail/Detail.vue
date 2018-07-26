<template>
  <div class="detail">
    <detail-header
      @reciveFlag="getFlag"
      :current-img="currentImg"
      :area-title="$route.params.area_title"
      :list-dataLen="listData.length"
    >
    </detail-header>
    <detail-banner
      @click.native="getFlag(false)"
      v-show="flag"
      :listData="listData"
    >
    </detail-banner>
    <detail-ticket :ticketList="ticketList"></detail-ticket>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailTicket from './components/Ticket'
import axios from 'axios'

export default {
  name: 'detail',
  created () {
    axios({
      type: 'get',
      url: 'api/detail.json',
      params: {
        area_title: this.$route.params.area_title
      }
    })
      .then(req => {
        const data = req.data.data
        this.currentImg = data.currentImg
        this.listData = data.listData
        this.ticketList = data.ticketList
      })
      .catch(err => {
        console.log(err)
      })
  },
  data () {
    return {
      flag: false,
      currentImg: '',
      play_area: '',
      listData: [],
      ticketList: []
    }
  },
  methods: {
    getFlag (bool) {
      this.flag = bool
    }
  },
  components: { DetailHeader, DetailBanner, DetailTicket }
}
</script>
