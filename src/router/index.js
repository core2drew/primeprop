import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Brokerage from '@/components/brokerage'
import Developer from '@/components/developer'
import Projects from '@/components/developer/Projects'
import ProjectDetails from '@/components/developer/ProjectDetails'

Vue.use(Router)
console.log('test')
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
      path: '/developer/:developer/:property',
      name: 'Developer',
      component: Developer,
      children: [
        {
          path: '',
          component: Projects
        },
        {
          path: ':project',
          component: ProjectDetails
        }
      ]
    }
  ],
  mode: 'history'
})
