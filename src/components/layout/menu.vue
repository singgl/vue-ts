<!--
 * @Description: 菜单
 * @Autor: juest
 * @Date: 2021-12-20 10:37:54
 * @LastEditors: juest
 * @LastEditTime: 2021-12-24 15:51:37
-->
<template>
  <el-aside width="250px">
    <logo />
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="activeName"
      :router="true"
      :unique-opened="true"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <item
        v-for="(route, index) in routerList"
        :key="index"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-aside>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import logo from "./logo.vue";
import item from "./item.vue";
import router from "@/router";
import { useRouter } from "vue-router";
// import { PropType } from "vue";
@Options({
  components: {
    logo,
    item,
  },
})
export default class Aside extends Vue {
  firstName!: string;
  lastName!: string;
  // 初始化数据 data可以声明成类属性形式
  activeName = "";
  isCollapse = false;
  name = "测试123";
  routerList = [];
  // routerList = [] as PropType<RouteRecordRaw[]>;
  // computed属性可以声明成类方法形式
  get fullName(): string {
    return this.firstName + this.lastName;
  }
  // 生命周期钩子声明  保留名称
  created(): void {
    // 获取当前路由
    const route = useRouter();
    console.log(
      router.options.routes[0].children,
      "99999999999999",
      route?.currentRoute?.value.name
    );
    this.activeName = route.currentRoute.value.name as string;
    const routes = router.options.routes[0].children;
    console.log(routes, "router------------");
    this.routerList = routes as [];
    console.log(this.routerList, "-------llll");
  }
  mounted(): void {
    this.firstName = "1";
    this.lastName = "2";
    this.hello();
  }
  // method方法可以声明成类方法形式
  hello(): void {
    console.log(this.fullName, this.name);
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
}
</style>
