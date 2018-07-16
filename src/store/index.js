import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let city = '上海'
try {
  city = localStorage.getItem('city')
} catch (e) {
  console.log('不能使用localStorage实现存储！' + e)
}

export default new Vuex.Store({
  state: {
    city
  },
  mutations: {
    setCity (state, setCity) {
      state.city = setCity
      localStorage.setItem('city', setCity)
    }
  },
  actions: {
    changeCity (context, setCity) {
      context.commit('setCity', setCity)
    }
  }
})
