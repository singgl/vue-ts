import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/style/index.scss";
import "./utils/permission.js";
const app = createApp(App);
const test = () => {
  return "测试数据";
};
app.config.globalProperties.$Test = test;
app.use(store).use(router).use(ElementPlus).mount("#app");
