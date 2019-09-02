import Vue from 'vue';
import App from './app.vue'
// import Bg from './assets/img/a.png'
// import './assets/style/test.css'
// import './assets/style/style.styl'

import axios from 'axios'
import './assets/style/reset.scss'
import './assets/lib/flexible.js'
console.log(process.env.NODE_ENV, 'process.env.NODE_ENV------------------------')
Vue.prototype.$axios = axios;

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)