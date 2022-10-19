<template>
  <div class="globalHeader">
    <div class="date">
      <div class="time">{{ time }}</div>
      <div class="dateTime">
        <div>{{ date }}</div>
        <div>{{ week }}</div>
      </div>
    </div>
    <Weather></Weather>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Weather from "../weather/index.vue"; // 引入天气组件
interface dataType {
  date: string;

  time: string;

  week: string;
}

export default defineComponent({
  name: "GlobalHeader",
  components: {
    Weather,
  },
  setup() {
    const list: any[] = [];

    const state: dataType = reactive({
      date: "",

      time: "",

      week: "",

      showIndex: 0,
    });

    // 获取时间接口

    const getTime = async () => {
      var myDate = new Date();

      let month = (myDate.getMonth() + 1).toString().padStart(2, "0");

      let day = myDate.getDate().toString().padStart(2, "0");

      let hour = myDate.getHours().toString().padStart(2, "0");

      let minutes = myDate.getMinutes().toString().padStart(2, "0");

      let seconed = myDate.getSeconds().toString().padStart(2, "0");

      state.date = myDate.getFullYear() + "-" + month + "-" + day;

      state.time = hour + ":" + minutes + ":" + seconed;
    };

    // 获取当前星期几

    const getWeekDate = () => {
      var now = new Date();

      var day = now.getDay();

      var weeks = [
        "星期日",

        "星期一",

        "星期二",

        "星期三",

        "星期四",

        "星期五",

        "星期六",
      ];

      state.week = weeks[day];
    };

    getTime();

    getWeekDate();

    setInterval(() => {
      getWeekDate();
    }, 1000 * 60 * 60 * 24);

    setInterval(() => {
      getTime();
    }, 1000);

    return {
      ...toRefs(state),
      list,
    };
  },
});
</script>

<style scoped lang="scss">
.globalHeader {
  position: absolute;
  top: 0;
  width: 100%;
  height: 89%;
  padding-top: 20px;

  .date {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .time {
      position: absolute;
      font-size: 3.5rem;
      font-family: "UnidreamLED" !important;
      color: #ffffff;
      letter-spacing: 2px;
      margin-top: 35px;
      margin-left: 30%;
    }
    .dateTime {
      width: 100%;
      position: absolute;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      div {
        font-size: 1.35rem;
        color: #ffffff;
        letter-spacing: 3px;
      }
    }
  }
  .weather {
    width: 100%;
    height: 30%;
    line-height: 200%;
  }
}
</style>
