import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"; // router.js
// const routerHistory = createWebHistory(); // 开启历史模式
import Layout from "@/layout";
import Layout2 from "@/layout2";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Layout,
      redirect: "home",
      children: [
        {
          path: "/home",
          name: "首页",
          component: () => import("@/views/Home/index.vue"),
        },
        {
          path: "/zx",
          name: "zx",
          component: () => import("@/views/Echarts/zx"),
        },
        {
          path: "/zz",
          name: "zz",
          component: () => import("@/views/Echarts/zz"),
        },
        {
          path: "/bt",
          name: "bt",
          component: () => import("@/views/Echarts/bt"),
        },
        {
          path: "/sq",
          name: "sq",
          component: () => import("@/views/Echarts/sq"),
        },
        {
          path: "/cy",
          name: "cy",
          component: () => import("@/views/Echarts/cy"),
        },
        {
          path: "/ld",
          name: "ld",
          component: () => import("@/views/Echarts/ld"),
        },
        {
          path: "/qp",
          name: "qp",
          component: () => import("@/views/Echarts/qp"),
        },
        {
          path: "/Translate",
          name: "Translate",
          component: () => import("@/views/Translate/"),
        },
        {
          path: "/Map",
          name: "Map",
          component: () => import("@/views/Map/"),
        },
        {
          path: "/Compass",
          name: "Compass",
          component: () => import("@/views/Compass/"),
        },
        {
          path: "/Book",
          name: "Book",
          component: () => import("@/views/Book/"),
        },
        {
          path: "/Music",
          name: "Music",
          component: () => import("@/views/Music/"),
        },
        {
          path: "/Note",
          name: "Note",
          component: () => import("@/views/Note/"),
        },
      ],
    },
    // 音乐
    {
      path: "/home",
      component: Layout2,
      redirect: "Music",
      children: [
        {
          path: "/ranking_list",
          name: "排行榜",
          component: () => import("@/views/Music/ranking_list/index.vue"),
        },
        {
          path: "/Music",
          name: "Music",
          component: () => import("@/views/Music/"),
        },
        {
          path: "/song_sheet",
          name: "歌单",
          component: () => import("@/views/Music/song_sheet/index.vue"),
        },
        {
          path: "/mv_page",
          name: "MV",
          component: () => import("@/views/Music/mv_page/index.vue"),
        },

        {
          path: "/singer_page",
          name: "歌手",
          component: () => import("@/views/Music/singer_page/index.vue"),
        },
        {
          path: "/my_music",
          name: "我的音乐",
          component: () => import("@/views/Music/my_music/index.vue"),
        },
      ],
    },
    // 地图
    {
      path: "/home",
      component: Layout,
      redirect: "Map",
      children: [
        {
          path: "/Map",
          name: "Map",
          component: () => import("@/views/Map/"),
        },
        {
          path: "/EchartsMap",
          name: "下钻地图",
          component: () => import("@/views/Map/EchartsMap/index.vue"),
        },
        {
          path: "/GeneralMap",
          name: "普通地图",
          component: () => import("@/views/Map/GeneralMap/index.vue"),
        },
      ],
    },

  ],
});

export default router;
