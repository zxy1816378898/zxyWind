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
      ]},
  ],
});

export default router;
