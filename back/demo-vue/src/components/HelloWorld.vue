<template>
  <div class="hello-wrap">
      {{msg}}
      <img src="../assets/img/android-chrome-512x512.png">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'hello world'
    }
  }
}
</script>