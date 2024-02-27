<template>
  <div class="weather">
    <div class="item" v-for="item in weatherAyy">
      <div class="li">{{ item.city }}</div>
      <div class="li">{{ item.type }}</div>
      <div class="li">{{ item.high }}</div>
      <div class="li">{{ item.low }}</div>
    </div>
  </div>
</template>
<script setup>
import myaxios from 'axios';
const weatherAyy = ref([
  {
    city: '',
    type: '',
    high: '',
    low: '',
  },
]);

const getWeather = () => {
  myaxios.get('https://api.vvhan.com/api/weather?city=淮安').then((res) => {
    //此处地址暂时写死，后死更换
    const { data } = res;

    let newData = [
      {
        city: data.city,
        type: data.info.type,
        high: data.info.high,
        low: data.info.low,
      },
    ];
    weatherAyy.value = newData;
  });
};
getWeather();
</script>
<style lang="scss" scoped>
.weather {
  font-size: 20px;

  .item {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
