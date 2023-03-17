<template>
  <div class="main">
    <!-- 随机图片 -->
    <img class="main-bg-img" :src="getImage(`background${randomNum}`)">
    <Main></Main>
  </div>
</template>

<script setup>
import Main from "./main";
// 生成随机数
let randomNum = Math.ceil(Math.random() * 8)
function getImage(name) {
  //动态引入图片
  return new URL(`../assets/images/${name}.webp`, import.meta.url).href;
}
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
