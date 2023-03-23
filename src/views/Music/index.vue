<template>
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
          <span class="iconfont icon-erji"></span>
          {{ playCount_W }}万/{{ item.trackCount }}首

        </div>

      </div>

    </div>
  </div>
  <!-- 新碟上架 -->
  <div class="main_right_new_grounding">

    <div class="main_right_new_grounding_title">新碟上架
      <h2>全部</h2>
      <h2>华语</h2>
      <h2>欧美</h2>
      <h2>韩国</h2>
      <h2>日本</h2>
    </div>

    <div class="main_right_new_grounding_box">

      <div class="main_right_new_grounding_li" v-for="item in main_right_new_grounding_liAyy">

        <img class="img" :src="`${item.blurPicUrl}`" />

        <div class="lable">

          <div class="name">{{ item.name }}</div>

          <div class="company">{{ item.company }}</div>

        </div>


      </div>

    </div>

  </div>
</template>

<script setup>
import { getBanner, playList, topAlbum } from '@/api/http.js';
const playCount_W = ref('')
const hot_recommend_liAyy = ref([]) // 热门歌单
const main_right_banner_Ayy = ref([{}]) //轮播图详情
const main_right_new_grounding_liAyy = ref([{}]) //新碟上架详情
onMounted(() => {
  Banner();// 轮播图
  getPlayList();//热门歌单
  getTopAlbum();//新碟上架
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

const getTopAlbum = () => {
  topAlbum({}).then((res) => {
    main_right_new_grounding_liAyy.value = res.data.weekData.splice(0, 9)
  });
};

</script>
<style lang="scss" scoped>

    .main_right_banner {
      width: 100%;
      height: 230px;
      @include bbl;

      :deep(.el-carousel__container) {
        width: 92%;
        height: 230px;
        margin: 1% 4% 0 4%;

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
      height: 405px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      top: 30px;

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
            width: 110px;
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
      height: 480px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      top: 50px;

      .main_right_new_grounding_title {
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

      .main_right_new_grounding_box {
        width: 100%;
        height: 420px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;

        .main_right_new_grounding_li {
          width: 380px;
          height: 120px;
          @include bbl;
          display: flex;
          flex-direction: row;
          align-items: center;

          img {
            width: 100px;
            height: 100px;
            position: relative;
            border-radius: 8px;
            left: 5%;
          }

          &::after {
            display: inline-block;
            content: '';
            position: absolute;
            top: 10px;
            right: 25px;
            width: 83%;
            height: 83%;
            background: url(../../assets/images/vinyl_record.png) no-repeat;
            background-size: contain;
            transition: all .4s linear;
            z-index: -1;
          }

          .lable {
            width: 200px;
            height: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-all;
            position: relative;
            left: 20%;
            font-size: 18px;

            .name {
              width: 200px;
              height: 40%;
              text-align: left;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              word-break: break-all;
              color: #fff;
              position: relative;
              top: 20px;
            }

            .company {
              @extend .name;
              color: rgb(208, 212, 195);
            }
          }


        }
      }

    }
  

</style>
