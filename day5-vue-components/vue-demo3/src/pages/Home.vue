<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <select v-model="proData" name="" id="">
      <option :value="item" v-for="(item, index) in proArr" :key="index">{{item}}</option>
    </select>

    <select v-model="cityData" name="" id="">
      <option :value="item" v-for="(item, index) in cityArr" :key="index">{{item}}</option>
    </select>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      proData: '山西省',
      cityData: '晋城市',
      proArr: [],
      cityArr: [],
      list: [
        {
          province: '山西省',
          city: ['晋城市', '太原市', '长治市', '大同市']
        },
        {
          province: '河北省',
          city: ['邯郸市', '石家庄', '保定市', '雄安']
        }
      ]
    }
  },
  components: {
  },
  created () {
    this.list.map(item => {
      this.proArr.push(item.province)
    })
  },
  watch: {
    proData () {
      this.updatePro()
    }
  },
  mounted () {
    this.updatePro()
  },
  methods: {
    updatePro () {
      this.list.map((item, ind) => {
        if (this.proData === item.province) {
          this.cityArr = item.city
          this.cityData = this.list[ind].city[0]
        }
      })
    }
  }
}
</script>
