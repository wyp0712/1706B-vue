import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(to, 'to------------to')
  console.log(to.matched.some(item => item.meta.requiresAuth))
  if (to.matched.some(item => item.meta.requiresAuth)) {
    // 在这块判断是否登陆
    next()
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
