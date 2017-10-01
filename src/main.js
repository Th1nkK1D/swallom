// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

import App from './App'
import router from './router'

import * as VueGoogleMaps from 'vue2-google-maps'
import StarRating from 'vue-star-rating'

import('../node_modules/vuetify/dist/vuetify.min.css')


Vue.use(Vuex)
Vue.use(Vuetify)
Vue.component('star-rating', StarRating);

//Init Vuex store
const store = new Vuex.Store({
  state: {
    resultList: []
  },
  mutations: {
    updateResult (state,val) {
      state.resultList = val;
    }
  }
})

// Init google map
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBHC0eSKzmNCIyfE3WayYlxU_qVhHcClB0',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    v: 3
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
