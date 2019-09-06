import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import MockData from '../mock/mockData.js'
import axios from 'axios'
// import './assets/lib/flexible.js'
import './assets/style/reset.scss'
console.log(MockData, 'MockData')

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    this.$axios.get('/getMovieList').then(res => {
      console.log(res)
    })
  }
}).$mount('#app')
