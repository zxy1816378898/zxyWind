<template>
  <htbutt></htbutt>
  <div class="main">
    <el-button type="primary" id="backButton">回退</el-button>
    <div class="map" ref="chart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import htbutt from '@/components/button';
import mapjson from '@/assets/map/JiangSu.json';
import HuaiAn from '@/assets/map/HuaiAn.json';
const chart = ref();
onMounted(() => {
  init();
});
var mapData = [
  {
    name: '南京市',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [118.767413, 32.041544],
  },
  {
    name: '无锡市',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [120.301663, 31.574729],
  },
  {
    name: '徐州市',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [117.284124, 34.205768],
  },
  {
    name: '常州市',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [119.946973, 31.772752],
  },
  {
    name: '苏州市',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [120.585315, 31.298886],
  },
  {
    name: '南通市',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [120.894291, 31.981143],
  },
  {
    name: '连云港市',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [119.221611, 34.596653],
  },
  {
    name: '淮安市',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [119.021265, 33.616332],
  },
  {
    name: '盐城市',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [120.163561, 33.347383],
  },
  {
    name: '扬州市',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [119.412966, 32.3942],
  },
  {
    name: '镇江市',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [119.425836, 32.187849],
  },
  {
    name: '泰州市',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [119.915176, 32.484882],
  },
  {
    name: '宿迁市',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [118.275162, 33.963008],
  },
];
var HuaiAnData = [
  {
    name: '淮安区',
    tradeBidsectionCount: 50,
    tradeProjectCount: 100,
    coordinate: [119.141099, 33.502561],
  },
  {
    name: '清江浦区',
    tradeBidsectionCount: 30,
    tradeProjectCount: 70,
    coordinate: [119.027146, 33.551013],
  },
  {
    name: '淮阴区',
    tradeBidsectionCount: 40,
    tradeProjectCount: 80,
    coordinate: [119.019265, 33.622452],
  },
  {
    name: '涟水县',
    tradeBidsectionCount: 20,
    tradeProjectCount: 50,
    coordinate: [119.266078, 33.771308],
  },
  {
    name: '盱眙县',
    tradeBidsectionCount: 30,
    tradeProjectCount: 60,
    coordinate: [118.513572, 32.950452],
  },
  {
    name: '金湖县',
    tradeBidsectionCount: 25,
    tradeProjectCount: 55,
    coordinate: [119.019454, 33.018162],
  },
  {
    name: '洪泽县',
    tradeBidsectionCount: 25,
    tradeProjectCount: 55,
    coordinate: [118.867562, 33.294975],
  },
];
function init() {
  let myChart = echarts.init(chart.value);
  echarts.registerMap('江苏', mapjson);
  let option = {
    tooltip: {
      trigger: 'item',
      position: function (point, params, dom, rect, size) {
        var x = 0; // x坐标位置
        var y = 0; // y坐标位置
        // 当前鼠标位置
        var pointX = point[0];
        var pointY = point[1];
        // 提示框大小
        var boxWidth = size.contentSize[0];
        var boxHeight = size.contentSize[1];

        // boxWidth > pointX 说明鼠标左边放不下提示框
        if (boxWidth > pointX) {
          x = pointX + 10;
        } else {
          // 左边放的下
          x = pointX - boxWidth - 10;
        }

        // boxHeight > pointY 说明鼠标上边放不下提示框
        if (boxHeight > pointY) {
          y = 5;
        } else {
          // 上边放得下
          y = pointY - boxHeight;
        }
        return [x, y];
      },
      show: true,
      enterable: true,
      textStyle: {
        fontSize: 13,
        color: '#fff',
      },
      backgroundColor: 'rgba(0,2,89,0.8)',
      formatter: function (params) {
        var tipHtml = '';

        tipHtml = `
                    <div class="ui-map-img">
                        <div class='ui-maptxt'>${params.name}</div>
                        <div class='ui-mapNum'>标段数:${params.data.tradeBidsectionCount}</div>
                        <div class='ui-mapNum'>项目数:${params.data.tradeProjectCount}</div>
                    </div>
                `;
        return tipHtml;
      },
    },
    geo: [
      {
        map: '江苏',
        aspectScale: 1,
        zoom: 0.65,
        layoutCenter: ['50%', '50%'],
        layoutSize: '180%',
        show: true,
        roam: false,
        label: {
          emphasis: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            borderColor: '#c0f3fb',
            borderWidth: 1,
            shadowColor: '#8cd3ef',
            shadowOffsetY: 10,
            shadowBlur: 120,
            areaColor: 'transparent',
          },
        },
      },
      // 重影
      {
        type: 'map',
        map: '江苏',
        zlevel: -1,
        aspectScale: 1,
        zoom: 0.65,
        layoutCenter: ['50%', '51%'],
        layoutSize: '180%',
        roam: false,
        silent: true,
        itemStyle: {
          normal: {
            borderWidth: 1,
            // borderColor:"rgba(17, 149, 216,0.6)",
            borderColor: 'rgba(58,149,253,0.8)',
            shadowColor: 'rgba(172, 122, 255,0.5)',
            shadowOffsetY: 5,
            shadowBlur: 15,
            areaColor: 'rgba(5,21,35,0.1)',
          },
        },
      },
      {
        type: 'map',
        map: '江苏',
        zlevel: -2,
        aspectScale: 1,
        zoom: 0.65,
        layoutCenter: ['50%', '52%'],
        layoutSize: '180%',
        roam: false,
        silent: true,
        itemStyle: {
          normal: {
            borderWidth: 1,
            // borderColor: "rgba(57, 132, 188,0.4)",
            borderColor: 'rgba(58,149,253,0.6)',
            shadowColor: 'rgba(65, 214, 255,1)',
            shadowOffsetY: 5,
            shadowBlur: 15,
            areaColor: 'transpercent',
          },
        },
      },
      {
        type: 'map',
        map: '江苏',
        zlevel: -3,
        aspectScale: 1,
        zoom: 0.65,
        layoutCenter: ['50%', '53%'],
        layoutSize: '180%',
        roam: false,
        silent: true,
        itemStyle: {
          normal: {
            borderWidth: 1,
            // borderColor: "rgba(11, 43, 97,0.8)",
            borderColor: 'rgba(58,149,253,0.4)',
            shadowColor: 'rgba(58,149,253,1)',
            shadowOffsetY: 15,
            shadowBlur: 10,
            areaColor: 'transpercent',
          },
        },
      },
      {
        type: 'map',
        map: '江苏',
        zlevel: -4,
        aspectScale: 1,
        zoom: 0.65,
        layoutCenter: ['50%', '54%'],
        layoutSize: '180%',
        roam: false,
        silent: true,
        itemStyle: {
          normal: {
            borderWidth: 5,
            // borderColor: "rgba(11, 43, 97,0.8)",
            borderColor: 'rgba(5,9,57,0.8)',
            shadowColor: 'rgba(29, 111, 165,0.8)',
            shadowOffsetY: 15,
            shadowBlur: 10,
            areaColor: 'rgba(5,21,35,0.1)',
          },
        },
      },
    ],
    series: [
      {
        name: '江苏',
        type: 'map',
        map: '江苏', // 自定义扩展图表类型
        aspectScale: 1,
        zoom: 0.65, // 缩放
        showLegendSymbol: true,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: '120%',
            },
          },
          emphasis: {
            // show: false,
          },
        },
        itemStyle: {
          normal: {
            areaColor: {
              type: 'linear',
              x: 1200,
              y: 0,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(3,27,78,0.75)', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(58,149,253,0.75)', // 50% 处的颜色
                },
              ],
              global: true, // 缺省为 false
            },
            borderColor: '#fff',
            borderWidth: 0.2,
          },
          emphasis: {
            show: false,
            color: '#fff',
            areaColor: 'rgba(0,254,233,0.6)',
          },
        },
        layoutCenter: ['50%', '50%'],
        layoutSize: '180%',
        markPoint: {
          symbol: 'none',
        },
        data: mapData,
      },
    ],
  };

  myChart.setOption(option);

  var index = 0; //播放所在下标
  var showTip = setInterval(function () {
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: index,
    });
    index++;
    if (index >= 14) {
      index = 0;
    }
  }, 2000);

  myChart.on('mouseover', function (params) {
    console.log(params);
    clearInterval(showTip);
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: params.dataIndex,
    });
  });

  myChart.on('mouseout', function (params) {
    showTip && clearInterval(showTip);
    showTip = setInterval(function () {
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index,
      });
      index++;
      if (index >= 14) {
        index = 0;
      }
    }, 2000);
  });

  // 添加点击事件
  myChart.on('click', function (params) {
    var selectedRegionName = params.name;

    // 在这里处理下钻操作
    if (selectedRegionName === '淮安市') {
      loadCityMapData(myChart, '淮安市');
    }
    // 其他市的处理同理...
  });
  // 加载市级下的区县地图数据
  function loadCityMapData(chartInstance, cityName) {
    // 在实际应用中，你需要根据 cityName 请求后端获取相应的区县地图数据

    // 假设你已经有了南京市下的区县地图数据，可以直接注册
    echarts.registerMap('淮安市', HuaiAn);

    // 更新地图配置
    var option = {
      tooltip: {
        trigger: 'item',
        position: function (point, params, dom, rect, size) {
          var x = 0; // x坐标位置
          var y = 0; // y坐标位置
          // 当前鼠标位置
          var pointX = point[0];
          var pointY = point[1];
          // 提示框大小
          var boxWidth = size.contentSize[0];
          var boxHeight = size.contentSize[1];

          // boxWidth > pointX 说明鼠标左边放不下提示框
          if (boxWidth > pointX) {
            x = pointX + 10;
          } else {
            // 左边放的下
            x = pointX - boxWidth - 10;
          }

          // boxHeight > pointY 说明鼠标上边放不下提示框
          if (boxHeight > pointY) {
            y = 5;
          } else {
            // 上边放得下
            y = pointY - boxHeight;
          }
          return [x, y];
        },
        show: true,
        enterable: true,
        textStyle: {
          fontSize: 13,
          color: '#fff',
        },
        backgroundColor: 'rgba(0,2,89,0.8)',
        formatter: function (params) {
          var tipHtml = '';

          tipHtml = `
                    <div class="ui-map-img">
                        <div class='ui-maptxt'>${params.name}</div>
                        <div class='ui-mapNum'>标段数:${params.data.tradeBidsectionCount}</div>
                        <div class='ui-mapNum'>项目数:${params.data.tradeProjectCount}</div>
                    </div>
                `;
          return tipHtml;
        },
      },
      geo: [
        {
          map: '淮安市',
          aspectScale: 1,
          zoom: 0.65,
          layoutCenter: ['50%', '50%'],
          layoutSize: '180%',
          show: true,
          roam: false,
          label: {
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              borderColor: '#c0f3fb',
              borderWidth: 1,
              shadowColor: '#8cd3ef',
              shadowOffsetY: 10,
              shadowBlur: 120,
              areaColor: 'transparent',
            },
          },
        },
        // 重影
        {
          type: 'map',
          map: '淮安市',
          zlevel: -1,
          aspectScale: 1,
          zoom: 0.65,
          layoutCenter: ['50%', '51%'],
          layoutSize: '180%',
          roam: false,
          silent: true,
          itemStyle: {
            normal: {
              borderWidth: 1,
              // borderColor:"rgba(17, 149, 216,0.6)",
              borderColor: 'rgba(58,149,253,0.8)',
              shadowColor: 'rgba(172, 122, 255,0.5)',
              shadowOffsetY: 5,
              shadowBlur: 15,
              areaColor: 'rgba(5,21,35,0.1)',
            },
          },
        },
        {
          type: 'map',
          map: '淮安市',
          zlevel: -2,
          aspectScale: 1,
          zoom: 0.65,
          layoutCenter: ['50%', '52%'],
          layoutSize: '180%',
          roam: false,
          silent: true,
          itemStyle: {
            normal: {
              borderWidth: 1,
              // borderColor: "rgba(57, 132, 188,0.4)",
              borderColor: 'rgba(58,149,253,0.6)',
              shadowColor: 'rgba(65, 214, 255,1)',
              shadowOffsetY: 5,
              shadowBlur: 15,
              areaColor: 'transpercent',
            },
          },
        },
        {
          type: 'map',
          map: '淮安市',
          zlevel: -3,
          aspectScale: 1,
          zoom: 0.65,
          layoutCenter: ['50%', '53%'],
          layoutSize: '180%',
          roam: false,
          silent: true,
          itemStyle: {
            normal: {
              borderWidth: 1,
              // borderColor: "rgba(11, 43, 97,0.8)",
              borderColor: 'rgba(58,149,253,0.4)',
              shadowColor: 'rgba(58,149,253,1)',
              shadowOffsetY: 15,
              shadowBlur: 10,
              areaColor: 'transpercent',
            },
          },
        },
        {
          type: 'map',
          map: '淮安市',
          zlevel: -4,
          aspectScale: 1,
          zoom: 0.65,
          layoutCenter: ['50%', '54%'],
          layoutSize: '180%',
          roam: false,
          silent: true,
          itemStyle: {
            normal: {
              borderWidth: 5,
              // borderColor: "rgba(11, 43, 97,0.8)",
              borderColor: 'rgba(5,9,57,0.8)',
              shadowColor: 'rgba(29, 111, 165,0.8)',
              shadowOffsetY: 15,
              shadowBlur: 10,
              areaColor: 'rgba(5,21,35,0.1)',
            },
          },
        },
      ],
      series: [
        {
          name: '淮安市',
          type: 'map',
          map: '淮安市',
          aspectScale: 1,
          zoom: 0.65, // 缩放
          showLegendSymbol: true,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: '120%',
              },
            },
            emphasis: {
              // show: false,
            },
          },
          itemStyle: {
            normal: {
              areaColor: {
                type: 'linear',
                x: 1200,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(3,27,78,0.75)', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(58,149,253,0.75)', // 50% 处的颜色
                  },
                ],
                global: true, // 缺省为 false
              },
              borderColor: '#fff',
              borderWidth: 0.2,
            },
            emphasis: {
              show: false,
              color: '#fff',
              areaColor: 'rgba(0,254,233,0.6)',
            },
          },
          layoutCenter: ['50%', '50%'],
          layoutSize: '180%',
          markPoint: {
            symbol: 'none',
          },
          data: HuaiAnData,
        },
      ],
    };

    chartInstance.setOption(option);
  }
  // 添加一个返回按钮的点击事件处理
  document.getElementById('backButton').addEventListener('click', function () {
    // 返回江苏省的地图
    myChart.setOption({
      tooltip: {
        trigger: 'item',
        position: function (point, params, dom, rect, size) {
          var x = 0; // x坐标位置
          var y = 0; // y坐标位置
          // 当前鼠标位置
          var pointX = point[0];
          var pointY = point[1];
          // 提示框大小
          var boxWidth = size.contentSize[0];
          var boxHeight = size.contentSize[1];

          // boxWidth > pointX 说明鼠标左边放不下提示框
          if (boxWidth > pointX) {
            x = pointX + 10;
          } else {
            // 左边放的下
            x = pointX - boxWidth - 10;
          }

          // boxHeight > pointY 说明鼠标上边放不下提示框
          if (boxHeight > pointY) {
            y = 5;
          } else {
            // 上边放得下
            y = pointY - boxHeight;
          }
          return [x, y];
        },
        show: true,
        enterable: true,
        textStyle: {
          fontSize: 13,
          color: '#fff',
        },
        backgroundColor: 'rgba(0,2,89,0.8)',
        formatter: function (params) {
          var tipHtml = '';

          tipHtml = `
                    <div class="ui-map-img">
                        <div class='ui-maptxt'>${params.name}</div>
                        <div class='ui-mapNum'>标段数:${params.data.tradeBidsectionCount}</div>
                        <div class='ui-mapNum'>项目数:${params.data.tradeProjectCount}</div>
                    </div>
                `;
          return tipHtml;
        },
      },
      geo: [
        {
          map: '江苏',
          aspectScale: 1,
          zoom: 0.65,
          layoutCenter: ['50%', '50%'],
          layoutSize: '180%',
          show: true,
          roam: false,
          label: {
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              borderColor: '#c0f3fb',
              borderWidth: 1,
              shadowColor: '#8cd3ef',
              shadowOffsetY: 10,
              shadowBlur: 120,
              areaColor: 'transparent',
            },
          },
        },
        // 重影
        {
          type: 'map',
          map: '江苏',
          zlevel: -1,
          aspectScale: 1,
          zoom: 0.65,
          layoutCenter: ['50%', '51%'],
          layoutSize: '180%',
          roam: false,
          silent: true,
          itemStyle: {
            normal: {
              borderWidth: 1,
              // borderColor:"rgba(17, 149, 216,0.6)",
              borderColor: 'rgba(58,149,253,0.8)',
              shadowColor: 'rgba(172, 122, 255,0.5)',
              shadowOffsetY: 5,
              shadowBlur: 15,
              areaColor: 'rgba(5,21,35,0.1)',
            },
          },
        },
        {
          type: 'map',
          map: '江苏',
          zlevel: -2,
          aspectScale: 1,
          zoom: 0.65,
          layoutCenter: ['50%', '52%'],
          layoutSize: '180%',
          roam: false,
          silent: true,
          itemStyle: {
            normal: {
              borderWidth: 1,
              // borderColor: "rgba(57, 132, 188,0.4)",
              borderColor: 'rgba(58,149,253,0.6)',
              shadowColor: 'rgba(65, 214, 255,1)',
              shadowOffsetY: 5,
              shadowBlur: 15,
              areaColor: 'transpercent',
            },
          },
        },
        {
          type: 'map',
          map: '江苏',
          zlevel: -3,
          aspectScale: 1,
          zoom: 0.65,
          layoutCenter: ['50%', '53%'],
          layoutSize: '180%',
          roam: false,
          silent: true,
          itemStyle: {
            normal: {
              borderWidth: 1,
              // borderColor: "rgba(11, 43, 97,0.8)",
              borderColor: 'rgba(58,149,253,0.4)',
              shadowColor: 'rgba(58,149,253,1)',
              shadowOffsetY: 15,
              shadowBlur: 10,
              areaColor: 'transpercent',
            },
          },
        },
        {
          type: 'map',
          map: '江苏',
          zlevel: -4,
          aspectScale: 1,
          zoom: 0.65,
          layoutCenter: ['50%', '54%'],
          layoutSize: '180%',
          roam: false,
          silent: true,
          itemStyle: {
            normal: {
              borderWidth: 5,
              // borderColor: "rgba(11, 43, 97,0.8)",
              borderColor: 'rgba(5,9,57,0.8)',
              shadowColor: 'rgba(29, 111, 165,0.8)',
              shadowOffsetY: 15,
              shadowBlur: 10,
              areaColor: 'rgba(5,21,35,0.1)',
            },
          },
        },
      ],
      series: [
        {
          name: '江苏',
          type: 'map',
          map: '江苏', // 自定义扩展图表类型
          aspectScale: 1,
          zoom: 0.65, // 缩放
          showLegendSymbol: true,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: '120%',
              },
            },
            emphasis: {
              // show: false,
            },
          },
          itemStyle: {
            normal: {
              areaColor: {
                type: 'linear',
                x: 1200,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(3,27,78,0.75)', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(58,149,253,0.75)', // 50% 处的颜色
                  },
                ],
                global: true, // 缺省为 false
              },
              borderColor: '#fff',
              borderWidth: 0.2,
            },
            emphasis: {
              show: false,
              color: '#fff',
              areaColor: 'rgba(0,254,233,0.6)',
            },
          },
          layoutCenter: ['50%', '50%'],
          layoutSize: '180%',
          markPoint: {
            symbol: 'none',
          },
          data: mapData,
        },
      ],
    });
  });
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
