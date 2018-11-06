import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Developer from '@/components/developer'
import Info from '@/components/propertyinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ayalaland',
      name: 'Ayalaland',
      component: Developer
    },
    {
      path: '/ayalaland/celadon',
      name: 'PropertyInfo',
      component: Info
    }
  ]
})
