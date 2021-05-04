<template>
  <div class="viewsize">
    <ToolBar class="sticky-top shadow"></ToolBar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "./ToolBar";
export default {
  name: "Home",
  components: {ToolBar}
}
</script>

<style scoped>
.viewsize{
  min-width: 260px;
  min-height: 100vh;
}
</style>
