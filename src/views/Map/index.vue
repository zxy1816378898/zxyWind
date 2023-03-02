<template>
  <div v-if="!srcPath" class="main-box">
    <div id="container"></div>

  </div>
</template>
    
<script setup>
import AMapLoader from '@amap/amap-jsapi-loader';
import { shallowRef } from '@vue/reactivity';

const map = shallowRef(null);
const center = ref([119.05020 , 33.56529 ]);
const marks = ref([]);

onMounted(() => {
  initMap();
});

/**初始化 */
const initMap = () => {
  window._AMapSecurityConfig = {
    securityJsCode: '70ad83856e431e14d13ce6124ff5f117',
  };
  AMapLoader.load({
    key: '38fd1ab532e5a8c3a0da71b76e67c78e',
    version: '2.0',
    plugins: [
      'AMap.ToolBar',
      'AMap.Driving',
      'AMap.ControlBar',
      'Loca.ZMarkerLayer',
      'AMap.MarkerCluster',
    ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map.value = new AMap.Map('container', {
        //设置地图容器id
        pitch: 5,// 地图俯仰角度，有效范围 0 度- 83 度
        viewMode: '3D', //是否为3D地图模式
        zoom: 10, //初始化地图级别
        center: center.value, //初始化地图中心点位置
        mapStyle: 'amap://styles/macaron',
        // 楼快出现是否动画
        buildingAnimation: true,
        // 是否启用大小调整
        resizeEnable: false,
        // 是否启用旋转
        rotateEnable: false,
        //   是否启用倾斜
        pitchEnable: false,
        // 扩大收缩范围
        expandZoomRange: false,
      });

    })

};

/**整理数据 */
let getPoints = () => {
  marks.value.forEach((e) => {
    let eArr = e.jwd.split(',');
    e.lnglat = [eArr[0], eArr[1]];
  });
};

getPoints();

</script>
    
<style lang="scss" scoped>
.main-box {
  width: 100%;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100vh;
}

#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
}
</style>
    