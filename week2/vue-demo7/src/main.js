import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

const auth = {
  loggedIn: function () {
    if (window.localStorage.login) {
      return JSON.parse(window.localStorage.login).isAuth
    } else {
      return false
    }
  }
}

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(auth.loggedIn(), 'auth')
    if (!auth.loggedIn()) {
      console.log('1')
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 把要跳转的地址作为参数传到下一步
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
