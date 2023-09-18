<template>
  <div class="main-box">
    <!-- 地图 -->
    <div id="container"></div>
    <!-- 回退按钮 -->
    <htbutt></htbutt>
  </div>
</template>

<script setup>
import htbutt from '@/components/button';
</script>

<style lang="scss" scoped>
.main-box {
  width: 100%;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100vh;
}

#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
}
</style>
