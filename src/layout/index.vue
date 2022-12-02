<template>
  <div class="main">
    <div class="videoContainer">
      <video
        class="fullscreenVideo"
        id="bgVid"
        playsinline=""
        autoplay=""
        muted=""
        loop=""
      >
        <source src="../assets/Pexels Videos 2530656.mp4" type="video/mp4" />
      </video>
    </div>

    <Main></Main>
  </div>
</template>

<script setup>
import Main from "./main";
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.videoContainer {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -100;
}

.videoContainer:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  z-index: -1;
  top: 0;
  left: 0;
  background: rgba(25, 29, 34, 0.65);
  background-size: cover;
}

.fullscreenVideo {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>
