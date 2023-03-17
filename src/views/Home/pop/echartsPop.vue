<template>
  <PopUps :title="title" v-model:visible="isVisible">
    <template #default>
      <div class="body">
        <div class="main" v-for="item in echartsAyy" @click="goDetail(item)">
          <div class="img">
            <span :class="item.icon" class="iconli"></span>
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
    icon: "iconfont icon-zhuzhuangtu",
    url: "zz",
  },
  {
    type: "折线图",
    icon: "iconfont icon-tubiao_zhexiantu",
    url: "zx",
  },
  {
    type: "饼状图",
    icon: "iconfont icon-bingzhuangtu",
    url: "bt",
  },
  {
    type: "水球图",
    icon: "iconfont icon-shuiqiutu",
    url: "sq",
  },
  {
    type: "词云图",
    icon: "iconfont icon-ciyuntu",
    url: "cy",
  },
  {
    type: "雷达图",
    icon: "iconfont icon-leidatu",
    url: "ld",
  },
  {
    type: "气泡图",
    icon: "iconfont icon-qipao",
    url: "qp",
  },
]);

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
  height: 100%;
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
    font-size: 60px;

    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
}
</style>
