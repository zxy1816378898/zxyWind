<template>
  <div class="contain">
    <div class="time">{{ time }}</div>
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
  .time {
    width: 190px;
    height: 50px;
    font-size: 42px;
    color: #ffffff;
    letter-spacing: 3px;
    margin: 0 auto;
    padding-top: 160px;
  }
  .ipt {
    width: 350px;
    height: 50px;
    font-size: 30px;
    letter-spacing: 2px;
    margin: 0 auto;
    padding: 0 20px;
    margin-top: 30px;
    border-radius: 30px;
    z-index: 1;
    display: block;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(25px);
    color: #ffffff;
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
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
      line-height: 50px;
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
