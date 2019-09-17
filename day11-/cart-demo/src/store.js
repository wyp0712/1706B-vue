import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartarr: JSON.parse(localStorage.getItem('goodsItem')) || []  
  },
  mutations: {
    toCart(state, item) {
     let goods = state.cartarr.find(v => v.label === item.label)
     if (goods) {
       goods.count += 1
     } else {
      state.cartarr.push({
        count: 1,
        label: item.label,
        image: item.image, 
      })
     }
    },
    addGoods(state, index) {
      state.cartarr[index].count++
    },
    removeGoods(state, index) {
      if (state.cartarr[index].count >1) {
        state.cartarr[index].count--
      } else {
        if (window.confirm('确定删除吗')) {
          state.cartarr.splice(index, 1)
        }
      }
    }
  },
  // vuex 计算属性
  getters: {
    totalNum (state) {
       let num = 0;
       state.cartarr.forEach(item => {
         num += item.count
       })
       return num
    }
  },
  actions: {

  }
})

// 监听每次调用mutations的时候,都会进这个方法，然后我们可以做一些自己想做的处理
store.subscribe((mutations, state) => {
  localStorage.setItem('goodsItem',JSON.stringify(state.cartarr))
})


export default store
