<template>
  <div class="tab-box">
    <span @click="bindEventTab(index)" v-for="(item, index) in tabData" :key="index">{{ item }}</span>
  </div>
</template>
<script>
export default {
  name: "TabComponent",
  data() {
    return {
      tabData: ["正在上映", "即将上映"]
    };
  },
  methods: {
    bindEventTab(index) {
      console.log(index, 'index')
    }
  },
};
</script>
<style >
.tab-box {
  width: 100%;
  height: 40px;
  display: flex;
}
.tab-box  span {
    flex: 1;
    font-size: 20px;
    border:1px solid black;
    display: flex;
    justify-content: center;
   align-items: center;
  }
</style>