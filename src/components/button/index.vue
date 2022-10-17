<template>
  <div class="button" @click="goDetail()">
    <img :src="getImage('ht')" class="ht" />
  </div>
</template>

<script setup>
const router = useRouter();
function getImage(name) {
  //动态引入图片
  return new URL(`../../assets/images/echarts/${name}.png`, import.meta.url)
    .href;
}
const goDetail = (e) => {
  router.push({
    path: `/Home`,
  });
};
</script>

<style lang="scss" scoped>
.button {
  position: absolute;
  top: 10px;
  z-index: 999;
  cursor: pointer;
  margin: 0 25px;
  .ht {
    width: 100px;
    height: 100px;
  }
}
</style>
