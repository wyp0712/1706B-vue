import './assets/lib/flexible.js'
import './assets/lib/swiper.css';
import './assets/lib/swiper.js';
import './assets/iconfont/iconfont.css'


import Swiper from 'swiper'
import Axios from 'axios';

new Swiper('.swiper-container', {})

const SwiperWrapper = document.querySelector('.swiper-wrapper')

Axios('/getCarouselList').then(res => {
  console.log(res.data.list)
  SwiperWrapper.innerHTML = res.data.list.map((item, index) => {
    return `<div class="swiper-slide"> <img src=${item.img}> </div>`
  }).join('')
})