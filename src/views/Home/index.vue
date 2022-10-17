<template>
  <div class="main">
    <div class="left">
      <div class="left-1">
        <div class="text-1">zxyWind<span>.top</span></div>
      </div>
      <div class="left-2">
        <div class="mid">
          <img :src="getImage('top')" class="top" />
          <span class="mid-text">Hello&nbsp;World&nbsp;!</span><br />
          <span class="li">一个建立于 21 世纪的小站，存活于互联网的边缘</span>
          <img :src="getImage('bott')" class="bott" />
        </div>
      </div>
      <div class="left-3">
        <div class="icon" v-for="item in iconArr" @click="jump">
          <img
            :src="getImage(`${item.iconurl}`)"
            class="iconli"
            @mouseenter="enter(item)"
          />
        </div>
        <div class="titleAyy">
          <div class="li">{{ text }}</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-1">
        <div class="li-1"><Yiyan></Yiyan></div>
        <div class="li-2"><Time></Time></div>
      </div>
      <div class="right-2">
        <img :src="getImage('link')" class="link" />
        <span>网址列表</span>
      </div>
      <div class="right-3" @click="openPop">
        <div class="icon" v-for="item in wzlbAyy">
          <img :src="getImage(`${item.iconurl}`)" class="iconli" />
          <span>{{ item.jl }}</span>
          <span>{{ item.bj }}</span>
          <span>{{ item.fy }}</span>
          <span>{{ item.qsy }}</span>
          <span>{{ item.wzj }}</span>
          <span>{{ item.sys }}</span>
        </div>
      </div>
      <pop ref="popRef"></pop>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Yiyan from "@/components/yiyan"; // 引入 一言
import Time from "@/components/time"; // 引入 时间 天气
import pop from "./pop/echartsPop.vue"; // 引入弹窗

const popRef = ref();
const openPop = () => {
  // 绑定事件
  popRef.value.openClick();
};
function getImage(name) {
  //动态引入图片
  return new URL(`../../assets/images/home/${name}.png`, import.meta.url).href;
}
function jump(li) {
  // 跳转链接
  window.location.href = "https://www.baidu.com";
}
//数组
const text = ref("");
const iconArr = ref([
  {
    name: "github",
    iconurl: "github",
    url: "https://www.baidu.com",
    text: "去Github看看",
  },
  { name: "qq", iconurl: "qq", url: "", text: "有什么事么~" },
  { name: "message", iconurl: "message", url: "", text: "来封Email" },
  { name: "TV", iconurl: "TV", url: "", text: "到B站看看~" },
  { name: "plane", iconurl: "bird", url: "", text: "来语雀看看~" },
]);
const enter = (val) => {
  text.value = val.text;
};

const wzlbAyy = ref([
  {
    iconurl: "note",
    jl: "简历",
  },
  {
    iconurl: "cloud",
    bj: "笔记",
  },
  {
    iconurl: "translate",
    fy: "翻译",
  },
  {
    iconurl: "compass",
    qsy: "起始页",
  },
  {
    iconurl: "book",
    wzj: "Table",
  },
  {
    iconurl: "lab",
    sys: "Echarts",
  },
]);
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-sizing: border-box;
  background: rgb(0 0 0 / 15%);
  .left {
    width: 900px;
    height: 100%;
    box-sizing: border-box;
    .left-1 {
      width: 240px;
      height: 80px;
      margin-top: 300px;
      margin-left: 220px;
      font-size: 80px;
      font-family: "Pacifico-Regular" !important;
      color: #fff;
      text-align: center;
      &:hover {
        transform: scale(1.01);
        transition: 0.5s;
      }

      .text-1 {
        & span {
          font-size: 35px;
          margin-left: 15px;
        }
      }
    }
    .left-2 {
      widows: 428px;
      height: 350px;
      color: #fff;
      display: flex;
      justify-content: space-between;
      &:hover {
        transform: scale(1.02);
        transition: 0.5s;
      }
      .mid {
        width: 65%;
        height: 48%;
        background: rgb(0 0 0 / 25%);
        backdrop-filter: blur(10px);
        border-radius: 6px;
        margin-top: 100px;
        margin-left: 200px;
        .mid-text {
          position: absolute;
          margin-top: 45px;
          font-size: 18px;
          font-family: "Pacifico-Regular" !important;
        }
        .top,
        .bott {
          width: 50px;
          height: 50px;
        }
        .bott {
          margin-top: 55px;
          margin-left: 525px;
        }
        .li {
          position: absolute;
          font-size: 20px;
          margin-left: 50px;
          margin-top: 35px;
        }
      }
    }
    .left-3 {
      width: 583px;
      height: 57px;
      backdrop-filter: blur(1px);
      border-radius: 6px;
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      color: #fff;
      margin-left: 200px;
      margin-top: -70px;
      &:hover {
        background: rgb(0 0 0 / 25%);
        backdrop-filter: blur(10px);
      }
      &:hover {
        transform: scale(1.01);
        transition: 0.6s;
      }

      .titleAyy {
        position: absolute;
        left: 465px;
        top: 17px;
        .li {
          font-size: 18px;
        }
      }
      .icon {
        width: 10%;
        .iconli {
          position: absolute;
          width: 28px;
          height: 28px;
          top: 17px;
          margin-left: 10px;
        }
      }
    }
  }
  .right {
    width: 900px;
    height: 100%;
    box-sizing: border-box;
    .right-1 {
      width: 100%;
      height: 315px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .li-1 {
        width: 412px;
        height: 195px;
        margin-top: 140px;
        color: #fff;
        background: rgb(0 0 0 / 25%);
        backdrop-filter: blur(10px);
        border-radius: 6px;
        &:hover {
          transform: scale(1.01);
          transition: 0.5s;
        }
      }
      .li-2 {
        width: 412px;
        height: 195px;
        margin-top: 140px;
        color: #fff;
        background: rgb(0 0 0 / 25%);
        backdrop-filter: blur(10px);
        border-radius: 6px;
        &:hover {
          transform: scale(1.01);
          transition: 0.5s;
        }
      }
    }
    .right-2 {
      height: 35px;
      margin-top: 60px;
      font-size: 25px;
      color: #fff;
      font-family: "Pacifico-Regular" !important;

      .link {
        width: 30px;
        line-height: 55;
        margin-left: 25px;
      }
      & span {
        margin-left: 15px;
        margin-top: 5px;
      }
    }
    .right-3 {
      height: 422px;
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: flex-start;

      .icon {
        width: 250px;
        height: 130px;
        background: rgb(0 0 0 / 25%);
        backdrop-filter: blur(10px);
        border-radius: 6px;
        margin-top: 30px;
        margin-left: 5px;
        font-size: 22px;
        font-family: "Pacifico-Regular" !important;
        color: #fff;
        & span {
          position: absolute;
          margin-top: 50px;
          margin-left: 130px;
        }
        &:hover {
          transform: scale(1.01);
          transition: 0.5s;
          background: rgb(0 0 0 / 35%);
        }
        .iconli {
          position: absolute;
          width: 35px;
          height: 35px;
          top: 45px;
          margin-left: 80px;
        }
      }
    }
  }
}
// 去除超链接的默认样式
.router-link-active {
  text-decoration: none;
}
a {
  text-decoration: none;
  color: white;
}
</style>
