# duodian


借助vuex存储token 登陆密钥

1. 进入页面重定向到登陆页面

2. 登陆页面： 账号密码提交登陆 并且 1。将后端返回来的token存在vuex中 2. 跳转到首页

3. 导航守卫：  main.js
  router.beforEach((to, from, next) => {
    1. 进入守卫函数就立马取vuex中的token
    const token = store.state.token
    2. 判断哪个路由需要守卫
    if (to.meta.requireAuth) {
      说明需要守卫
      if(token) {
        next() 如有就往下操作 
      } else {
        next({
          path: '/login'
          query: {
            redirect: to.fullpath
          }
        })
      }
    } else {
      next()
    }
  })
 

