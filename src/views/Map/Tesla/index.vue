<template>
  <htbutt></htbutt>
  <div class="container">
    <!-- 用一个overlay div包裹UI元素 -->
    <div class="mask" v-if="!isLoading">
      <p class="text">x：{{ x }} y：{{ y }} z：{{ z }}</p>
      <el-button type="isAutoFun" @click="isAutoFun">转动车</el-button>
      <el-button type="stop" @click="stop">停止</el-button>
      <div class="flex">
        <div
          @click="setCarColor(index)"
          v-for="(item, index) in colorAry"
          :style="{ backgroundColor: item }"
        ></div>
      </div>
    </div>
    <!-- 渲染容器 -->
    <div ref="rendererContainer" class="renderer-container"></div>
  </div>
</template>

<script setup>
import htbutt from '@/components/button';

import {
  Color,
  DirectionalLight,
  DirectionalLightHelper,
  HemisphereLight,
  HemisphereLightHelper,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// 使用相对路径导入 GLTF 文件
const teslaModelUrl = '/public/3d/tesla/scene.gltf';
// 车身颜色数组
const colorAry = [
  'rgb(216, 27, 67)',
  'rgb(142, 36, 170)',
  'rgb(81, 45, 168)',
  'rgb(48, 63, 159)',
  'rgb(30, 136, 229)',
  'rgb(0, 137, 123)',
  // 更多颜色...
];

// GLTF模型加载器
const loader = new GLTFLoader();

// 地图初始化位置
const defaultMap = {
  x: 510,
  y: 128,
  z: 0,
};
const map = reactive(defaultMap);
const { x, y, z } = toRefs(map);

// 状态与引用变量
let scene,
  camera,
  renderer,
  controls,
  floor,
  dhelper,
  hHelper,
  directionalLight,
  hemisphereLight;
let isLoading = ref(true); // 加载状态
let loadingWidth = ref(0); // 加载进度
const rendererContainer = ref(null); // 渲染容器引用

// 设置地面
const setFloor = () => {
  const floorGeometry = new PlaneGeometry(5000, 5000, 1, 1.1);
  const floorMaterial = new MeshPhongMaterial({ color: 0x77f28f });
  floor = new Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -0.5 * Math.PI;
  floor.position.y = -2.1;
  scene.add(floor);
};

// 设置光源
const setLight = () => {
  // 定向光
  directionalLight = new DirectionalLight(0xffffff, 1.0); // 增加强度到1.0
  directionalLight.position.set(-4, 8, 4);
  dhelper = new DirectionalLightHelper(directionalLight, 5, 0xff0000);

  // 半球光
  hemisphereLight = new HemisphereLight(0xffffff, 0xffffff, 1.0); // 增加强度到1.0
  hemisphereLight.position.set(0, 8, 0);
  hHelper = new HemisphereLightHelper(hemisphereLight, 10);

  scene.add(directionalLight);
  scene.add(hemisphereLight);
};

// 设置相机
const setCamera = () => {
  scene = new Scene();
  camera = new PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);
  camera.position.set(x.value, y.value, z.value); // 设置相机初始位置
  renderer = new WebGLRenderer();
  renderer.setSize(innerWidth, innerHeight); // 设置渲染器大小
  rendererContainer.value.appendChild(renderer.domElement); // 将渲染器添加到容器中
};

// 设置控制器
const setControls = () => {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.maxPolarAngle = (0.9 * Math.PI) / 2; // 限制最大倾斜角度
  controls.enableZoom = true; // 启用缩放
  controls.addEventListener('change', render); // 添加渲染更新监听
};

// 初始化函数
const init = async () => {
  const gltf = await loadFile(teslaModelUrl); // 使用导入的 URL
  setCamera();
  setLight();
  // setFloor();  // 如果需要地面，可以取消注释
  setControls();
  scene.add(gltf.scene); // 将加载的模型添加到场景中
  loop(); // 开始动画循环
};

// 动画循环函数
const loop = () => {
  requestAnimationFrame(loop);
  renderer.render(scene, camera); // 渲染场景
  controls.update(); // 更新控制器
};

// 启动自动旋转
const isAutoFun = () => {
  controls.autoRotate = true;
};

// 停止自动旋转
const stop = () => {
  controls.autoRotate = false;
};

// 渲染更新位置
const render = () => {
  map.x = Math.round(camera.position.x);
  map.y = Math.round(camera.position.y);
  map.z = Math.round(camera.position.z);
};

// 设置车的颜色
const setCarColor = (index) => {
  const currentColor = new Color(colorAry[index]);
  scene.traverse((child) => {
    if (child.isMesh && child.name.includes('door_')) {
      child.material.color.set(currentColor); // 设置车门的颜色
    }
  });
};

// 加载3D模型文件
const loadFile = (url) => {
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      (gltf) => resolve(gltf), // 成功加载
      ({ loaded, total }) => {
        let load = Math.abs((loaded / total) * 100);
        loadingWidth.value = load; // 更新加载进度
        if (load >= 100) {
          setTimeout(() => {
            isLoading.value = false; // 加载完成
          }, 1000);
        }
      },
      (err) => reject(err) // 错误处理
    );
  });
};

// 窗口调整时更新相机
const onResizeFun = () => {
  setCamera(); // 更新相机参数
};

// 生命周期钩子
onMounted(() => {
  init(); // 初始化
  window.addEventListener('resize', onResizeFun); // 监听窗口调整
});
</script>
<style scoped>
.container {
  position: relative; /* 设置容器相对定位，保证覆盖层能正确定位 */
  width: 100%;
  height: 100%;
}

.renderer-container {
  width: 100%;
  height: 100%;
  position: absolute; /* 使渲染区域与 UI 元素重叠 */
}

.mask {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10; /* 确保UI元素在渲染层之上 */
  color: white;
  background: rgba(0, 0, 0, 0.5); /* 背景半透明 */
  padding: 20px;
  border-radius: 8px;
  .text {
    font-size: 24px !important;
    margin: 20px;
  }
}

.flex {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.flex div {
  width: 20px;
  height: 20px;
  margin: 5px;
  cursor: pointer;
}
</style>
