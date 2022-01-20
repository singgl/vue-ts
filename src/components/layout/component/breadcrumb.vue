<!--
 * @Description: 面包屑
 * @Autor: juest
 * @Date: 2022-01-06 14:48:11
 * @LastEditors: juest
 * @LastEditTime: 2022-01-20 16:46:20
-->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in data.levelList" :key="index">
      <span>
        {{ item.meta.title }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { watch, reactive } from "vue";
import {
  onBeforeRouteUpdate,
  RouteLocationMatched,
  useRouter,
} from "vue-router";
interface obj {
  [key: string]: any;
}
export default {
  name: "breadcrumb",
  data(): obj {
    return {};
  },
  setup(): obj {
    // ref 监听基本数据类型
    // reactive 监听对象或数组类型数据
    let data = reactive({
      activeName: "",
      levelList: [] as RouteLocationMatched[],
    });
    // let levelList: RouteLocationMatched[] = [];
    const route = useRouter();
    onBeforeRouteUpdate((to) => {
      console.log(to, "------------------bac");
    });
    watch(
      () => route?.currentRoute?.value.path,
      (to, path) => {
        console.log(to, "watch", path);
        getBreadCrumb();
      },
      {
        immediate: true,
      }
    );
    function getBreadCrumb() {
      const { matched } = route?.currentRoute?.value;
      const list = matched.filter((item) => item.meta && item.meta.title);
      data.levelList = list;
      console.log(data, "list");
    }
    return {
      data,
      getBreadCrumb,
    };
  },
};
</script>

<style lang="scss" scoped></style>
