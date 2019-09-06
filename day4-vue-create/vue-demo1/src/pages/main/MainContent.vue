<template>
  <div class="main">
    <div class="content">
      <!-- <div class="sec">1</div>
      <div class="sec">2</div>
      <div class="sec">3</div>
      <div class="sec">4</div>
      <div class="sec">5</div>
      <div class="sec">6</div>
      <div class="sec">7</div>
      <div class="sec">8</div>
      <div class="sec">9</div>
      <div class="sec">10</div>-->
      <div id="example">
        <select v-model="prov">
          <option :key="ind" v-for="(option, ind) in proArr" :value="option">{{ option }}</option>
        </select>
        <select v-model="city">
          <option :key="ind" v-for="(option, ind) in cityArr" :value="option">{{ option }}</option>
        </select>
        <select v-model="district" v-if="district">
          <option :key="ind" v-for="(option, ind) in districtArr" :value="option">{{ option }}</option>
        </select>
      </div>

      <nav class="app-nav">
        <span @click="bindEvent(item, index)" :class="{active: item.state}" v-for="(item, index) in tabList" :key="index">{{ item.name }}</span>
      </nav>
      <ul>
        <template v-if="!movieArr.length">
            <li  v-for="(item, index) in tabContentList" :key="index">{{item.nm}}</li>
        </template>
        <template v-else>
          <li v-for="(item, index) in movieArr" :key="index">{{item.nm}}</li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabContentList: [],
      tabList: [
        {
          name: 'list1',
          state: true
        },
        {
          name: 'list1',
          state: false
        }
      ],
      tabIndex: 0,
      prov: '山西省',
      city: '晋城市',
      district: '东城区',
      cityList: [
        {
          province: '山西省',
          city: ['晋城市', '陵川县', '城区', '高平市']
        },
        {
          province: '河北省',
          city: ['邯郸市', '保定市', '三峡', 'qieu']
        }
      ],
      proArr: [],
      cityArr: [],
      districtArr: [],
      index: 0,
      movieArr: []
    };
  },
  watch: {
    prov() {
      this.bindProEvent();
    },
    cityArr() {
    }
  },
  created() {
    this.getData()
    this.cityList.forEach(item => {
      this.proArr.push(item.province);
    })
  },
  mounted() {
    this.bindProEvent();
  },
  methods: {
    getData(fn) {
      this.$axios.get('/getMovieList').then(res => {
        console.log(res, 'res')
        this.tabContentList = res.data.list.movieList
      })
    },
    bindEvent(item, index) {
      this.tabList[this.tabIndex].state = false;
      item.state = true
      this.tabIndex = index;
      this.movieArr = []
      // this.tabContentList.map(item => {
      //   if (item.globalReleased && index == 0) {
      //     this.movieArr.push(item)
      //   } else if (!item.globalReleased && index == 1) {
      //     this.movieArr.push(item)
      //   }
      // })
      this.movieArr = this.tabContentList.filter(item => {
        if (item.globalReleased && index == 0) {
          return item
        } else if (!item.globalReleased && index == 1) {
          return item
        }
      })
    },
    bindProEvent() {
      this.cityList.map((item, ind) => {
        if (this.prov === item.province) {
          this.cityArr = item.city;
          this.city = this.cityList[ind].city[0]
        }
      })
    }
  }
};
</script>
<style lang="scss">
.main {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  .sec {
    width: 90%;
    height: 150px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 5px auto;
    text-align: center;
    line-height: 150px;
    font-size: 50px;
  }
}
.active {
  background: red;
}
.app-nav {
  width: 100%;
  border:1px solid black;
  height: 40px;
  display: flex;
  span {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
