<template>
  <div>
    <h1 style="height:3000px;background:#eee;">home</h1>
  </div>
</template>
<script>
export default {
  props: ['bookList'],
  created() {
    console.log(this.bookList, 'list')
  },
}
</script>