<template>
  <div class="box">
    <div class="li" v-for="item in tableAyy">
      <img class="bgImg" :src="getImage(`${item.iconurl}`)" />
      <img class="emoji" :src="getImage(`${item.emoji}`)" />
      <img class="boxImg" :src="getImage(`${item.box}`)" />
      <div class="box-text" :class="'text-' + item.id">
        {{ item.text }}
        <br />
        <span>{{ item.num }}</span>
        <p>{{ item.bfb }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
function getImage(name) {
  //动态引入图片
  return new URL(`../../assets/images/Vue-3/${name}.png`, import.meta.url).href;
}
const tableAyy = ref([
  {
    id: "1",
    iconurl: "icon-1",
    emoji: "fcmy",
    box: "box-1",
    text: "非常满意",
    num: "3",
    bfb: "42%",
  },
  {
    id: "2",
    iconurl: "icon-2",
    emoji: "my",
    box: "box-2",
    text: "满意",
    num: "4",
    bfb: "58%",
  },
  {
    id: "3",
    iconurl: "icon-3",
    emoji: "jbmy",
    box: "box-3",
    text: "基本满意",
    num: "0",
    bfb: "0%",
  },
  {
    id: "4",
    iconurl: "icon-4",
    emoji: "bmy",
    box: "box-4",
    text: "非常满意",
    num: "0",
    bfb: "0%",
  },
  {
    id: "5",
    iconurl: "icon-5",
    emoji: "fcbmy",
    box: "box-5",
    text: "非常不满意",
    num: "0",
    bfb: "0%",
  },
]);
</script>
<style lang="scss" scoped>
.box {
  position: absolute;
  width: 1088px;
  height: 354px;
  margin-left: 25%;
  margin-top: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .li {
    position: relative;
    width: 188px;
    height: 350px;

    .bgImg {
      z-index: -1;
    }

    .emoji {
      position: absolute;
      width: 49px;
      height: 48px;
      margin-top: 40px;
      margin-left: -120px;
      z-index: 2;
    }

    .boxImg {
      position: absolute;
      margin-top: 250px;
      margin-left: -177px;
      z-index: 2;
    }

    .box-text {
      text-align: center;
      margin-top: -232px;
      font-size: 30px;
      font-family: FZZhengHeiS-M-GB, FZZhengHeiS-M-GB-Regular;
      font-weight: 400;
    }

    & span {
      font-size: 48px;
      font-family: Handel Gothic BT, Handel Gothic BT-Regular;
      font-weight: 400;
      text-align: center;
      color: #00e1fb;
      line-height: 70px;
    }

    & p {
      font-size: 48px;
      font-family: Handel Gothic BT, Handel Gothic BT-Regular;
      font-weight: 400;
      text-align: center;
      color: #00e1fb;
      line-height: 88px;
    }
    .text {
      &-1 {
        color: #33db81;
        background-image: -webkit-linear-gradient(
          top,
          #64a6ed,
          #91ccff 0%,
          #f1f9ff 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &-2 {
        color: #33db81;
        background-image: -webkit-linear-gradient(
          top,
          #33db81,
          #33db81 0%,
          #f1f9ff 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &-3 {
        background-image: -webkit-linear-gradient(
          top,
          #fae235,
          #fae235 0%,
          #f1f9ff 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &-4 {
        background-image: -webkit-linear-gradient(
          top,
          #c596f9,
          #c596f9 0%,
          #f1f9ff 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &-5 {
        background-image: -webkit-linear-gradient(
          top,
          #ff6e6c,
          #ff6e6c 0%,
          #f1f9ff 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>
