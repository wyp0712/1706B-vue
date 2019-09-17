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
    toCart (state, item) {
      let goods = state.cartData.find(v => v.name === item.name)
      if (goods) {
        goods.count+=1
      } else {
        state.cartData.push({
          name: item.name,
          count: 1
        })
      }
    },
    addCart(state, index) {
      state.cartData[index].count ++
    },
    removeCart(state, index) {
      if (state.cartData[index].count >=1) {
        state.cartData[index].count --
      } else {
        if(window.confirm('确定从购物车移除商品吗？')){
          state.cartData.splice(index,1)
        }
      }
    }
  },
  actions: { // 提交异步代码的地方
  }
})
