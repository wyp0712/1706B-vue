<template>
  <div class="project-wrap">
    <h1>This is an about page</h1>

    <ProjectBar class="bar"></ProjectBar>

    <router-view class="take-part"></router-view>
  </div>
</template>
<script>
import ProjectBar from '../components/Projectbar/index'
export default {
  components: {
    ProjectBar
  }
}
</script>
