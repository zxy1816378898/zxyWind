import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; //引入路由
import ElementPlus from "element-plus"; //引入elment plus
import "element-plus/dist/index.css"; //引入elment 样式表
import "@/assets/fonts/font.css"; //引入字体文件
import * as echarts from "echarts"; //  引入Echarts
import 'echarts-liquidfill/src/liquidFill.js'; 
import 'echarts-wordcloud';
import "animate.css";
import "normalize.css";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.echarts = echarts;
app.mount("#app");
