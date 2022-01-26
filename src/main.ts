import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import "./registerServiceWorker";
import "element-plus/dist/index.css";
import "@/style/index.scss";
import "./utils/permission.js";
import "./icons";
const app = createApp(App);
const test = () => {
  return "测试数据";
};
import SvgIcon from "./components/SvgIcon/SvgIcon.vue";
app.component("svg-icon", SvgIcon);
app.config.globalProperties.$Test = test;
app.use(createPinia());
app.use(router).use(ElementPlus).mount("#app");
