<template>
  <div class="dialog-container">
    <div class="mask" @click="bindMaskClick"></div>
    <div class="tip">
       <template>
          <p class="items" v-for="(item, index) in list" :key="index">
            <input type="checkbox"> {{ item.title }}
          </p>
       </template>

      <template>
        <span @click="bindMaskClick" v-for="(item, index) in maskMsg" :key="index"> {{item}}</span>
      </template>

    </div>
  </div>
</template>
<script>
export default {
  props: ['maskMsg', 'contentList'],
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
      console.log(v, 'v-------------dailog')
    }
  },
  created () {
    console.log(this.maskMsg, 'this.maskMsg')
  },
  methods: {
    bindMaskClick () {
      this.$emit('clickMask', this.message)
    }
  }
}
</script>
<style lang="scss">
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
