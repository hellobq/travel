import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/city', name: 'City', component: City },
    { path: '/detail/:area_title', name: 'Detail', component: Detail }
  ]
})
