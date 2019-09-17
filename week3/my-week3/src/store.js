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
        }
      } else {
        state.attentionList.splice(index, 1)
      }
    },
    removeAttentionFn(state, {item, index}) {
      // item.state = !item.state
      if (localStorage.attentionList) {
        const arr = JSON.parse(localStorage.getItem('attentionList'))
        // const goods = arr.find(v => v.name === item.name)
        arr.forEach(v => {
          if (v.name === item.name) {
            console.log(v.name, 'v.name')
            v.state = true
          }
        })
        localStorage.setItem('attentionList', JSON.stringify(arr))
      }
      state.attentionList.splice(index, 1)
    }
  },
  actions: {

  }
})

store.subscribe((mutations,state)=>{
  localStorage.setItem('collect',JSON.stringify(state.attentionList))
})

export default store
