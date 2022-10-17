<template>
  <PopUps :title="title" v-model:visible="isVisible">
    <template #default>
      <div class="body">
        <div class="main" v-for="item in echartsAyy" @click="goDetail(item)">
          <div class="img">
            <img :src="getImage(item.iconurl)" class="iconli" />
          </div>
          <div class="li">
            {{ item.type }}
          </div>
        </div>
      </div>
    </template>
  </PopUps>
</template>

<script setup>
import PopUps from "@/components/popups";
import { ref } from "vue";
const title = ref("");
const router = useRouter();
const isVisible = ref(false);
const echartsAyy = ref([
  {
    type: "柱状图",
    iconurl: "zz",
    url: "zz",
  },
  {
    type: "折线图",
    iconurl: "zx",
    url: "zx",
  },
  {
    type: "饼状图",
    iconurl: "bt",
    url: "bt",
  },
  {
    type: "水球图",
    iconurl: "sq",
    url: "sq",
  },
  {
    type: "词云图",
    iconurl: "cy",
    url: "cy",
  },
  {
    type: "雷达图",
    iconurl: "ld",
    url: "ld",
  },
]);
function getImage(name) {
  //动态引入图片
  return new URL(`../../../assets/images/echarts/${name}.png`, import.meta.url)
    .href;
}

const goDetail = (e) => {
  router.push({
    path: `/${e.url}`,
  });
};

/**打开弹窗 */
const openClick = () => {
  isVisible.value = true;
};
defineExpose({ openClick });
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-items: flex-start;
  text-align: center;
  color: aliceblue;
  font-size: 20px;

}
.main {
  width: 33%;
  height: 33%;
  padding-bottom: 150px;
  .iconli {
    width: 100px;
    height: 100px;
    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
}
</style>
