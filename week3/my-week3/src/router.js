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
      name: 'home',
      component: Home
    },
    {
      path: '/project',
      name: 'project',
      component: () => import(/* webpackChunkName: "about" */ './views/Project.vue'),
      children: [
        {
          path: 'takePart',
          component: () => import('./views/TakePart.vue')
        },
        {
          path: 'collect',
          component: () => import('./views/collect.vue')
        }
      ]
    },
    {
      path: '/fans',
      name: 'fans',
      component: () => import('./views/Fans.vue'),
      children: [
        {
          path: 'attentionMe',
          component: () => import('./components/AttentionMe/index.vue')
        },
        {
          path: 'attentionYou',
          component: () => import('./components/AttentionYou/index.vue')
        }
      ]
    }
  ]
})
