import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Brokerage from '@/components/brokerage'
import Developer from '@/components/developer'
import Properties from '@/components/developer/Properties'
import PropertyInfo from '@/components/developer/propertyInfo'

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
      path: '/developer/:developer/:project',
      name: 'Developer',
      component: Developer,
      children: [
        {
          path: '',
          component: Properties
        },
        {
          path: ':property',
          component: PropertyInfo
        }
      ]
    }
  ],
  mode: 'history'
})
