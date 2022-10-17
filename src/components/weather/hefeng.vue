<template>
  <div class="weather">
    <div id="he-plugin-standard"></div>
  </div>
</template>
<script>
window.WIDGET = {
  CONFIG: {
    layout: "1",
    width: "335",
    height: "150",
    background: "5",
    dataColor: "FFFFFF",
    key: "537a90abe9ca44e1b23f7c32d4a4345e",
  },
};
import { defineComponent, ref, reactive, toRefs, onMounted } from "vue";
export default defineComponent({
  //vue3.0的写法
  setup() {
    onMounted(() => {
      weather();
    });
    const weather = () => {
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.src =
        "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0";
      document.body.appendChild(s);
    };

    return {};
  },
});
</script>
<style lang="scss" scoped>
.weather {
  padding-top: 15px;
}
</style>
