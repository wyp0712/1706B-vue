# vue-demo3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


vue 组件样式单独生效  scoped  <style land='scss' scoped></style>


父子:
   ‘工程师’  ‘前端工程师’
  单向数据流：props 传过去的值，子组件不能修改
--->
子父组件：发布订阅模式
 
 触发：一个事件
 this.$emit(‘父组件上定义的事件’, 要传给父组件的消息)

 
 父组件如何使用：

   parentFn () {
     console.log()
   }


# 9月5日

# mockjs  使用方法
 定义一个js 文件  npm install mockjs 
 1. 引入 import Mock from 'mockjs'
 2. 写数据
 3. 抛出数据  
 export default {
   mockData
 }

# 组件 ： 
 1. 定义组件  一个.vue文件就是一个组件  组件划分目录要合理 如果是高度复用的组件，放在components 里面， 如果不是 放在pages中 (views)
 2. 引用组件： improt DialogComponent from './' 哪个页面需要就在哪儿引用组件
 3. 注册组件：
    components: { 
      DialogComponent
    } 

 4. 使用组件：
   <DialogComponent />  

 5. 通过父组件传第给子组件的消息

    如果是ajax请求过来的数据，在子组件中必须使用watch监听才能得到
    watch: {
      contentList(v, old) {

      }
    }

  6. 通过子组件传第给父组件消息：
    触发：一个事件
    this.$emit(‘父组件上定义的事件’, 要传给父组件的消息)
    父组件如何使用：
    methods: {
      parentFn (val) {
        console.log(val)
      }
    }

   7. 兄弟组件：如何传值。 找共同的爹 vue