<template>
  <!-- 主体 -->
  <div class="main">
    <!-- 左侧侧边栏 -->
    <div class="main_left">
      <htbutt/>
      <!-- 标签 -->
      <div class="main_left_nav">

        <div class="li" v-for="item in leftAyy" :class="'isActive-' + item.code" @click="openPop(item)">

          <span :class="item.icon" class="icon"></span>

          <div class="name">{{ item.name }}</div>

        </div>

      </div>
    </div>
    <!-- 右侧主体 -->
    <div class="main_right">

      <router-view v-slot="{ Component, route }">

        <div class="main_right_box" :key="route.path">
          <!-- 搜索框 -->
          <div class="main_right_search">
            <el-input v-model="input" class="w-50 m-2" size="large" placeholder="请输入歌手、歌名、歌词或专辑" />
          </div>
          <component :is="Component" :key="route.path" />

        </div>

      </router-view>


    </div>
  </div>
</template>
  
<script setup>
import { watch } from 'vue';
import htbutt from "@/components/button";
const router = useRouter();
// 点击事件
const openPop = (a) => {
  leftAyy.value.forEach((e) => {
    e.code = 1;
  });
  a.code = 0;
  router.push({
    path: `${a.url}`,
  });
};



const leftAyy = ref([
  {
    icon: "iconfont icon-shouye",
    name: "首页",
    url: "/Music",
    code: '1'
  },
  {
    icon: "iconfont icon-paihangbang",
    name: "排行榜",
    url: "/ranking_list",
    code: '1'
  },
  {
    icon: "iconfont icon-gedan",
    name: "歌单",
    url: "/song_sheet",
    code: '1'
  },
  {
    icon: "iconfont icon-MV",
    name: "MV",
    url: "/mv_page",
    code: '1'
  },
  {
    icon: "iconfont icon-geshou",
    name: "歌手",
    url: "/singer_page",
    code: '1'
  },
  // {
  //   icon: "iconfont icon-wodeyinle",
  //   name: "我的音乐",
  //   url: "my_music",
  //   code: '1'
  // },
])  //左侧 侧边栏

watch(
  () => router.currentRoute.value,
  (n) => { 
    console.log(n);
    leftAyy.value.forEach(i=>{
      if(i.url==n.path){
        i.code = 0;
      }
    })
  },
  {
    immediate: true
  }
)
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  backdrop-filter: blur(3px);

  .isActive {
    color: red;
  }

  .main_left {
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 35px;

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
        cursor: pointer;

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

      .isActive-0 {
        background-color: rgba(#ff641e, 0.6) !important;
      }
    }
  }

  .main_right {
    width: 1500px;
    height: 1080px;
    position: relative;
    padding-right: 35px;

    .main_right_box {
      width: 100%;
      height: 100%;
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


    }
  }
}
</style>
  
