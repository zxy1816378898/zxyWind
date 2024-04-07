<template>
  <div class="main">
    <div class="left_aside">
      <div class="logo">
        <a
          href="https://vitepress-xiaoyang-qt4vga0cb-zxy1816378898.vercel.app/"
        >
          <img class="imgLogo" :src="logo" alt="" />
        </a>
        <!-- <div class="name">zxyWind<span>.top</span>
        </div> -->
      </div>

      <div class="message">
        <div class="contont">
          <span class="top iconfont icon-a-shuangyinhaozuo3x"></span>
          <span class="text_1">Hello&nbsp;World&nbsp;!</span>
          <br />
          <span class="text_2">
            一个建立于 21 世纪的小站，存活于互联网的边缘
          </span>
          <span class="bot iconfont icon-a-shuangyinhaoyou3x"></span>
        </div>
      </div>

      <div class="social">
        <div class="icon" v-for="item in iconArr" @click="goDetail(item)">
          <span
            :class="item.iconurl"
            class="iconli"
            @mouseenter="enter(item)"
            @mouseleave="leave(item)"
          ></span>
        </div>

        <div class="titleAyy">
          <div class="li">{{ text }}</div>
        </div>
      </div>
    </div>

    <div class="right_aside">
      <div class="card">
        <div class="row">
          <Yiyan></Yiyan>
        </div>

        <div class="row">
          <Time></Time>
        </div>
      </div>

      <div class="links">
        <div class="wzlb">
          <span>网址列表</span>
        </div>

        <div class="link" v-for="item in wzlbAyy" @click="openPop(item)">
          <span :class="item.icon" class="iconli"></span>
          <span>{{ item.mc }}</span>
        </div>

        <pop ref="popRef"></pop>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Yiyan from '@/components/yiyan'; // 引入 一言
import Time from '@/components/time'; // 引入 时间 天气
import pop from './pop/echartsPop.vue'; // 引入弹窗
import logo from '@/assets/images/logo.png'; // 引入logo
const router = useRouter();
const popRef = ref();
// 点击事件
const openPop = (a) => {
  if (a.id === '6') {
    popRef.value.openClick();
  } else if (a.id === '2') {
    window.open('https://vitepress-xiaoyang.vercel.app/', '_blank');
  } else {
    router.push({
      path: `/${a.url}`,
    });
  }
};
const goDetail = (e) => {
  // window.location.href = `${e.url}`; 在原页面打开
  window.open(`${e.url}`); // 打开新窗口
};
//数组
const text = ref('');
const iconArr = ref([
  {
    name: 'github',
    iconurl: 'iconfont icon-github',
    url: 'https://github.com/zxywind-9527',
    text: '去Github看看',
  },
  {
    name: 'qq',
    iconurl: 'iconfont icon-QQ',
    url: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1816378898&website=www.oicqzone.com',
    text: '有什么事么~',
  },
  {
    name: 'message',
    iconurl: 'iconfont icon-envelope-full',
    url: 'https://mail.qq.com/cgi-bin/frame_html?sid=wNK8XuDhRQZIfxNw&r=0032f2d7e46aa273ad1500cd001197f3&lang=zh',
    text: '来封Email',
  },
  {
    name: 'TV',
    iconurl: 'iconfont icon-bilibili',
    url: 'https://space.bilibili.com/549753038?spm_id_from=333.976.0.0',
    text: '到B站看看~',
  },
  {
    name: 'plane',
    iconurl: 'iconfont icon-paperPlane-fill',
    url: 'https://www.yuque.com/dashboard',
    text: '来语雀看看~',
  },
]);
const enter = (val) => {
  text.value = val.text;
};
const leave = (val) => {
  text.value = '';
};
const wzlbAyy = ref([
  { id: '1', icon: 'iconfont icon-wangyiyunyinle', mc: 'Music', url: 'Music' },
  { id: '2', icon: 'iconfont icon-biji', mc: '笔记', url: 'Note' },
  {
    id: '3',
    icon: 'iconfont icon-shuyi_fanyi-36',
    mc: '翻译',
    url: 'Translate',
  },
  { id: '4', icon: 'iconfont icon-compass', mc: '起始页', url: 'Compass' },
  { id: '5', icon: 'iconfont icon-ditu', mc: 'Map', url: 'Map' },
  { id: '6', icon: 'iconfont icon-yaoji', mc: 'Echarts' },
]);
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .left_aside {
    width: 580px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      animation: 0.5s ease 0s 1 normal none running fade;
      margin-top: 90px;
      transition: transform 1s cubic-bezier(0.06, 0.64, 1, 0.24);

      .imgLogo {
        width: 350px;

        position: relative;
        top: 15%;
        left: -12%;
      }

      .name {
        font-size: 50px;
        cursor: pointer;
        font-family: 'Pacifico-Regular' !important;
        color: #fff;
        text-align: center;
        margin-left: 15px;
        transition: transform 1s cubic-bezier(0.06, 0.64, 1, 0.24);

        & span {
          font-size: 35px;
          margin-left: 15px;
        }
      }
    }

    .message {
      width: 100%;
      height: 120px;
      margin-top: 55px;

      .contont {
        width: 480px;
        height: 100%;
        color: #fff;
        @include bbl;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        backdrop-filter: blur(1px);
        transition: transform 1s cubic-bezier(0.06, 0.64, 1, 0.24);

        .top,
        .bot {
          font-size: 45px;
        }

        .bot {
          margin-top: 65px;
          margin-left: 25px;
        }

        .text_1 {
          position: absolute;
          margin-top: 25px;
          margin-left: 50px;
          font-size: 18px;
          font-family: 'Pacifico-Regular' !important;
        }

        .text_2 {
          position: absolute;
          font-size: 18px;
          margin-left: 50px;
          margin-top: 55px;
        }
      }
    }

    .social {
      width: 482px;
      height: 50px;
      border-radius: 10px;
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      color: #fff;
      margin-left: 0px;
      margin-top: 20px;
      cursor: pointer;
      transition: transform 1s cubic-bezier(0.06, 0.64, 1, 0.24);

      &:hover {
        @include bbl;
        width: 480px;
      }

      &:hover {
        transform: scale(1.01);
        transition: 0.6s;
      }

      .icon {
        position: relative;
      }

      .titleAyy {
        position: absolute;
        width: 120px;
        height: auto;
        left: 355px;
        top: 13px;

        .li {
          font-size: 18px;
        }
      }

      .icon {
        width: 10%;

        .iconli {
          position: absolute;
          font-size: 27px;
          top: 6px;
          margin-left: 10px;
        }
      }
    }
  }

  .right_aside {
    @extend.left_aside;

    .card {
      width: 100%;
      height: 165px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .row {
        width: 278px;
        @include bbl;
      }
    }

    .links {
      width: 100%;
      height: 220px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 30px;

      .wzlb {
        width: 100%;
        height: 25px;

        & span {
          font-size: 23px;
          font-weight: 500;
          color: #fff;
          margin-left: 10px;
          letter-spacing: 5px;
          font-family: 'Pacifico-Regular' !important;
        }
      }

      .link {
        @include bbl;
        width: 180px;
        height: 100px;
        backdrop-filter: blur(10px);
        border-radius: 6px;
        margin-top: 30px;
        margin-left: 5px;
        font-size: 22px;
        font-family: 'Pacifico-Regular' !important;
        color: #fff;
        transition: transform 1s cubic-bezier(0.06, 0.64, 1, 0.24);

        & span {
          position: absolute;
          margin-top: 35px;
          margin-left: 80px;
        }

        &:hover {
          transform: scale(1.02);
          transition: 0.5s;
          @include bbl;
        }

        .iconli {
          position: absolute;
          font-size: 30px;
          top: -5px;
          margin-left: 30px;
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
