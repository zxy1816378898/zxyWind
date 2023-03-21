<template>
  <!-- 主体 -->
  <div class="main">
    <!-- 右侧主体 -->
    <div class="main_right">
      <!-- 搜索框 -->
      <div class="main_right_search">
        <el-input v-model="input" class="w-50 m-2" size="large" placeholder="请输入歌手、歌名、歌词或专辑" />
      </div>
      <!-- 轮播图 -->
      <div class="main_right_banner">
        <el-carousel :interval="4000" type="card">
          <el-carousel-item v-for="item in main_right_banner_Ayy" :key="item">
            <img :src="`${item.imageUrl}`" class="banner_image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 热门推荐 -->
      <div class=" main_right_hot_recommend">

        <div class="main_right_hot_recommend_title">热门推荐
          <h2>华语</h2>
          <h2>流行</h2>
          <h2>摇滚</h2>
          <h2>电子</h2>
        </div>

        <div class="main_right_hot_recommend_box">

          <div class="main_right_hot_recommend_li" v-for="item in hot_recommend_liAyy">

            <img class="img" :src="`${item.coverImgUrl}`" />

            <div class="text">{{ item.description }}</div>

            <div class="lable">#{{ item.tags[0] }} #{{ item.tags[1] }} #{{ item.tags[2] }}</div>

            <div class="mini_lable">
              <span class="iconfont icon-github"></span>
              {{ playCount_W }}万/{{ item.trackCount }}首

            </div>

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
import { getBanner, playList } from '@/api/http.js';
const input = ref('');
const playCount_W = ref('')
const hot_recommend_liAyy = ref([]) // 热门歌单
const main_right_banner_Ayy = ref([{}]) //轮播图详情

onMounted(() => {
  Banner();// 轮播图
  getPlayList();//热门歌单
})

const Banner = () => {
  getBanner({}).then((res) => {
    main_right_banner_Ayy.value = res.data.banners
  });
};

const getPlayList = () => {
  playList({}).then((res) => {
    hot_recommend_liAyy.value = res.data.playlists
    for (let i = 0; i < res.data.playlists.length; i++) {
      playCount_W.value = (res.data.playlists[i].playCount / 10000).toFixed(2);
    }
  });
};


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
    overflow-y: auto;

    .main_right_search {
      width: 100%;
      height: 110px;


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

      :deep(.el-carousel__container) {
        width: 92%;
        height: 230px;
        margin: 0 4%;
      }

      :deep(.el-carousel__mask) {
        background-color: rgba(0, 0, 0, 0.01)
      }

      .banner_image {
        width: 570px;
        height: 200px;
        border-radius: 8px;
      }
    }

    .main_right_hot_recommend {
      width: 100%;
      height: 420px;
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

          .mini_lable {
            width: 100px;
            position: absolute;
            top: 25px;
            right: 30px;
            line-height: 30px;
            border-radius: 0 4px 0 0;
            background: -moz-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .5) 97%, rgba(0, 0, 0, .5) 100%);
            background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .5) 97%, rgba(0, 0, 0, .5) 100%);
            background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .5) 97%, rgba(0, 0, 0, .5) 100%);
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
