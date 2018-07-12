<template>
  <div class="city">
    <city-search></city-search>
    <city-list :hot-city="hotCities" :all-city="cities"></city-list>
  </div>
</template>

<script>
import CitySearch from './components/Search'
import CityList from './components/List'
import axios from 'axios'

export default {
  name: 'city',
  components: { CitySearch, CityList },
  data () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  created () {
    axios({
      method: 'get',
      url: '/api/city.json'
    })
      .then(req => {
        const cityData = req.data.data
        console.log(cityData)
        this.cities = cityData.cities
        this.hotCities = cityData.hotCities
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
