<template>
  <BaseEchart
    style="width: 100%"
    :options="options"
    ref="childRef"
  ></BaseEchart>
</template>

<script setup>
import { BaseEchart, echarts } from "@/components/echart";
const props = defineProps({
  chartData: {
    type: [Array, Object, String, Number],
  },
});

const childRef = ref(null);
// 将数据拆分，地区归地区 数值归数值
const areaData = ref([]);
const chartData = ref([]);

watch(
  () => props.chartData, // 监听的数据
  (val) => {
    areaData.value = []; // 清空 数组 内 可能存在的数值
    chartData.value = [];
    val.forEach((item) => {
      areaData.value.push(item.areaName); // 将拿到的数据 赋值给 echarts中对应的位置
      chartData.value.push(item.count);
    });
  },
  { immediate: true }
);

const options = computed(() => {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: "rgba(9, 24, 48, 0.5)",
      borderColor: "rgba(75, 253, 238, 0.4)",
      textStyle: {
        color: "#CFE3FC",
      },
      borderWidth: 1,
    },
    grid: {
      top: "25%",
      right: "10%",
      left: "15%",
      bottom: "15%",
    },
    xAxis: [
      {
        name: "",
        type: "category",
        data: areaData.value,
        axisLine: {
          lineStyle: {
            color: "#2681FF",
          },
        },
        axisLabel: {
          show: true,

          interval: 0,
          formatter: function (params) {
            var newParamsName = "";
            var paramsNameNumber = params.length;
            var provideNumber = 5;
            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
            if (paramsNameNumber > provideNumber) {
              for (var p = 0; p < rowNumber; p++) {
                var tempStr = "";
                var start = p * provideNumber;
                var end = start + provideNumber;
                if (p == rowNumber - 1) {
                  tempStr = params.substring(start, paramsNameNumber);
                } else {
                  tempStr = params.substring(start, end) + "\n";
                }
                newParamsName += tempStr;
              }
            } else {
              newParamsName = params;
            }
            return newParamsName;
          },
          color: "#e2e9ff",
          textStyle: {
            fontSize: 18,
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        minInterval: 1,
        splitArea: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.15)",
            // type: 'dashed', // dotted 虚线
          },
        },
        axisLabel: {
          fontSize: 18,
          color: "#e2e9ff",
          fontFamily: "Bebas",
        },
      },
    ],
    series: [
      {
        type: "bar",
        data: chartData.value,
        markLine: {
          symbol: ["none", "none"],
          itemStyle: {
            normal: {
              lineStyle: {
                type: "dotted",
                color: "#FFFC00",
              },
              label: {
                show: true,
                fontSize: 18,
                color: "#FFFC00",
                fontStyle: "normal",
                lineHeight: "30",
                position: "insideEndTop",
              },
            },
          },
        },
        barWidth: "20%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "#4FACFE", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#38F8D4", // 100% 处的颜色
                },
              ],
              false
            ),
            shadowColor: "rgba(0,160,221,1)",
            shadowBlur: 4,

            barBorderRadius: [25, 25, 25, 25], // （顺时针左上，右上，右下，左下）
          },
        },
        label: {
          normal: {
            show: true,
            lineHeight: 10,
            formatter: "{c} ",
            position: "top",
            textStyle: {
              color: "#fff",
              fontSize: 18,
            },
          },
        },
      },
    ],
  };
});
</script>

<style lang="scss" scoped></style>
