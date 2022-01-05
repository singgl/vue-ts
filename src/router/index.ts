/*
 * @Description: 路由
 * @Autor: juest
 * @Date: 2021-12-20 10:37:54
 * @LastEditors: juest
 * @LastEditTime: 2022-01-05 16:35:18
 */
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
    ],
  },
  {
    path: "/404",
    name: "404",
    meta: { title: "404", icon: "", affix: true },
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/error/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/error/404.vue"),
  },
  // {
  //   path: "/redirect",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "/redirect/:pathMatch(.*)*",
  //       component: () => import("@/views/redirect/index.vue"),
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
