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
const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x - 9, shape.y - 9];
    const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
    ctx
      .moveTo(c0[0], c0[1])
      .lineTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .closePath();
  },
});
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + 60, xAxisPoint[1] - 30];
    const c4 = [shape.x + 60, shape.y - 30];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x, shape.y];
    const c2 = [shape.x + 60, shape.y - 30];
    const c3 = [shape.x + 50, shape.y - 38];
    const c4 = [shape.x - 9, shape.y - 9];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});
echarts.graphic.registerShape("CubeLeft", CubeLeft);
echarts.graphic.registerShape("CubeRight", CubeRight);
echarts.graphic.registerShape("CubeTop", CubeTop);
const VALUE = [4100, 3129, 2209, 3786, 5671];
const options = computed(() => {
  return {
    backgroundColor: "rgb(0 0 0 / 25%)",
    title: {
      text: "",
      top: 32,
      left: 18,
      textStyle: {
        color: "#00F6FF",
        fontSize: 24,
      },
    },
    grid: {
      left: "8%",
      right: "8%",
      bottom: "8%",
      top: "8%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["2018年", "2019年", "2020年", "2021年", "2022年"],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#fff",
        },
      },
      offset: 0,
      axisTick: {
        show: false,
        // length: 9,
        alignWithLabel: false,
        lineStyle: {
          color: "#fff",
        },
      },
      axisLabel: {
        fontSize: 16,
        padding: [0, 0, 0, 30],
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
        lineStyle: {
          color: "#fff",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "solid",
          color: "#113d5e",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 16,
      },
      boundaryGap: ["20%", "20%"],
    },
    series: [
      // {
      //   type: "custom",
      //   renderItem: function (params, api) {
      //     const location = api.coord([api.value(0), api.value(1)]);
      //     return {
      //       type: "group",
      //       children: [
      //         {
      //           type: "CubeLeft",
      //           shape: {
      //             api,
      //             xValue: api.value(0),
      //             yValue: api.value(1),
      //             x: location[0],
      //             y: location[1],
      //             xAxisPoint: api.coord([api.value(0), 0]),
      //           },
      //           style: {
      //             fill: "rgba(7,29,97,.6)",
      //           },
      //         },
      //         {
      //           type: "CubeRight",
      //           shape: {
      //             api,
      //             xValue: api.value(0),
      //             yValue: api.value(1),
      //             x: location[0],
      //             y: location[1],
      //             xAxisPoint: api.coord([api.value(0), 0]),
      //           },
      //           style: {
      //             fill: "rgba(10,35,108,.7)",
      //           },
      //         },
      //         {
      //           type: "CubeTop",
      //           shape: {
      //             api,
      //             xValue: api.value(0),
      //             yValue: api.value(1),
      //             x: location[0],
      //             y: location[1],
      //             xAxisPoint: api.coord([api.value(0), 0]),
      //           },
      //           style: {
      //             fill: "rgba(11,42,106,.8)",
      //           },
      //         },
      //       ],
      //     };
      //   },
      //   data: MAX,
      // },
      {
        type: "custom",
        renderItem: (params, api) => {
          const location = api.coord([api.value(0), api.value(1)]);
          return {
            type: "group",
            children: [
              {
                type: "CubeLeft",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#0072FF",
                    },
                    {
                      offset: 1,
                      color: "#15C0FF",
                    },
                  ]),
                },
              },
              {
                type: "CubeRight",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#5301EA",
                    },
                    {
                      offset: 1,
                      color: "#00C0FA",
                    },
                  ]),
                },
              },
              {
                type: "CubeTop",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#3B80E2",
                    },
                    {
                      offset: 1,
                      color: "#49BEE5",
                    },
                  ]),
                },
              },
            ],
          };
        },
        data: VALUE,
      },
      {
        type: "bar",
        label: {
          normal: {
            show: true,
            position: "top",
            fontSize: 16,
            color: "#fff",
            offset: [20, -30],
          },
        },
        itemStyle: {
          color: "transparent",
        },
        tooltip: {},
        data: VALUE,
      },
    ],
  };
});
</script>

<style lang="scss" scoped></style>
