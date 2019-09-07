# vue-demo5

views / pages 
下面放置主路由文件（主要的组件）

components: 子组件


组件传值:
  父组件:  
  1. 先引入子组件
  import  Mask from './componets/mask.vue'  
  2. 注册组件 
  components: {
    Mask
  }
  3. 使用组件
   <Mask @childClick= "parentFn" :message="message" />

  父子传值：
   1. 父组件
    <Mask :message="message" />
   data: {
     return {
       message: []
     }
   } 

   2. 子组件中
   export default {
     props: ['message'],
     data () {
       return  {
         list: []
       }
     },
     watch: {
       message(v) {
         console.log(v, 'v')
         this.list = v
       }
     },
     created () {
       this.list = this.message
     }
   }


   子父传值:
   1. 
      <button @click="bindEvent"></button>

      methods: {
        bindEvent() {
          // 通过$emit触发绑定在父组件中的自定义事件
          this.$emit('childClick', msg)  // msg就是子传给父的消息
        }
      }
      在父组件中：
      <Mask @childClick= "parentFn" :message="message" />

      created () {
        this.parentFn() 
      },
      methods: {
        parentFn (v) {
          console.log(v)
        }
      }  

 

 EventBus:重点


  3. 动态组件：    渲染区域，原先渲染内容，现在渲染组件

     先引入需要渲染的不同的组件名称并且注册
     import  MarLeft from 'marleft'
     import  MarRight from 'maright'

     components: {
        MarLeft,
        MarRight
     }
    
    <span v-for="item in list">{{item.title}}</span>
    
      <component :childMsgMovie="childMsgMovie" :is="componentId"></component>
    
   componentId :组件名字： 渲染成谁，那这块就渲染哪个组件

   data () {
     return {
       currentComponent: 'tab1',
       tabIndex: 0,
       list: [
         {
           name: 'tab1',  // 组件名字
           tile: "组件1“,
           state: false
         },
         {
           name: 'tab2',
           tile: "组件2“
           state: false
         }
       ],
       childMsgMovie: []
     }
   },
   computed: {
     componentId () {
       return `${currentComponent}`
     }
   },
   methods: {
     tabEvent(item, index) {
       // 切换组件名称
       this.currentComponent = item.name

       this.list[this.tabIndex].state = false
       item.state = true;
       this.tabIndex = index 

       this.childMsgMovie = []
       this.childMsgMovie = this.movieList.filter(item => {
         if (item.state  && index == 0) {
           return item
         } else (!item.state  && index == 1) {
           return item
         }
       })
     }
   }

 