<template>
  <div class="dialog-container">
    <div class="mask" @click="bindMaskClick"></div>
    <div class="tip">
     <span v-for="(item, index) in checkList" :key="index"> <input type="checkbox" v-model="item.state" @click="checkItemClick(item)"> {{ item.title }} </span>
    <hr>
     <button @click="closeMaskEvent" class="closeMask"> X </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['maskMsg', 'contentList', 'checkList'],
  name: 'DialogComponent',
  data () {
    return {
      message: '我是子组件的信息',
      list: [
        {
          title: '产品1',
          state: false
        },
        {
          title: '产品1',
          state: false
        },
        {
          title: '产品1',
          state: false
        },
        {
          title: '产品1',
          state: false
        }
      ]
    }
  },
  watch: {
    contentList (v) {
    }
  },
  created () {
    this.$axios.get('/getMovieList', (res) => {
      console.log(res, '----------------1')
    })
  },
  methods: {
    closeMaskEvent () {
      this.$emit('closeMaskEvent', '蒙牛关闭了')
    },
    bindMaskClick () {
      this.$emit('clickMask', this.message)
    },
    checkItemClick (item) {
      item.state = true
      console.log(this.checkList, 'checkList-----mask')
      this.$emit('clickCheckMask', this.checkList)
    }
  }
}
</script>
<style lang="scss">
.closeMask {
  width: 200px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 25px;
}
.inputCheck {
  width: 20px;
  height: 20px;
  display: inline-block;
}
  .dialog-container {
    width: 100%;
    height: 100%;
    position: fixed;
    left:0;
    top:0;
    .mask {
     width: 100%;
     height: 100%;
     background: #000;
     opacity: .8;
    }
    .tip {
      width: 80%;
      height:60%;
      background: #eee;
      position: absolute;
      left:50%;
      top:50%;
      transform: translate(-50%, -50%);
      span {
        width: 45%;
        height: 35px;
        border:1px solid black;
        display: inline-block;
      }
    }
  }
</style>
