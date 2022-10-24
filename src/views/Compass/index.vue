<template>
  <div class="contain">
    <div class="time">{{ time }}</div>
    <div class="ipt">
      <input class="input" style="background-color: transparent; border: 0" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

interface dataType {
  date: string;

  time: string;

  week: string;
}

export default defineComponent({
  name: "GlobalHeader",

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
.contain {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(0 0 0 / 15%);
  .time {
    width: 160px;
    height: 50px;
    font-size: 30px;
    color: #ffffff;
    letter-spacing: 3px;
    margin: 0 auto;
    padding-top: 120px;
  }
  .ipt {
    width: 260px;
    height: 50px;
    font-size: 30px;
    letter-spacing: 2px;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 30px;
    z-index: 1;
    display: block;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;

    &:hover {
      width: 460px;
      transform: scale(1.02);
      transition: 0.5s;
      background-color: rgba(255, 255, 255, 0.484);
    }
    .input {
      width: 260px;
      transition: all 0.3s ease-in-out;
      background-color: transparent;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 20px;
      &:hover {
        width: 360px;
        line-height: 40px;
      }
    }
  }
  textarea:focus {
    outline: none;
  }
  input:focus {
    outline: none;
  }
}
</style>
