<!--
 * @Description: 子菜单
 * @Autor: juest
 * @Date: 2021-12-21 11:21:42
 * @LastEditors: juest
 * @LastEditTime: 2022-01-19 16:38:52
-->
<template>
  <!-- 一级菜单是否show -->
  <div v-if="item.meta.hidden">
    <template v-if="!hasOneShowingChild(item)">
      <el-menu-item v-if="item.meta.hidden" :index="resolvePath(item.path)">
        <template #title
          >{{ item.meta.title }}-{{ resolvePath(item.path) }}</template
        >
      </el-menu-item>
    </template>
    <template v-else>
      <el-sub-menu :index="resolvePath(item.path)">
        <template #title
          >{{ item.meta.title }}-{{ resolvePath(item.path) }}</template
        >
        <item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :base-path="resolvePath(item.path)"
          class="nest-menu"
        />
      </el-sub-menu>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import path from "path";
interface routeType {
  [key: string]: unknown;
}
@Options({
  props: {
    router: {
      type: Array,
    },
    basePath: {
      type: String,
      default: "",
    },
    item: {
      type: Object,
    },
  },
})
export default class Item extends Vue {
  router: any;
  onlyOneChild: routeType = {};
  basePath: any;
  hasOneShowingChild(item: routeType): boolean {
    const data = JSON.parse(JSON.stringify(item));
    if (!data.children) {
      return false;
    } else {
      return true;
    }
  }
  resolvePath(routePath: string): string {
    return path.resolve(this.basePath, routePath);
  }
}
</script>

<style lang="scss" scoped></style>
