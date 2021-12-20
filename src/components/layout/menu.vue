<!--
 * @Description: 菜单
 * @Autor: juest
 * @Date: 2021-12-20 10:37:54
 * @LastEditors: juest
 * @LastEditTime: 2021-12-20 13:45:15
-->
<template>
  <el-aside width="250px">
    <logo />
    <el-menu
      class="el-menu-vertical-demo"
      default-active="2"
      :router="true"
      :unique-opened="true"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="4">
        <!-- <el-icon><setting /></el-icon> -->
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import logo from "./logo.vue";
import router from "@/router";
@Options({
  components: {
    logo,
  },
})
export default class Aside extends Vue {
  firstName!: string;
  lastName!: string;
  // 初始化数据 data可以声明成类属性形式
  isCollapse = false;
  name = "测试";
  // computed属性可以声明成类方法形式
  get fullName(): string {
    return this.firstName + this.lastName;
  }
  // 生命周期钩子声明  保留名称
  created(): void {
    console.log(router.options.routes);
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
