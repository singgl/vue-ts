<!--
 * @Description: 菜单
 * @Autor: juest
 * @Date: 2021-12-20 10:37:54
 * @LastEditors: juest
 * @LastEditTime: 2022-01-26 10:28:15
-->
<template>
  <el-aside :class="[isCollapse ? 'HideAside' : 'OpenAside']">
    <logo />
    <el-scrollbar>
      <el-menu
        class="el-menu-vertical-demo"
        :default-active="activeMenu"
        :router="true"
        :unique-opened="true"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <item
          v-for="route in routerList"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import logo from "../logo.vue";
import item from "./item.vue";
import router from "@/router";
import { useRouter } from "vue-router";
import { appStore } from "@/store/modules/app";
@Options({
  components: {
    logo,
    item,
  },
})
export default class Aside extends Vue {
  firstName!: string;
  lastName!: string;
  // 1.初始化数据 data函数可以声明成类属性形式
  name = "测试123";
  routerList = [];
  appStores = appStore();
  // 2.computed计算属性可以声明成类方法形式
  get isCollapse(): boolean {
    console.log("menu", this.appStores.Open);
    return this.appStores.Open;
  }
  get fullName(): string {
    return this.firstName + this.lastName;
  }
  get activeMenu(): string {
    // 获取当前路由
    const route = useRouter();
    const { meta, path } = route?.currentRoute?.value;
    // console.error(meta, "------------", path);
    if (meta.activeMenu) {
      return meta.activeMenu as string;
    }
    return path;
  }
  // 生命周期钩子声明
  created(): void {
    // 获取当前路由
    // const route = useRouter();
    // this.activeMenu = route.currentRoute.value.path as string;
    const routes = router.options.routes[0].children;
    this.routerList = routes as [];
  }
  mounted(): void {
    this.firstName = "1";
    this.lastName = "2";
    this.hello();
  }
  // 3.method方法可以声明成类方法形式
  hello(): void {
    console.log(this.fullName, this.name, this.activeMenu);
  }
  handleOpen(key: string, keyPath: string): void {
    console.log(key, keyPath);
  }
  handleClose(key: string, keyPath: string): void {
    console.log(key, keyPath);
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: #fff !important;
  border-right: 1px solid #e9eff2;
  overflow: hidden;
  transition: width 0.3s;
}
.OpenAside {
  width: 240px !important;
}
.HideAside {
  width: 65px !important;
}
.el-menu-vertical-demo {
  border-right: 0;
  width: 100% !important;
  .el-menu-item.is-active {
    transition: border-color 0.3s, background-color 0.3s;
  }
}
.el-scrollbar {
  height: calc(100% - 60px) !important;
}
</style>
