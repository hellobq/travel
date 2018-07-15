import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.0,
  listenEvents: ['scroll']
})
Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
