<template>
  <div
    ref="wordcloudRef"
    class="wordcloud"
    :style="{ width: width, height: height }"
  ></div>
</template>

<script setup>
import useEchart from '../hooks/useEchart';
import 'echarts-wordcloud/dist/echarts-wordcloud';
import 'echarts-wordcloud/dist/echarts-wordcloud.min';

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

const wordcloudRef = ref();
const chartDom = ref();

onMounted(() => {
  const { setOptions, echartsInstance } = useEchart(wordcloudRef.value);
  watchEffect(() => {
    setOptions(props.options);
  });

  chartDom.value = echartsInstance;
});

defineExpose({ chartDom });
</script>

<style lang="scss" scoped></style>
