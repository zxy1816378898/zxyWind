<template>
  <div class="main-box">
    <!-- 地图 -->
    <div id="container"></div>
    <!-- 回退按钮 -->
    <htbutt></htbutt>
    <!-- 流光盒子 -->
    <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <!-- 天气 -->
    <div class="weather">
      <div class="bigBox">
        <div class="city">{{ city }}</div>
        <div class="clear ">
          <div class="forecast">{{ forecast }}</div>
          <div class="temperature">{{ nightTemp }}~{{ dayTemp }}℃</div>
        </div>
      </div>
    </div>
    <!-- 搜索框 -->
    <div class="search" @click="inputClick">
      <input id="tipinput" :value="inputSearchVal" type="text">
    
    </div>
  </div>
</template>
    
<script setup>
import htbutt from "@/components/button";
import AMapLoader from '@amap/amap-jsapi-loader';


const map = ref(null);
const inputSearchVal = ref('');
const forecast = ref('')
const dayTemp = ref('')
const nightTemp = ref('')
const city = ref('')

const getlocalcity = ref('')
/**初始化 */
const initMap = () => {
  window._AMapSecurityConfig = {
    securityJsCode: '70ad83856e431e14d13ce6124ff5f117',
  };
  AMapLoader.load({
    key: '38fd1ab532e5a8c3a0da71b76e67c78e',
    version: '2.0',
    plugins: [
      'AMap.ToolBar',//工具条，控制地图的缩放、平移等
      'AMap.Driving',//驾车路线规划服务，提供按照起、终点进行驾车路线的功能
      'AMap.ControlBar',//组合了旋转、倾斜、复位在内的地图控件。
      'AMap.PlaceSearch',//地点搜索服务，提供了关键字搜索、周边搜索、范围内搜索等功能
      'AMap.AutoComplete',//输入提示，提供了根据关键字获得提示信息的功能
      'AMap.Geolocation',//定位，提供了获取用户当前准确位置、所在城市的方法
      'AMap.AdvancedInfoWindow',//高级信息窗体，整合了周边搜索、路线规划功能
      'AMap.Weather',//天气预报插件，用于获取未来的天气信息
      'AMap.CitySearch',//根据IP返回对应城市信息
    ]
  })
    .then((AMap) => {
      map.value = new AMap.Map('container', {     //设置地图容器id
        pitch: 5,// 地图俯仰角度，有效范围 0 度- 83 度
        viewMode: '3D', //是否为3D地图模式
        terrain: true,// 开启地形图
        pitch: 50, // 地图俯仰角度，有效范围 0 度- 83 度
        zoom: 18, //初始化地图级别
        mapStyle: 'amap://styles/normal',
        buildingAnimation: true,  // 楼快出现是否动画
        resizeEnable: false,  // 是否启用大小调整
        rotateEnable: false, // 是否启用旋转
        pitchEnable: true,    // 是否启用倾斜
        expandZoomRange: false,  // 扩大收缩范围
        resizeEnable: true
      })
      getlocalcity.value = new AMap.CitySearch();
      addselect(AMap)
      addlocalCity(getlocalcity.value)
    })
    .catch((e) => {
      console.log(e);
    });
};

//输入提示
const addselect = (AMap) => {
  let autoOptions = { input: "tipinput" };
  let auto = new AMap.AutoComplete(autoOptions);
  let placeSearch = new AMap.PlaceSearch({
    map: map.value
  });  //构造地点查询类
  auto.on("select", select);//注册监听，当选中某条记录时会触发
  function select(e) {
    placeSearch.setCity(e.poi.adcode);
    placeSearch.search(e.poi.name);  //关键字查询查询
  }
}
//天气
const addweather = (AMap) => {
  let weather = new AMap.Weather();
  weather.getForecast(city.value, function (err, data) {
    if (!err) {
      forecast.value = data.forecasts[0].dayWeather;
      dayTemp.value = data.forecasts[0].dayTemp;
      nightTemp.value = data.forecasts[0].nightTemp;
    }
  })
}
//定位当前城市
const addlocalCity = (getlocalcity) => {
  getlocalcity.getLocalCity(function (status, result) {
    city.value = result.city;
  })
}
// 延迟执行
setTimeout(() => {
  addweather(AMap)
}, 1000)

onMounted(() => {
  initMap();
});

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

.box {
  position: absolute;
  width: 300px;
  height: 50px;
  right: 50px;
  top: 40px;
  background-color: transparent;
  /* 文字居中 */
  text-align: center;
  overflow: hidden;
}

.box :nth-of-type(1) {
  background: linear-gradient(to right, transparent, #0FF);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  animation: run1 1s linear infinite;
}

.box :nth-of-type(2) {
  position: absolute;
  background: linear-gradient(to bottom, transparent, #0FF);
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  animation: run2 1s linear infinite;
  animation-delay: .5s;
}

.box :nth-of-type(3) {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to left, transparent, #0FF);
  animation: run3 1s linear infinite;
  animation-delay: 1s;
}

.box :nth-of-type(4) {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(to top, transparent, #0FF);
  animation: run4 1s linear infinite;
  animation-delay: 1.5s;
}

@keyframes run1 {
  0% {
    transform: translateX(-200px);
  }

  100% {
    transform: translateX(200px);
  }
}

@keyframes run2 {
  0% {
    transform: translateY(-40px);
  }

  100% {
    transform: translateY(40px);
  }
}

@keyframes run3 {
  0% {
    transform: translateX(200px);
  }

  100% {
    transform: translateX(-200px);
  }
}

@keyframes run4 {
  0% {
    transform: translateY(40px);
  }

  100% {
    transform: translateY(-40px);
  }

}

.weather {
  width: 150px;
  height: 50px;
  position: absolute;
  right: 360px;
  top: 40px;
  text-align: center;
  line-height: 20px;
  color: #7fffd4;
  font-size: 18px;

  .bigBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    .city {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center
    }

    .clear {
      @extend .city;
      display: flex;
      flex-direction: column;

      .forecast {
        width: 100%;
        height: 50%;
      }

      .temperature {
        @extend .forecast;
      }
    }
  }


}

.search {
  position: absolute;
  width: 300px;
  height: 50px;
  right: 50px;
  top: 40px;
  display: flex;
  flex-direction: row;
  z-index: 99;

  input {
    border: none;
    background-color: transparent;
    width: 260px;
    height: 50px;
    right: 50px;
    top: 40px;
    font-family: '宋体';
    color: #7fffd4;
    overflow: hidden;
    line-height: 40px;
    font-size: 28px;
  }

  .searchIMG {
    font-size: 45px;
    color: #7fffd4;
    position: relative;
    top: -5px;
    right: 5px;
  }

  // 去除input框点击时候的黑线，type是什么类型就去除什么类型
  input[type=text]:focus {
    outline: none;
  }
}
</style>
    