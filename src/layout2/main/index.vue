<template>
  <!-- 回退按钮 -->
  <htbutt></htbutt>
  <!-- 主体 -->
  <div class="main">
    <!-- 左侧侧边栏 -->
    <div class="main_left">
      <!-- 标签 -->
      <div class="main_left_nav">

        <div class="li" v-for="item in leftAyy" @click="openPop(item)">

          <span :class="item.icon" class="icon"></span>

          <div class="name">{{ item.name }}</div>

        </div>

      </div>
    </div>
    <!-- 右侧主体 -->
    <div class="main_right">
      <section class="main_right_box">
        <router-view v-slot="{ Component, route }">
          <transition name="fade-transform" mode="out-in">
            <div style="width: 100%; height: 100%" :key="route.path">
              <component :is="Component" :key="route.path" />
            </div>
          </transition>
        </router-view>
      </section>
    </div>
  </div>
</template>
  
<script setup>
import htbutt from "@/components/button";
const router = useRouter();
// 点击事件
const openPop = (a) => {
  router.push({
    path: `/${a.url}`,
  });
};
const leftAyy = ref([
  {
    icon: "iconfont icon-shouye",
    name: "首页",
    url: "Music"
  },
  {
    icon: "iconfont icon-paihangbang",
    name: "排行榜",
    url: "ranking_list"
  },
  {
    icon: "iconfont icon-gedan",
    name: "歌单",
    url: "song_sheet"
  },
  {
    icon: "iconfont icon-MV",
    name: "MV",
    url: "mv_page"
  },
  {
    icon: "iconfont icon-geshou",
    name: "歌手",
    url: "singer_page"
  },
  {
    icon: "iconfont icon-wodeyinle",
    name: "我的音乐",
    url: "my_music"
  },
])  //左侧 侧边栏

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

    .main_right_box {
      width: 100%;
      height: 100%;
      z-index: 1;
      overflow: hidden;
    }
  }
}
</style>
  
