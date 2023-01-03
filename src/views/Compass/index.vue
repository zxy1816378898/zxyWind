<template>
  <div class="contain">
    <div class="time">{{ now }}</div>
    <div class="ipt" ref="ipt">
      <input
        class="input"
        style="background-color: transparent; border: 0"
        name="word"
        size="30"
        placeholder="搜索"
        autocomplete="off"
        inputmode="search"
        @blur="animateWidth('blur')"
        @focus="animateWidth('focus')"
        v-model="wd"
        @keyup="keyup($event)"
        @keydown="keydown($event)"
      />
      <ul class="list-group">
        <li
          class="list-group-item list-group-item-text"
          v-for="(item, index) in arr"
          :class="{ 'list-group-item-info': index == listIndex }"
          @click="click($event)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <htbutt></htbutt>
    <div class="quoteContainer">
      <Enyiyan />
    </div>
  </div>
</template>

<script setup>
import htbutt from "@/components/button";
import Enyiyan from "@/components/enyiyan";
//输入框变化
const ipt = ref(null);
const animateWidth = (type) => {
  ipt.value.style.width = type == "focus" ? "420px" : "320px";
};
//百度搜索
const wd = ref("");
const arr = ref([]);
const listIndex = "-1";
function keyup(event) {
  //如果我按的是上下键，那么就不发送请求了
  if (event.keyCode == 38 || event.keyCode == 40 || event.keyCode == 13) return;
  var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
  this.$http
    .jsonp(url, {
      params: {
        wd: this.wd,
      },
      jsonp: "cb",
    })
    .then((res) => {
      console.log(res);
      this.arr = res.data.s; //把百度服务器返回的数据传给arr数组
    });
}
//监听鼠标的点击事件
//如果鼠标点击某一行的文字，则点击事件中的event.explicitOriginalTarget.data代表关键词
//如果点击某一行的空白处，则点击事件中的event.explicitOriginalTarget.innerText代表关键词
//可以通过console.log(event)来查看关键词所在的位置
function click(event) {
  if (event.explicitOriginalTarget.data != undefined) {
    this.wd = event.explicitOriginalTarget.data;
    window.open("https://www.baidu.com/s?wd=" + this.wd);
  } else if (event.explicitOriginalTarget.innerText != undefined) {
    this.wd = event.explicitOriginalTarget.innerText;
    window.open("https://www.baidu.com/s?wd=" + this.wd);
  }
}
//监听键盘的事件
//如果按down，则增加当前listIndex+1，因此arr[this.listIndex]就能代表当前的词条
//我们通过对listIndex的修改来得到当前词条在arr中的索引，然后就可以得到词条的具体信息，然后发送请求

function keydown(event) {
  //下键：40 上键：38
  if (event.keyCode == 38) {
    //按的上键
    this.listIndex--;
    if (this.listIndex < 0) {
      this.listIndex = this.arr.length - 1;
    }
    this.wd = this.arr[this.listIndex];
  } else if (event.keyCode == 40) {
    //说明你按的是下键
    this.listIndex++;
    if (this.listIndex > this.arr.length - 1) {
      this.listIndex = 0;
    }
    this.wd = this.arr[this.listIndex];
  } else if (event.keyCode == 13) {
    //如果你按的是enter，那么就跳转到百度搜索结果
    window.open("https://www.baidu.com/s?wd=" + this.wd);
  }
}

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
  .quoteContainer {
    position: absolute;
    bottom: 125px;
    left: 50%;
    transform: translateX(-50%);
    width: 530px;
    height: 70px;
    padding: 15px 50px;
    border-radius: 15px;
    color: rgba(255, 255, 255, 0.9);
    font-size: small;
    text-align: center;
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
