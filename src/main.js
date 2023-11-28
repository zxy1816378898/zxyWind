import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; //引入路由
import "@/assets/fonts/font.css"; //引入字体文件
import "@/assets/fonts/iconfont.css"; // 引入图标
import * as echarts from "echarts"; //  引入Echarts
import "echarts-wordcloud/dist/echarts-wordcloud"; // 词云引入
import util from "@/utils/util";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "echarts-liquidfill/src/liquidFill.js";
import "echarts-wordcloud";
import "normalize.css";

const app = createApp(App);
app.config.globalProperties['$utils'] = util; //全局注册
app.use(router);
app.use(ElementPlus);
app.echarts = echarts;
app.mount("#app");
