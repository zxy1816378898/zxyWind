<template>
  <div class="button" @click="goDetail()">
    <span class="iconfont icon-huitui ht"></span>
  </div>
</template>

<script setup>
const router = useRouter();

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
    font-size: 60px;
    color: aliceblue;
  }
}
</style>
