<template>
  <div class="app-header">
     <h1>hello world</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {

  },
  created () { // ajax
    console.log(this.$axios, 'headerbar.vue')
  },
  mounted () {

  },
  computed: {

  },
  watch: {

  }
}
</script>
