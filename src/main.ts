import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/style/index.scss";
const app = createApp(App);
const test = () => {
  return "测试数据";
};
app.config.globalProperties.$Test = test;
console.log(app, "main.ts");
app.use(store).use(router).use(ElementPlus).mount("#app");
