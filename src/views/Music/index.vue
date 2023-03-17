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

          <span :class="item.icon" class="icon"></span>

          <div class="name">{{ item.name }}</div>

        </div>

      </div>
    </div>
    <!-- 右侧主体 -->
    <div class="main_right">
      <!-- 搜索框 -->
      <div class="main_right_search">
        <el-input v-model="input" class="w-50 m-2" size="large" placeholder="请输入歌手、歌名、歌词或专辑" />
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
      <div class="main_right_hot_recommend">

        <div class="main_right_hot_recommend_title">热门推荐
          <h2>华语</h2>
          <h2>流行</h2>
          <h2>摇滚</h2>
          <h2>电子</h2>
          <span></span>
        </div>

        <div class="main_right_hot_recommend_box">

          <div class="main_right_hot_recommend_li" v-for="item in hot_recommend_liAyy">

            <img class="img" :src="getImage(`${item.pic}`)" />

            <div class="text">{{ item.text }}</div>

            <div class="lable">{{ item.lable }}</div>

          </div>

        </div>

      </div>
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
    icon: "iconfont icon-shouye",
    name: "首页",
  },
  {
    icon: "iconfont icon-paihangbang",
    name: "排行榜",
  },
  {
    icon: "iconfont icon-gedan",
    name: "歌单",
  },
  {
    icon: "iconfont icon-MV",
    name: "MV",
  },
  {
    icon: "iconfont icon-geshou",
    name: "歌手",
  },
  {
    icon: "iconfont icon-wodeyinle",
    name: "我的音乐",
  },
])
const hot_recommend_liAyy = ([
  {
    pic: "img1",
    text: "2023网络超好听流行歌曲推荐(更新快)",
    lable: "#华语 #流行 #网络歌曲"
  },
  {
    pic: "img2",
    text: "一直不喜欢，纷纷前来梨园踏青观景",
    lable: "#华语 #流行 #网络歌曲"
  },
  {
    pic: "img3",
    text: "送给每个因为爱情向现实抗争过的人",
    lable: "#华语 #流行 #网络歌曲"
  },
  {
    pic: "img4",
    text: "【日系】当古典的交响乐遇上鲜活的ACG",
    lable: "#华语 #流行 #网络歌曲"
  },
  {
    pic: "img5",
    text: "没有动态的日子，都在认真生活",
    lable: "#华语 #流行 #网络歌曲"
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
          font-size: 27px;
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
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .main_right_hot_recommend_title {
        width: 35%;
        height: 50px;
        font-size: 28px;
        font-weight: 700;
        line-height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        color: aliceblue;

        h2 {
          font-weight: 500;
          font-size: 18px;
        }

        h2:hover {
          color: #0FF;
        }

        & span {
          width: 115px;
          height: 12px;
          position: absolute;
          background: #0FF;
          opacity: 0.6;
          left: 487px;
          top: 380px;
          z-index: -1;
        }
      }

      .main_right_hot_recommend_box {
        width: 100%;
        height: 340px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .main_right_hot_recommend_li {
          width: 260px;
          height: 100%;
          @include bbl;
          display: flex;
          flex-direction: column;
          align-items: center;

          .img {
            position: relative;
            width: 200px;
            height: 200px;
            border-radius: 8px;
            top: 25px;
          }

          .text {
            width: 90%;
            font-size: 18px;
            height: 60px;
            line-height: 30px;
            text-align: left;
            font-weight: 400;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-all;
            position: relative;
            top: 40px;
          }

          .lable {
            width: 90%;
            height: 30px;
            font-size: 14px;
            position: relative;
            top: 50px;
            color: #0FF;
            text-align: left;

          }

          &:hover {
            transform: scale(1.02);
            transition: 0.5s;
            @include bbl;
          }
        }
      }
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
