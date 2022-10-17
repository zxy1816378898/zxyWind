<template>
  <div class="base-echart" :style="{ width: width, height: height }">
    <div ref="echartDivRef" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script setup>
import useEchart from '../hooks/useEchart';

const props = defineProps({
  options: {
    type: [Object],
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
});

const echartDivRef = ref();
const chartDom = ref();

onMounted(() => {
  const { setOptions, echartsInstance } = useEchart(echartDivRef.value);
  watchEffect(() => {
    setOptions(props.options);
  });

  chartDom.value = echartsInstance;
});

defineExpose({ chartDom });
</script>

<style lang="scss" scoped></style>
