<template>

</template>

<script setup>

function getImage(name) {
  //动态引入图片
  return new URL(`../../assets/images/music/${name}.png`, import.meta.url).href;
}

</script>
<style lang="scss" scoped>

</style>
