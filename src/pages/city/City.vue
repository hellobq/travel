<template>
  <div class="city">
    <city-search :all-city="cities"></city-search>
    <city-list :hot-city="hotCities" :all-city="cities" :char="oneChar"></city-list>
    <city-bar :all-city="cities" @char="getOneChar"></city-bar>
  </div>
</template>

<script>
import CitySearch from './components/Search'
import CityList from './components/List'
import CityBar from './components/Bar'
import axios from 'axios'

export default {
  name: 'city',
  components: { CitySearch, CityList, CityBar },
  data () {
    return {
      hotCities: [],
      cities: {},
      oneChar: ''
    }
  },
  methods: {
    getOneChar (ch) {
      this.oneChar = ch
    }
  },
  created () {
    axios({
      method: 'get',
      url: '/api/city.json'
    })
      .then(req => {
        const cityData = req.data.data
        this.cities = cityData.cities
        this.hotCities = cityData.hotCities
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
