<template>
  <div class="book-detail">
    <SubHeaderComponent  :titleList="titleList"  />
     detail
  </div>
</template>
<script>
import SubHeaderComponent from '../SubHeaderBar/index'
export default {
  name: 'bookDetail',
  data() {
    return {
      titleList: {
          lable: '本书详情',
          rightTitle: '书架' 
        }
    }
  },
  components: {
    SubHeaderComponent
  }
}
</script>
<style lang="scss">
  
</style>