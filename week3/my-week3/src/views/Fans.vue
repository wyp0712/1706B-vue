<template>
  <div class="fans-wrap">
      <AttentionBar />

      <router-view></router-view>

  </div>
</template>
<script>
import AttentionBar from '../components/AttentionBar/index'
export default {
  components: {
    AttentionBar
  }
}
</script>