import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
// 配置axios 请求数据
import axios from 'axios'
// 把他绑定在全局上， 方便各个组件访问axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
