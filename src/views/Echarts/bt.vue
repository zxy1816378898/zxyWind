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

var trafficWay = [
  {
    name: "正常",
    value: 14294,
  },
  {
    name: "报警",
    value: 314,
  },
  {
    name: "离线",
    value: 5137,
  },
  {
    name: "故障",
    value: 245,
  },
];

var data = [];
var color = [
  "#00ffff",
  "#409B5C",
  "#006ced",
  "#ffe000",
  "#ffa800",
  "#ff5b00",
  "#ff3000",
];
for (var i = 0; i < trafficWay.length; i++) {
  data.push(
    {
      value: trafficWay[i].value,
      name: trafficWay[i].name,
      itemStyle: {
        normal: {
          borderWidth: 5,
          shadowBlur: 20,
          borderColor: color[i],
          shadowColor: color[i],
        },
      },
    },
    {
      value: 2,
      name: "",
      itemStyle: {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          color: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0,
        },
      },
    }
  );
}
var seriesOption = [
  {
    name: "",
    type: "pie",
    clockWise: false,
    radius: [105, 109],
    hoverAnimation: false,
    itemStyle: {
      normal: {
        label: {
          show: true,
          position: "outside",
          color: "#ddd",
          formatter: function (params) {
            var percent = 0;
            var total = 0;
            for (var i = 0; i < trafficWay.length; i++) {
              total += trafficWay[i].value;
            }
            percent = ((params.value / total) * 100).toFixed(0);
            if (params.name !== "") {
              return (
                "设备状态：" +
                params.name +
                "\n" +
                "\n" +
                "占百分比：" +
                percent +
                "%"
              );
            } else {
              return "";
            }
          },
        },
        labelLine: {
          length: 30,
          length2: 100,
          show: true,
          color: "#00ffff",
        },
      },
    },
    data: data,
  },
];

const options = computed(() => {
  return {
    color: color,
    title: {
      text: "设备状态",
      subtext: "500个",
      top: "48%",
      textAlign: "center",
      left: "49%",
      textStyle: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "400",
      },
      subtextStyle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "normal",
        align: "center",
      },
    },
    graphic: {
      elements: [
        {
          type: "image",
          z: 3,
          style: {
           
            width: 178,
            height: 178,
          },
          left: "center",
          top: "center",
          position: [100, 100],
        },
      ],
    },
    tooltip: {
      show: false,
    },
    legend: {
      icon: "circle",
      orient: "horizontal",
      // x: 'left',
      data: ["正常", "报警", "离线", "故障"],
      right: 320,
      bottom: 120,
      align: "right",
      textStyle: {
        color: "#fff",
      },
      itemGap: 20,
    },
    toolbox: {
      show: false,
    },
    series: seriesOption,
  };
});
</script>

<style lang="scss" scoped></style>
