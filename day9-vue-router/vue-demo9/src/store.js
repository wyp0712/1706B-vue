import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
      getAjaxData(state, list) {
        state.cartList = list;
      },
      decrease(state, cartId) {
        let arr = state.cartList.filter(item => {
          // return item.skuId == cartId
          if (item.skuId == cartId) {
            item.count++
            item.isCart = true
            return item
          }
        })
      },
      increment (state, cartId) {

      }
    },
    actions: {
      getAjaxData({commit}, list) {
        axios('/api/list').then(res => {
          let cartData = []
          cartData = res.data.list.data.skuInfo
          cartData.forEach(item => {
            item.count = 0
            item.isCart = false
          })
          // console.log(cartData, 'cart-------data')
          commit('getAjaxData', cartData)
        })
      },
      decrease({commit}, cartId) {
        commit('decrease', cartId)
      },
      increment () {

      }
    }
})
