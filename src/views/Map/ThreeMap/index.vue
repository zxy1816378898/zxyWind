<template>
  <div class="main-box">
    <!-- 地图 -->
    <div id="container"></div>
    <!-- 回退按钮 -->
    <htbutt></htbutt>
  </div>
</template>

<script setup>
import htbutt from '@/components/button';
import * as THREE from 'three';
import JiangSuMap from '@/assets/map/JiangSu.json';
import * as d3 from 'd3'; //莫开托坐标 矫正地图坐标
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // 引入轨道控制器扩展库OrbitControls.js

const width = window.innerWidth,
  height = window.innerHeight;

const handleProj = d3
  .geoMercator()
  .center([119, 32.8])
  .scale(8000)
  .translate([0, 0]); // d3投影转换函数
const mapContainer = new THREE.Object3D(); // 存储地图Object3D对象

// 创建相机
const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 1000);
camera.position.z = 1000;

// 创建3D场景对象Scene
const scene = new THREE.Scene();
// 将场景背景颜色设置为透明
scene.background = new THREE.Color(0, 0, 0, 0);

// 初始化环境光
const initLight = () => {
  const ambLight = new THREE.AmbientLight('#ffffff', 1.9); // 基本光源
  const globalAmbLight = new THREE.AmbientLight('#ffffff', 0.6); // 全局环境光
  /**
   * 设置聚光灯相关的的属性
   */
  const spotLight = new THREE.SpotLight(0xffffff, 2); // 聚光灯
  spotLight.position.set(0, 0, 300); // 调整聚光灯位置
  spotLight.castShadow = true; // 只有该属性为true时，该点光源允许产生阴影，并且下列属性可用
  scene.add(ambLight, globalAmbLight, spotLight); // 向场景中添加光源

  const axesHelper = new THREE.AxesHelper(500);
  scene.add(axesHelper);
};

// 初始化渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);

// 初始化地理数据集
const initGeom = () => {
  handleData(JiangSuMap);
};

// 处理地图数据 GeoJson data
const handleData = (jsonData) => {
  const feaureList = jsonData.features;
  feaureList.forEach((feature) => {
    // 每个feature都代表一个省份
    const province = new THREE.Object3D();
    province.properties = feature.properties.name; // 省份名称
    province.name = feature.properties.name; // 省份名称
    mapContainer.name = feature.properties.name; // 省份名称
    const coordinates = feature.geometry.coordinates; // 省份坐标信息
    if (feature.geometry.type === 'MultiPolygon') {
      coordinates.forEach((coord) => {
        coord.forEach((coordinate) => {
          // 三维多边形
          const extrudeMesh = creatDepthPolygon(coordinate);
          extrudeMesh.properties = feature.properties.name;
          // 线条
          const line = createLine(coordinate);
          province.add(extrudeMesh);
          province.add(line);
        });
      });
    }
    if (feature.geometry.type === 'Polygon') {
      coordinates.forEach((coordinate) => {
        // 三维多边形
        const extrudeMesh = creatDepthPolygon(coordinate);
        extrudeMesh.properties = feature.properties.name;
        // 线条
        const line = createLine(coordinate);
        province.add(extrudeMesh);
        province.add(line);
      });
    }
    mapContainer.add(province);
  });
  scene.add(mapContainer);
};

// 创建三维多边形
const creatDepthPolygon = (coordinate) => {
  const shape = new THREE.Shape();

  coordinate.forEach((item, index) => {
    // 每一个item都是MultiPolygon中的一个polygon
    const [x_XYZ, y_XYZ] = handleProj(item);
    if (index === 0) {
      shape.moveTo(x_XYZ, -y_XYZ);
    } else {
      shape.lineTo(x_XYZ, -y_XYZ);
    }
  });
  const extrudeSettings = {
    steps: 2,
    depth: 16,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 1,
  };

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  const material = new THREE.MeshBasicMaterial({
    // color: new THREE.Color(Math.random() * 0xffffff), // 每个省随机赋色
    color: '#d13a34',
    transparent: true,
    opacity: 0.6,
  });
  return new THREE.Mesh(geometry, material);
};

// 创建线条
const createLine = (coordinate) => {
  const material = new THREE.LineBasicMaterial({
    color: '#ffffff',
  });
  const points = [];
  coordinate.forEach((item, index) => {
    // 每一个item都是MultiPolygon中的一个polygon
    const [x_XYZ, y_XYZ] = handleProj(item);
    points.push(new THREE.Vector3(x_XYZ, -y_XYZ, 25));
  });

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return new THREE.Line(geometry, material);
};

// 光线投射Raycaster
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

//鼠标放上去 改变颜色 显示地区名字
let activeIntersects = []; //鼠标滑过数据
const onPointerMove = (event) => {
  let container = document.querySelector('#container');
  // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // 通过摄像机和鼠标位置更新射线
  raycaster.setFromCamera(pointer, camera);

  // 判断数组是否有数据，有数据全部设置为原始数据
  if (activeIntersects.length) {
    for (let i = 0; i < activeIntersects.length; i++) {
      activeIntersects[i].object.material.color.set('#d13a34');
    }
  }
  // 计算物体和射线的焦点
  const intersects = raycaster.intersectObjects(scene.children);

  // if (intersects.length && intersects[0].object.parent.name) {
  //   // 设置hove 弹框的宽高
  //   container.style.left = event.clientX + 'px';
  //   container.style.top = event.clientY + 'px';
  //   container.style.display = 'block';
  //   container.innerHTML = intersects[0].object.parent.name;
  // } else {
  //   container.style.display = 'none';
  // }

  // 数组数据清空
  activeIntersects = [];

  // 滑过的当前这个高亮
  for (let i = 0; i < intersects.length; i++) {
    if (intersects[i].object.type === 'Mesh') {
      intersects[i].object.material.color.set(0xff0000);
      activeIntersects.push(intersects[i]);
    }
  }
};

window.addEventListener('pointermove', onPointerMove);
// 设置相机控件轨道控制器OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; //阻尼 更真实

// 辅助线 AxesHelper
const axesHelper = new THREE.AxesHelper(500);
scene.add(axesHelper);

// 渲染
// 因为后期是每一帧都需要渲染，需要封装一个渲染函数
const render = () => {
  // 使用渲染器，通过相机 将场景渲染出来
  renderer.render(scene, camera);
  // 渲染下一帧的时候会调用render函数
  requestAnimationFrame(render);
};

// 4.获取dom实例
onMounted(() => {
  initGeom();
  initLight();
  render();
  document.getElementById('container').appendChild(renderer.domElement);
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

  color: #fff; /* 设置文本颜色为黑色，以确保在地图上可见 */
  font-size: 16px; /* 设置合适的字体大小 */

  position: absolute;
  top: 0;
  left: 0;

  z-index: 999; /* 设置合适的层级 */

  cursor: pointer; /* 设置鼠标样式为手型 */
}
</style>
