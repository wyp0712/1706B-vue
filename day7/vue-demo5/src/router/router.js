import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: '404',
      component: () => import('@/components/404NoFound/index.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import('../views/Classify.vue')
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: () => import('../views/ShopCart.vue')
    },
    {
      path: '/PersonalCenter',
      name: 'PersonalCenter',
      component: () => import('../views/PersonalCenter.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../components/Detail/index.vue')
    }
  ]
})
