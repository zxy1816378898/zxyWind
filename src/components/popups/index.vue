<template>
  <teleport to="body" v-if="visible">
    <div class="mask"></div>
    <div class="pop-box">
      <div class="pop-main">
        <div class="pop-box-head">
          <div class="name">{{ title }}</div>
          <img @click="clickClose" class="close-img" :src="closeImg" alt="" />
        </div>

        <div class="pop-box-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { isPercentage } from "@/utils";
import closeImg from "@/assets/images/close.png";
const props = defineProps({
  width: {
    type: [Number, String],
    default: "",
  },
  height: {
    type: [Number, String],
    default: "",
  },
  top: {
    type: String,
    default: "7%",
  },
  left: {
    type: String,
  },
  title: {
    type: String,
    default: "弹窗",
    required: true,
  },
  visible: {
    type: Boolean,
    default: false,
  },
});

const style = computed(() => {
  return {
    ...(props.top ? { top: `${setType(props.top)}` } : {}),
    ...(props.left ? { left: `${setType(props.left)}` } : {}),
    ...(props.width ? { width: `${setType(props.width)}` } : {}),
    ...(props.height ? { height: `${setType(props.height)}` } : {}),
  };
});

const setType = (data) => {
  return isPercentage(data) ? `${data}` : `${data}px`;
};

const emits = defineEmits(["update:visible"]);
/**关闭弹窗 */
const clickClose = () => {
  emits("update:visible", false);
};
</script>

<style lang="scss" scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(#000, 0.3);
  width: 100%;
  height: 100%;
  z-index: 9997;
}
.pop-box {
  width: 950px;
  height: 650px;
  z-index: 9999;
  position: fixed;
  top: 14%;
  left: 0;
  right: 0;
  margin: auto;
}

.pop-main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: rgb(0 0 0 / 25%);
  backdrop-filter: blur(10px);
}

.pop-box-head {
  width: 100%;
  height: 85px;
  position: relative;
  .name {
    font-size: 28px;
    font-family: "HYLXJT";
    font-weight: regular;
    color: #ffffff;

    position: absolute;
    top: 20px;
    bottom: 0;
    left: 70px;
    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close-img {
    cursor: pointer;
    width: 27px;
    height: 27px;
    position: absolute;
    bottom: 30px;
    right: 30px;
    &:hover {
      transform: scale(1.21);
      transition: 0.5s;
    }
  }
}

.pop-box-content {
  width: 100%;
  height: calc(100% - 85px);
  overflow: auto;
  padding: 20px 40px 48px 40px;
  box-sizing: border-box;
}
</style>
