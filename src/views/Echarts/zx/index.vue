<template>
  <BaseEchart
    style="width: 100%"
    :options="options"
    ref="childRef"
  ></BaseEchart>
  <htbutt></htbutt>
</template>

<script setup>
import htbutt from "@/components/button";
import { BaseEchart, echarts } from "@/components/echart";
const props = defineProps({
  chartData: {
    type: [Array, Object, String, Number],
  },
});

const childRef = ref(null);
// 统计百分比
var data1 = [14, 15, 65, 24, 75, 23, 24, 43, 27, 72, 12, 53];
var data2 = [45, 65, 24, 74, 75, 23, 42, 54, 13, 32, 52, 13];
var json = {
  chart0: {
    xcategory: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    low: data1,
    lowLine: [],
  },
};
var json2 = {
  chart0: {
    xcategory: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    low: data2,
    lowLine: [],
  },
};
var datacoords = [
  {
    coords: [],
  },
];
var datacoords2 = [
  {
    coords: [],
  },
];
for (var i = 0; i < json.chart0.xcategory.length; i++) {
  datacoords[0].coords.push([json.chart0.xcategory[i], data1[i]]);
}
for (var i = 0; i < json.chart0.xcategory.length; i++) {
  datacoords2[0].coords.push([json2.chart0.xcategory[i], data2[i]]);
}

const options = computed(() => {
  return {
    backgroundColor: "rgb(0 0 0 / 25%)",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#15ecf4",
        },
      },
      backgroundColor: "rgba(0,0,0,.8)",
      extraCssText: "box-shadow: 4px 4px 10px rgba(21, 250, 255,.6);",
      formatter: function (params) {
        var result = params[0].name + "<br>";
        params.forEach(function (item) {
          result +=
            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
            item.color +
            '"></span>';
          // 判断设置增长还是降低
          if (parseFloat(item.data) >= 50) {
            result +=
              item.seriesName +
              ": " +
              '<span class="growth">增长' +
              item.data +
              "%</span><br>";
          } else if (parseFloat(item.data) < 50) {
            result +=
              item.seriesName +
              ": " +
              '<span class="reduce">降低' +
              item.data +
              "%</span><br>";
          }
        });
        return result;
      },
    },
    legend: {
      data: ["同比", "环比"],
      textStyle: {
        fontSize: 12,
        color: "rgb(0,253,255,0.6)",
      },
      top: "5%",
      right: "5%",
    },
    grid: {
      bottom: 150,
      left: 270,
      right: 250,
      top:150
    },
    xAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#15faff",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
      },
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
    },
    yAxis: {
      max: 100,
      splitNumber: 4,
      interval: 25,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#4b4d64",
        },
      },
      axisLabel: {
        formatter: "{value} %",
        textStyle: {
          //改变刻度字体样式
          color: "#ffffff",
        },
      },
    },
    series: [
      {
        name: "环比",
        type: "line",
        // smooth: true,
        symbol: "none",
        symbolSize: 10,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(255, 204,1, .9)",
                },
                {
                  offset: 0.8,
                  color: "rgba(6, 8, 41,.1)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
            shadowBlur: 10,
          },
        },
        itemStyle: {
          normal: {
            color: "#ffcb00",
          },
        },
        data: data1,
      },
      {
        name: "环比",
        type: "lines",
        coordinateSystem: "cartesian2d",
        zlevel: 1,
        polyline: true,
        smooth: true,
        symbol: "circle",
        effect: {
          show: true,
          trailLength: 0.4,
          symbol: "circle",
          period: 8, //光点滑动速度
          symbolSize: 8,
        },
        lineStyle: {
          normal: {
            color: "#ffcb00",
            width: 0,
            opacity: 0,
            curveness: 0,
          },
        },
        data: datacoords,
      },
      {
        name: "同比",
        type: "line",
        // smooth: true,
        symbol: "none",
        symbolSize: 10,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(21, 250, 255,.9)",
                },
                {
                  offset: 0.8,
                  color: "rgba(6, 8, 41,.1)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
            shadowBlur: 10,
          },
        },
        itemStyle: {
          normal: {
            color: "#15faff",
          },
        },
        data: data2,
      },
      {
        name: "同比",
        type: "lines",
        coordinateSystem: "cartesian2d",
        zlevel: 1,
        smooth: true,
        polyline: true,
        symbol: "circle",
        effect: {
          show: true,
          trailLength: 0.4,
          symbol: "circle",
          period: 8, //光点滑动速度
          symbolSize: 8,
        },
        lineStyle: {
          normal: {
            color: "#15faff",
            width: 0,
            opacity: 0,
            curveness: 0,
          },
        },
        data: datacoords2,
      },
    ],
  };
});
</script>

<style lang="scss" scoped></style>
