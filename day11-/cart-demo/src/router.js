import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./components/Detail/index.vue')
    },
    {
      path: '/',
      name: 'navbar',
      component: () => import('./views/NavBar.vue'),
      children: [
        {
          path: 'cart',
          name: 'cart',
          component: () => import(/* webpackChunkName: "about" */ './views/Cart.vue')
        },
        {
          path: 'home',
          name: 'home',
          component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
        },
        {
          path: 'vant',
          name: 'vant',
          component: () => import('./views/vantTest.vue')
        },
      ]
    }
  ]
})
