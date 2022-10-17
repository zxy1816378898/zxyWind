<template>
    <section class="main-box">
      <router-view v-slot="{ Component, route }">
        <transition name="fade-transform" mode="out-in">
          <div style="width: 100%; height: 100%" :key="route.path">
            <component :is="Component" :key="route.path" />
          </div>
        </transition>
      </router-view>
    </section>
  </template>
  
  <script setup>
  const route = useRoute();
  </script>
  
  <style lang="scss" scoped>
  .main-box {
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
  }
  </style>
  