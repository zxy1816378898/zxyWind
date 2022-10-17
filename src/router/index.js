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
          component: () => import("@/views/Echarts/zx.vue"),
        },
        {
          path: "/zz",
          name: 'zz',
          component: () => import("@/views/Echarts/zz.vue"),
        },
        {
          path: "/bt",
          name: 'bt',
          component: () => import("@/views/Echarts/bt.vue"),
        },
        {
          path: "/sq",
          name: 'sq',
          component: () => import("@/views/Echarts/sq.vue"),
        },
        {
          path: "/cy",
          name: 'cy',
          component: () => import("@/views/Echarts/cy.vue"),
        },
        {
          path: "/ld",
          name: 'ld',
          component: () => import("@/views/Echarts/ld.vue"),
        },
      ]},
  ],
});

export default router;
