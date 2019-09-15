

vue-cli 3.X版本中：public是向外暴露的静态文件访问路径  js css img html

1. img 引入方式
2. vue修饰符
3. vuex: 

   状态管理器
   组件通讯： 

    1. 父子 props
    2. 子父 $emit
    3. 兄弟： vuex



 /*
   1. 进入页面ajax请求所有数据给vuex传第过去
   2. 在vuex中更改数据逻辑
   3. 在请求数据的页面中，监听vuex中的数组是否为空；
   4. 如果list为空就给vuex送一次数据，如果不为空，就不给数据了
  */  
