import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 引入vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.prototype.$axios = axios

Vue.config.productionTip = false

// 导航守卫
router.beforeEach((to, from, next) => {
  const token = store.state.token
  // 如果为true 说明需要验证登陆
  if (to.meta.requireAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    console.log('login-------router-before')
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
