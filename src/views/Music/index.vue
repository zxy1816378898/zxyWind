<template>
  <!-- 回退按钮 -->
  <htbutt></htbutt>
  <!-- 主体 -->
  <div class="main">
    <!-- 左侧侧边栏 -->
    <div class="main_left">
      <!-- 标签 -->
      <div class="main_left_nav">

        <div class="li" v-for="item in leftAyy">

          <img class="icon" :src="getImage(`${item.icon}`)" />

          <div class="name">{{ item.name }}</div>

        </div>

      </div>
    </div>
    <!-- 右侧主体 -->
    <div class="main_right">
      <!-- 搜索框 -->
      <div class="main_right_search">
        <el-input v-model="input" class="w-50 m-2" size="large" placeholder="Please input" />
      </div>
      <!-- 轮播图 -->
      <div class="main_right_banner">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 text="2xl" justify="center">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 热门推荐 -->
      <div class="main_right_hot_recommend"></div>
      <!-- 新碟上架 -->
      <div class="main_right_new_grounding"></div>
      <!-- 最新MV -->
      <div class="main_right_new_mv"></div>
      <!-- 底部 -->
      <div class="main_right_bottom">
        <!-- 热门电台 -->
        <div class="main_right_hot_station"></div>
        <!-- 热门歌手 -->
        <div class="main_right_hot_singer"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import htbutt from "@/components/button";
const input = ref('')
const leftAyy = ref([
  {
    icon: "home",
    name: "首页",
  },
  {
    icon: "ranking_list",
    name: "排行榜",
  },
  {
    icon: "song_list",
    name: "歌单",
  },
  {
    icon: "mv",
    name: "MV",
  },
  {
    icon: "singer",
    name: "歌手",
  },
  {
    icon: "my_music",
    name: "我的音乐",
  },
])
function getImage(name) {
  //动态引入图片
  return new URL(`../../assets/images/music/${name}.png`, import.meta.url).href;
}

</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;

  .main_left {
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;

    .main_left_nav {
      width: 100%;
      height: 645px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .li {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        @include bbl;
        backdrop-filter: blur(10px);
        border-radius: 6px;
        transition: transform 1s cubic-bezier(0.06, 0.64, 1, 0.24);

        .icon {
          width: 30px;
          height: 30px;
        }

        .name {
          width: 80px;
          text-align: left;
          font-size: 18px;
        }

        &:hover {
          transform: scale(1.02);
          transition: 0.5s;
          @include bbl;
        }
      }
    }
  }

  .main_right {
    width: 1400px;
    height: 1080px;
    border: 1px solid red;
    overflow-y: auto;

    .main_right_search {
      width: 100%;
      height: 110px;
      border: 1px solid red;

      .el-input {
        width: 250px;
        position: relative;
        left: 1145px;
        top: 30px;
      }
    }

    .main_right_banner {
      width: 100%;
      height: 230px;
      border: 1px solid red;

      .el-carousel__item h3 {
        color: #475669;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
        text-align: center;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }

    .main_right_hot_recommend {
      width: 100%;
      height: 420px;
      border: 1px solid red;
    }

    .main_right_new_grounding {
      width: 100%;
      height: 530px;
      border: 1px solid red;
    }

    .main_right_new_mv {
      width: 100%;
      height: 540px;
      border: 1px solid red;
    }

    .main_right_bottom {
      width: 100%;
      height: 520px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border: 1px solid red;

      .main_right_hot_station {
        width: 1100px;
        height: 100%;
        border: 1px solid red;
      }

      .main_right_hot_singer {
        width: 490px;
        height: 100%;
        border: 1px solid red;
      }
    }

  }
}
</style>
