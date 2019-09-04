// 入口文件
import Vue from 'vue'
import App from './App.vue'

// import './assets/style/reset.scss'
import axios from 'axios'
console.log(axios)
Vue.prototype.$axios = axios
// ajax

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
