<template>
  <div class="yiyan">
    <div class="div_con" v-for="item in yiyanAyy">
      <div class="en">{{ item.en }}</div>
      <div class="ch">{{ item.zh }}</div>
    </div>

  </div>
</template>
<script setup>
import myaxios from "axios";
const yiyanAyy = ref([
  {
    en: "",
    zh: "",
  },
]);

const getYiyan = () => {
  myaxios.get("https://api.vvhan.com/api/en").then((res) => {
    const { data } = res.data;
    let newData = [
      {
        en: data.en,
        zh: data.zh,
      },
    ];
    yiyanAyy.value = newData;
  });
};
getYiyan();
</script>
<style lang="scss" scoped>
.yiyan {
  width: 100%;
  height: 100%;
  .div_con {
    font-size: 20px;
    text-decoration: none;
    transition: 0.3s;
    text-align: center;
    letter-spacing: 5px;

    .en {
      text-align: center;
      overflow: hidden;
    }
    .ch {
      padding-top: 15px;
      text-align: center;
      font-weight: bold;
    }
  }
  
}
</style>
