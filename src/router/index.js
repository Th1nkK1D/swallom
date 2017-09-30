import Vue from 'vue'
import Router from 'vue-router'
import RandomView from '@/components/RandomView'
import MainView from '@/components/MainView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    },
    {
      path: '/result/:lat/:lng/:zoom/:radius/:type',
      name: 'RandomView',
      //props: true,
      component: RandomView
    }
  ]
})
