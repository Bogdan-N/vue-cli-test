import Vue from 'vue'
import Router from 'vue-router'
import welcomPage from './components/welcomPage'
import childhood from './components/childhood'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'welcomPage',
      component: welcomPage
    },
    {
      path: '/childhood',
      name: 'childhood',
      component: childhood
    }
  ]
})

export default router
