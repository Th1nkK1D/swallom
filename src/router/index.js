import Vue from 'vue'
import Router from 'vue-router'
import RandomView from '@/components/RandomView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RandomView',
      component: RandomView
    }
  ]
})
