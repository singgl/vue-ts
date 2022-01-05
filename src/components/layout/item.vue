<!--
 * @Description: 菜单
 * @Autor: juest
 * @Date: 2021-12-21 11:21:42
 * @LastEditors: juest
 * @LastEditTime: 2022-01-05 14:32:07
-->
<template>
  <div>
    <template v-for="(item, index) in router" :key="index">
      <el-menu-item v-if="!item.meta.hidden" :index="item.name">
        <template #title>
          {{ item.meta.title }}
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
  props: {
    router: {
      type: Array,
    },
  },
})
export default class Item extends Vue {
  router: any;
  created(): void {
    console.log(this.router);
  }
  // onlyOneChild: any = null;
  // hasOneShowingChild(children = [], item: object | null): boolean {
  //   console.log(children, item);
  //   return false;
  // }
}
</script>

<style lang="scss" scoped></style>
