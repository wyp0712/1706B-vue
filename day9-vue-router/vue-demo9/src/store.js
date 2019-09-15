import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      cartList: []
    },
    mutations: {
      addFn (state, list) {
         console.log(list, 'strot=====list')
         list.count ++
         state.cartList.push(list)
      },
      removeFn () {

      }
    },
    actions: {
    }
})
