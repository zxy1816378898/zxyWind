<template>
  <div class="main">
    <img class="main-bg-img" src="https:api.vvhan.com/api/view" alt="" />
    <Main></Main>
  </div>
</template>

<script setup>
import Main from "./main";
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.main-bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
