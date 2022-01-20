<!--
 * @Description: 菜单
 * @Autor: juest
 * @Date: 2021-12-20 10:37:54
 * @LastEditors: juest
 * @LastEditTime: 2022-01-20 14:25:37
-->
<template>
  <el-aside width="250px">
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
@Options({
  components: {
    logo,
    item,
  },
})
export default class Aside extends Vue {
  firstName!: string;
  lastName!: string;
  // 初始化数据 data函数可以声明成类属性形式
  isCollapse = false;
  name = "测试123";
  // activeName = "";
  routerList = [];
  // computed属性可以声明成类方法形式
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
  // method方法可以声明成类方法形式
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
  // height: 100%;
  // position: fixed;
  // top: 0;
  // bottom: 0;
  // left: 0;
  // z-index: 1001;
  overflow: hidden;
}
.el-scrollbar {
  height: calc(100% - 60px) !important;
}
</style>
