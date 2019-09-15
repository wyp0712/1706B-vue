import Vue from 'vue'
import App from './App.vue'
import router from './router' // router
import store from './store' // vuex

import axios from 'axios'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router, // 注册
  store,
  render: h => h(App)
}).$mount('#app')
