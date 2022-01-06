<!--
 * @Description: 面包屑
 * @Autor: juest
 * @Date: 2022-01-06 14:48:11
 * @LastEditors: juest
 * @LastEditTime: 2022-01-06 17:35:46
-->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="(item, index) in routerList"
      :key="index"
      :to="{ path: item.path }"
    >
      <span v-if="item.path === activeName">
        {{ item.meta.title }}
        {{ activeName }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
interface Data {
  [key: string]: unknown;
}
export default {
  name: "breadcrumb",
  data(): Data {
    return {
      // activeName: "",
      routerList: [],
    };
  },
  setup(): Data {
    let activeName = "";
    onBeforeRouteUpdate((to) => {
      activeName = to.path as string;
      console.log(to, activeName);
    });
    onMounted(() => {
      const route = useRouter();
      activeName = route.currentRoute.value.name as string;
      console.log("onMounted");
    });
    return {
      activeName,
    };
  },
  mounted(): void {
    const route = useRouter();
    // this.activeName = route.currentRoute.value.name as string;
    const routes = route.options.routes[0].children;
    this.routerList = routes as [];
    console.log(this, this.routerList);
  },
};
</script>

<style lang="scss" scoped></style>
