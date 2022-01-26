<template>
  <keep-alive>
    <el-main @mouseenter="tableMouseenter" @mouseleave="tableMouseleave">
      <router-view></router-view>
    </el-main>
  </keep-alive>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class Main extends Vue {
  tableMouseenter(event: { target: any }): void {
    const table = event.target;
    table.classList.add("scrollbarStyle");
  }
  tableMouseleave(event: { target: any }): void {
    const table = event.target;
    table.classList.remove("scrollbarStyle");
  }
}
</script>

<style lang="scss" scoped></style>
