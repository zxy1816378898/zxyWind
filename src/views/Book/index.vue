<template>
  <div class="main-box">
    <div class="table">
      <div class="thead">
        <div class="xh">序号</div>
        <div class="cs">处室</div>
        <div class="gzry">工作人员</div>
        <div class="jdzs">接待总数</div>
        <div class="rjjdrs">日均接待人数</div>
        <div class="myd">满意度</div>
      </div>
      <div class="tbody">
        <div v-for="ritem in tableArr" class="row">
          <div class="xh">{{ ritem.xh }}</div>
          <div class="cs">{{ ritem.cs }}</div>
          <div class="gzry">{{ ritem.gzry }}</div>
          <div class="jdzs">{{ ritem.jdzs }}</div>
          <div class="rjjdrs">{{ ritem.rjjdrs }}</div>
          <div class="myd">{{ ritem.myd }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tableArr = ref([
  {
    xh: "1",
    cs: "处室1",
    gzry: "苏小红",
    jdzs: "184人",
    rjjdrs: "12人",
    myd: "89.95%",
  },
  {
    xh: "2",
    cs: "处室2",
    gzry: "江夏黄",
    jdzs: "256人",
    rjjdrs: "15人",
    myd: "87.65%",
  },
  {
    xh: "3",
    cs: "处室1",
    gzry: "万大藻",
    jdzs: "195人",
    rjjdrs: "12人",
    myd: "91.23%",
  },
  {
    xh: "4",
    cs: "处室2",
    gzry: "常如思",
    jdzs: "201人",
    rjjdrs: "13人",
    myd: "85.69%",
  },
  {
    xh: "5",
    cs: "处室1",
    gzry: "张武宇",
    jdzs: "222人",
    rjjdrs: "18人",
    myd: "87.49%",
  },
  {
    xh: "6",
    cs: "处室2",
    gzry: "马长初",
    jdzs: "189人",
    rjjdrs: "14人",
    myd: "89.63%",
  },
  {
    xh: "7",
    cs: "处室1",
    gzry: "胡玉",
    jdzs: "175人",
    rjjdrs: "11人",
    myd: "95.32%",
  },
  {
    xh: "8",
    cs: "处室2",
    gzry: "刘畅",
    jdzs: "214人",
    rjjdrs: "17人",
    myd: "91.25%",
  },
  {
    xh: "9",
    cs: "处室1",
    gzry: "睢冉",
    jdzs: "213人",
    rjjdrs: "13人",
    myd: "94.26%",
  },
  {
    xh: "10",
    cs: "处室2",
    gzry: "蒋少宇",
    jdzs: "205人",
    rjjdrs: "15人",
    myd: "89.65%",
  },
  {
    xh: "11",
    cs: "处室1",
    gzry: "苏小红",
    jdzs: "184人",
    rjjdrs: "12人",
    myd: "89.95%",
  },
]);
</script>

<style lang="scss" scoped>
.main-box {
  width: 100%;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  height: calc(100% - 105px);
  padding: 20px 45px 57px 45px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  justify-items: ccenter;
}

.table {
  width: 100%;
  height: 785px;

  .xh {
    width: 130px;
  }
  .cs,
  .gzry,
  .jdzs,
  .rjjdrs,
  .myd {
    width: 340px;
  }

  .jdzs {
    color: #ffc332 !important;
  }
  .rjjdrs {
    color: #2effae !important;
  }
  .myd {
    color: #57f1ff !important;
  }

  .thead {
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    flex-direction: row;

    div {
      height: 100%;
      background: rgba(#0d62d5, 0.6);
      border-right: 1px solid #0069d0;
      display: flex;
      justify-content: center;
      flex-direction: row;
      line-height: 70px;
      font-size: 30px;
      font-family: Source Han Sans CN, Source Han Sans CN-Bold;
      font-weight: 700;
      color: #fff;
    }
    div:nth-child(1) {
      border-left: 1px solid #0069d0;
    }
  }

  .tbody {
    width: 100%;
    height: calc(100% - 95px);
    overflow-y: auto;
    .row {
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: center;
      flex-direction: row;

      div {
        height: 100%;
        border-right: 1px solid #0069d0;
        display: flex;
        justify-content: center;
        flex-direction: row;
        line-height: 70px;
        font-size: 24px;
        font-family: Source Han Sans CN, Source Han Sans CN-Medium;
        font-weight: 500;
        color: #fff;
      }
      div:nth-child(1) {
        border-left: 1px solid #0069d0;
      }
    }
    .row:nth-child(even) {
      background: rgba(#0069d0, 0.1);
    }
  }
}

.tbody::-webkit-scrollbar {
  width: 0;
}
</style>
