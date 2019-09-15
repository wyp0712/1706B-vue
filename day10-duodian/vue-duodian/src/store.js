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
      list.count++
      state.cartData.push(list)
      state.cartData = [...new Set(state.cartData)]
    },
    removeFn(state, list) {
      list.count--
      state.cartData.push(list)
      state.cartData = [...new Set(state.cartData)]
    }
  },
  actions: { // 提交异步代码的地方
  }
})
