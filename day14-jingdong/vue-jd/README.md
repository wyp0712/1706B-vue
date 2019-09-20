
# 第一 排版： 
1. 如果三段式  在app.vue中排三段式
#app {
  width: 100%;
  height:100%;
  display:flex;
  flex-direction:cloumn;
}

2. 如果有嵌套理由：
  在views下面新建一个navbar.vue ，在他里面排三段式
  #app {
    width: 100%;
    height:100%;
  }
  navbar.vue 
        header
        main 
          router-view
        main
        footer  

3. 每一个组件中排一个三段式，(不推荐)
#app {
  width: 100%;
  height:100%;
}

# 第二 组件：
 1. 一个 .vue文件就是一个组件，如果想在页面中看到组件，只能通过配置路由才可以实现； 

# 第五 tab切换  
  1.  五个按钮切换五个组件 ：动态组件切换 
      
      五个组件  五个  .vue文件
      一个主要的.vue文件中，写五个按钮

      <component is="组件名称"></component> 

   2. 路由跳转切换组件  需要配置五个路由，映射到五个.vue文件上    
# 第三 路由  
   
   1. 路由跳转 

      router-link to="/home"

   2. 编程式跳转  （用js跳转）

     绑定click事件

       this.$router.push({
         path: '/home',
         query: {}
       })  

       this.$router.push({
         name: 'home',
         params: {}
       })  

    3. 嵌套路由
        
       {
         path: '/home',
         name: 'home',
         component: ()=> import(''),
         children: [
           {
             path: 'vip'
             name: 'home',
             component: ()=> import(''),
           }
         ]
       } 
     
    4. 动态路由
        {
         path: '/detail/:id',
         name: 'detail',
         component: ()=> import(''),



# 第四 跳转详情页面

  1. 通过动态路由带上id进入详情页面：
  2. 通过this.$route.params.id 来获取id
  3. 通过ajax 传参数 确定当前 哪个数据的参数 0 给后台，过滤数据。返回结果

  const obj = {
    0: [],
    1: [],
    2: [],
    3: []
  }

  app.get('/api/detail', (req, res) => {
    // dataID 当前数据的id
    // goodsId 当前详情数据id
     const  { dataID, goodsId } = req.query;
     const goodItem = obj[dataID].filter(item => item.id === goodsId) 
     res.json(goodItem)   
  })


  1. 通过动态路由带上具体数据进入页面
  2. 通过this.$route.params.item 然后渲染数据
  3. 如果数据要长期存储，借用本地存储





