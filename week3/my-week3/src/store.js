import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    attentionList: JSON.parse(window.localStorage.getItem('collect')) || []
  },
  mutations: {
    attentFn(state, {item, index}) {
      if (!item.state) {
        const goods = state.attentionList.find(v => v.name == item.name)
        if (!goods) {
          state.attentionList.push(item)
          localStorage.setItem('collect',JSON.stringify(state.attentionList))
        }
      } else {
        state.attentionList.splice(index, 1)
        localStorage.setItem('collect',JSON.stringify(state.attentionList))
      }
    },
    removeAttentionFn(state, {item, index}) {
      if (localStorage.attentionList) {
        const arr = JSON.parse(localStorage.getItem('attentionList'))
        arr.forEach(v => {
          if (v.name === item.name) {
            v.state = true
          }
        })
        localStorage.setItem('attentionList', JSON.stringify(arr))
      }
      state.attentionList.splice(index, 1)
      localStorage.setItem('collect',JSON.stringify(state.attentionList))
    }
  },
  actions: {

  }
})

// store.subscribe((mutation, state)=>{
//   console.log(mutation, 'mutaion')
//   localStorage.setItem('collect',JSON.stringify(state.attentionList))
// })

export default store
