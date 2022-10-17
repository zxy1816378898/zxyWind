<template>
  <transition-group
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__backInLeft"
    leave-active-class="animate__backOutRight"
  >
    <h2 key="1">动画效果1</h2>
    <h2 key="2">动画效果2</h2>
  </transition-group>
  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>
  <p :class="{red: !isshow,blue: isshow}" @click="isshow=!isshow">我爱云虹</p>
</template>

<script lang="ts" >
import { ref, reactive } from "vue";
export default {
  data() {
    return {
        isshow: true
            }
        }
    };

</script>
<style lang="scss" scoped>
     .red {
        color: red;
        font-size: 25px;
    }
    .blue {
        color: blue;
        font-size: 20px;
    }
</style>