import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/components/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/index",
    component: Layout,
    children: [
      {
        path: "index",
        name: "index",
        meta: { title: "首页", icon: "", affix: true, hidden: false },
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue"),
      },
      {
        path: "/about",
        name: "about",
        meta: { title: "关于", icon: "", affix: true, hidden: false },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/404",
        name: "404",
        meta: { title: "404", icon: "", affix: true, hidden: true },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/error/404.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        meta: { hidden: true },
        component: () => import("@/views/error/404.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
