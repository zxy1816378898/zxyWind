<template>
  <div class="yiyan">
    <div class="div_con" v-for="item in yiyanAyy">
      <div class="hitokoto">{{ item.hitokoto }}</div>
      <div class="from">- [ {{ item.from }} ]</div>
    </div>
  </div>
</template>
<script setup>
import myaxios from "axios";
const yiyanAyy = ref([
  {
    hitokoto: "",
    from: "",
  },
]);

const getYiyan = () => {
  myaxios.get("https://v1.hitokoto.cn/").then((res) => {
    const { data } = res;
    if (res.data.hitokoto.length <= 18) {
      let newData = [
        {
          hitokoto: data.hitokoto,
          from: data.from,
        },
      ];
      yiyanAyy.value = newData;
    }
    else{
      let newData = [
        {
          hitokoto: '永远相信美好的事即将发生',
          from: '雷军',
        },
      ];
      yiyanAyy.value = newData;
    }

  });
};
getYiyan();
</script>
<style lang="scss" scoped>
.yiyan {
  width: 100%;
  height: 100%;

  .div_con {
    width: 95%;
    height: 95%;
    font-size: 18px;
    text-decoration: none;
    transition: 0.3s;
    text-align: center;
    letter-spacing: 5px;

    .hitokoto {
      text-indent: 2em;
      padding-top: 30px;
      overflow: hidden;
    }

    .from {
      padding-top: 40px;
      text-align: right;
      padding-right: 10px;
      font-weight: bold;
    }
  }
}
</style>
