/*
 * @Description: 路由
 * @Autor: juest
 * @Date: 2021-12-20 10:37:54
 * @LastEditors: juest
 * @LastEditTime: 2022-01-18 17:38:31
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/components/layout/index.vue";
import levelLayout from "@/components/layout/levelLayout.vue";

const jest = [
  {
    path: "jest-index",
    name: "jest-index",
    meta: {
      title: "测试1",
      icon: "",
      affix: true,
      activeMenu: "/about1/about2",
      hidden: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/jest.vue"),
  },
];

const jest1 = [
  {
    path: "jutty-index",
    name: "jutty-index",
    meta: {
      title: "测试3",
      icon: "",
      affix: true,
      activeMenu: "/about1/about3/about4",
      hidden: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/test.vue"),
  },
];

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/index",
    component: Layout,
    children: [
      {
        path: "/index",
        name: "index",
        meta: { title: "首页", icon: "", affix: true, hidden: true },
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue"),
      },
      {
        path: "/about",
        name: "about",
        meta: { title: "关于", icon: "", affix: true, hidden: true },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/jest",
        name: "jest",
        meta: { title: "测试", icon: "", affix: true, hidden: true },
        redirect: "noRedirect",
        component: levelLayout,
        children: [
          ...jest,
          {
            path: "jutty",
            name: "jutty",
            redirect: "noRedirect",
            component: levelLayout,
            meta: {
              title: "测试2",
              hidden: true,
            },
            children: [...jest1],
          },
        ],
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    meta: { title: "404", icon: "", affix: true, hidden: false },
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
