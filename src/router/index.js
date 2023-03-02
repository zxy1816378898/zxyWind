import { createRouter, createWebHistory } from "vue-router"; // router.js
const routerHistory = createWebHistory(); // 开启历史模式
import Layout from '@/layout';


const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: '/home',
      component: Layout,
      redirect: 'home',
      children: [
        {
          path: '/home',
          name: '首页',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: "/zx",
          name: 'zx',
          component: () => import("@/views/Echarts/zx"),
        },
        {
          path: "/zz",
          name: 'zz',
          component: () => import("@/views/Echarts/zz"),
        },
        {
          path: "/bt",
          name: 'bt',
          component: () => import("@/views/Echarts/bt"),
        },
        {
          path: "/sq",
          name: 'sq',
          component: () => import("@/views/Echarts/sq"),
        },
        {
          path: "/cy",
          name: 'cy',
          component: () => import("@/views/Echarts/cy"),
        },
        {
          path: "/ld",
          name: 'ld',
          component: () => import("@/views/Echarts/ld"),
        },
        {
          path: "/qp",
          name: 'qp',
          component: () => import("@/views/Echarts/qp"),
        },
        {
          path: "/Translate",
          name: 'Translate',
          component: () => import("@/views/Translate/"),
        },
        {
          path: "/Map",
          name: 'Map',
          component: () => import("@/views/Map/"),
        },
        {
          path: "/Compass",
          name: 'Compass',
          component: () => import("@/views/Compass/"),
        },
        {
          path: "/Book",
          name: 'Book',
          component: () => import("@/views/Book/"),
        },
        {
          path: "/Vue3",
          name: 'Vue3',
          component: () => import("@/views/Vue3/"),
        },{
          path: "/Note",
          name: 'Note',
          component: () => import("@/views/Note/"),
        },
      ]},
  ],
});

export default router;
