import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./components/Register/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/Login/index.vue')
    },
    {
      path: '/',
      name: 'navbar',
      component: () => import('./views/Navbar.vue'),
      children: [
        {
          path: 'vip',
          name: 'vip',
          component: () => import('./views/Vip.vue')
        },
        {
          path: 'classify',
          name: 'classify',
          component: () => import('./views/Classify.vue')
        },        
        {
          path: 'mine',
          name: 'mine',
          component: () => import('./views/Mine.vue')
        },        {
          path: 'home',
          name: 'home',
          component: () => import('./views/Home.vue')
        },        {
          path: 'cart',
          name: 'cart',
          component: () => import('./views/Cart.vue'),
          meta: {
            requireAuth: true
          }
        }
      ] 
    }
  ]
})
