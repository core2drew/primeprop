import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Brokerage from '@/components/brokerage'
import DevProperties from '@/components/developer'
import PropertyInfo from '@/components/propertyInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/brokerage',
      name: 'Brokerage',
      component: Brokerage
    },
    {
      path: '/ayalaland/premier',
      name: 'AyalalandPremier',
      component: DevProperties
    },
    {
      path: '/ayalaland/premier/parklinks',
      name: 'Parklinks',
      component: PropertyInfo
    }
  ],
  mode: 'history'
})
