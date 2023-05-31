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
      <h2 v-for="item in hot_recommend_titleAyy" :class="'isActive-' + item.code" @click="openPop(item)">{{ item.title }}
      </h2>
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
      <h2 v-for="item in new_grounding_titleAyy" :class="'isActive-' + item.code" @click="openPop2(item)">{{ item.title }}
      </h2>
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
const hot_recommend_titleAyy = ref([
  {
    title: '为您推荐',
    code: '0'
  },
  {
    title: '华语',
    code: '1'
  },
  {
    title: '流行',
    code: '1'
  },
  {
    title: '摇滚',
    code: '1'
  },
  {
    title: '电子',
    code: '1'
  },
]) //热门歌单--标题
const new_grounding_titleAyy = ref([
  {
    title: '全部',
    code: '0'
  },
  {
    title: '华语',
    code: '1'
  },
  {
    title: '欧美',
    code: '1'
  },
  {
    title: '韩国',
    code: '1'
  },
  {
    title: '日本',
    code: '1'
  },
]) //新碟上架--标题
const main_right_banner_Ayy = ref([{}]) //轮播图详情
const main_right_new_grounding_liAyy = ref([{}]) //新碟上架详情
// 点击事件
const openPop = (a) => {
  hot_recommend_titleAyy.value.forEach((e) => {
    e.code = 1;
  });
  a.code = 0;
};
const openPop2 = (a) => {
  new_grounding_titleAyy.value.forEach((e) => {
    e.code = 1;
  });
  a.code = 0;
};
onMounted(() => {
  Banner();// 轮播图
  getPlayList();//热门歌单
  getTopAlbum();//新碟上架
})

const Banner = () => {
  getBanner({}).then((res) => {
    console.log('---------------------',res);
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
    main_right_new_grounding_liAyy.value = res.data.weekData.splice(0, 12)
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
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  top: 35px;

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
    z-index: 11;

    h2 {
      font-weight: 500;
      font-size: 18px;
      position: relative;
    }

    .isActive-0::after {
      position: absolute;
      content: "";
      left: 0px;
      top: 28px;
      width: 100%;
      height: 8px;
      background: #ff641e;
      z-index: -2;
    }
  }

  .main_right_hot_recommend_box {
    width: 100%;
    height: 270px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .main_right_hot_recommend_li {
      width: 210px;
      height: 100%;
      @include bbl;
      display: flex;
      flex-direction: column;
      align-items: center;

      .img {
        position: relative;
        width: 145px;
        height: 145px;
        border-radius: 8px;
        top: 14px;
      }

      .text {
        width: 90%;
        font-size: 16px;
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
        top: 32px;
      }

      .lable {
        width: 90%;
        height: 30px;
        font-size: 14px;
        position: relative;
        top: 34px;
        color: #ff641e;
        text-align: left;
      }

      .mini_lable {
        width: 110px;
        position: absolute;
        top: 16px;
        right: 34px;
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
      position: relative;
    }

    .isActive-0::after {
      position: absolute;
      content: "";
      left: 0px;
      top: 28px;
      width: 100%;
      height: 8px;
      background: #ff641e;
      z-index: -2;
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
      width: 330px;
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
        width: 150px;
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
