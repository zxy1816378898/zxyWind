<template>
  <div class="gzmh">
    <!-- :chartData="chartdata" 传递数据，将数据从页面中传到 echarts 中 -->
    <chartGqxjgfx :chartData="chartdata"></chartGqxjgfx>
  </div>

</template>

<script setup>
import chartGqxjgfx from "./comps/chart-Gqxjgfx.vue";

import { getJgBytype } from "@/api/histogram";
const gdqjgfxValue = ref(1);
const chartdata = ref([]);
// 页面初始化
onMounted(() => {
  getJgBytype1();
});
const getJgBytype1 = () => {
  getJgBytype({ type: gdqjgfxValue.value }).then((response) => {
    console.log(response); // 打印一下 看有没有拿到数据
    // 将数据赋值给echarts中的chartdata
    chartdata.value = response.data;
  });
};
</script>

<style lang="scss" scoped>
.gzmh {
  width: 50%;
  height: 50%;
  padding: 18px 30px 72px 30px;
  box-sizing: border-box;
  position: relative;
  display: flex;
}
</style>
