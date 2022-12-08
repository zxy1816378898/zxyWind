<template>
  <div class="contain">
    <div class="time">{{ now }}</div>
    <div class="ipt">
      <input
        class="input"
        style="background-color: transparent; border: 0"
        name="word"
        size="30"
        placeholder="搜索"
        autocomplete="off"
        inputmode="search"
      />
    </div>
    <htbutt></htbutt>
  </div>
</template>

<script setup>
import htbutt from "@/components/button";
// 页面初始化
onMounted(() => {
  setInterval(() => {
    getTime();
  }, 0);
});

const now = ref("");
//时分秒
const getTime = () => {
  let hh = new Date().getHours();
  let mm =
    new Date().getMinutes() < 10
      ? "0" + new Date().getMinutes()
      : new Date().getMinutes();
  let ss =
    new Date().getSeconds() < 10
      ? "0" + new Date().getSeconds()
      : new Date().getSeconds();

  now.value = hh + ":" + mm; //+ ":"+ ss
};
</script>

<style scoped lang="scss">
.contain {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .time {
    width: 120px;
    height: 50px;
    font-size: 42px;
    color: #ffffff;
    letter-spacing: 3px;
    margin: 0 auto;
    padding-top: 160px;
  }
  .ipt {
    width: 350px;
    height: 45px;
    font-size: 30px;
    letter-spacing: 2px;
    margin: 0 auto;
    padding: 0 20px;
    margin-top: 25px;
    border-radius: 30px;
    z-index: 1;
    display: block;
    @include bbl;
    color: #ffffff;

    transition: color 0.25s, background-color 0.25s, box-shadow 0.25s,
      left 0.25s, opacity 0.25s, top 0.25s, width 0.25s;

    &:hover {
      width: 460px;
      transform: scale(1.02);
      transition: 0.5s;
      background-color: rgba(255, 255, 255, 0.484);
    }
    .input {
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in;
      transition: all 0.3s ease-in-out;
      background-color: transparent;
      text-align: center;
      font-size: 20px;
      outline: 0;
      border: none;
      color: inherit;
      background-color: transparent;
      &:hover {
        width: 100%;
      }
    }
  }
  textarea:focus {
    outline: none;
  }
  input:focus {
    outline: none;
  }
  input::-webkit-input-placeholder {
    color: #ffff;
  }
  input:focus::-webkit-input-placeholder {
    text-indent: -999em;
    z-index: -20;
  }
}
</style>
