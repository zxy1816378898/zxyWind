import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; //引入路由
import "@/assets/fonts/font.css"; //引入字体文件
import * as echarts from "echarts"; //  引入Echarts
import "echarts-wordcloud/dist/echarts-wordcloud"; // 词云引入
import "echarts-wordcloud/dist/echarts-wordcloud.min";
import "echarts-liquidfill/src/liquidFill.js";
import "echarts-wordcloud";
import "animate.css";
import "normalize.css";


const app = createApp(App);
app.use(router);
app.echarts = echarts;
app.mount("#app"); 
