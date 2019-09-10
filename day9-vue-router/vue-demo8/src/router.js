import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: () => import('./components/404NotFound/index.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import('./components/Swiper/index.vue') 
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import('./views/Classify.vue') 
    },
    {
      path: '/cart',
      name: 'shopcart',
      component: () => import('./views/shopCart.vue') 
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./components/Detail/index.vue') 
    }
  ]
})
