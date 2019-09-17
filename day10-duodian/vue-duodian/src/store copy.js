import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  // 数据仓库 具有双向数据绑定的功能  data
    cartData: []
  },
  getters: { // vuex中计算属性
  },
  mutations: {  // 提交同步代码的地方
    addFn(state, list) { // 第一个参数是仓库中的数据 第二个参数是接收组件传输过来的消息
      if (list.count >= 15) return
      list.count ++;

      var flag = state.cartData.some(item=>{
          return item.name===list.name
      });

      if(flag){
        state.cartData.forEach(item => {
          if (item.name ===list.name) {
            item.count = list.count
          } 
        })
      }else{
        state.cartData.push(list);  
      }
      
      window.localStorage.setItem('cartItem', JSON.stringify([...new Set(state.cartData)]))
      state.cartData = [...new Set(state.cartData)]
    },
    removeFn(state, list) {
      if (list.count <= 0) return
      list.count--
      state.cartData.push(list)
      window.localStorage.setItem('cartItem', JSON.stringify([...new Set(state.cartData)]))
      state.cartData = [...new Set(state.cartData)]

    }
  },
  actions: { // 提交异步代码的地方
  }
})
