# vue-demo8


# 跳转详情页：



router.js

 export default new Router([
   {
     path: '/detail/:id'
     name: 'detail',
     component: () => import()
   }
 ])

this.$router.push({
  path: '/detail/${id}',
})


# 详情页面：

1. 进入页面获取传过来的id
  
  this.$route.params
重新请求数据

this.$axios('/api/detail', { 
  params: {
    id: id
  }
}).then(res => {
  console.log(res)
})