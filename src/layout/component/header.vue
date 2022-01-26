<template>
  <el-header class="header">
    <hamburger
      id="hamburger-container"
      class="hamburger-container"
      :is-active="data.isActive"
      @toggleClick="toggleSideBar"
    />
    <breadcrumb />
    <settings />
  </el-header>
</template>

<script lang="ts">
import hamburger from "@/layout/component/hamburger.vue";
import breadcrumb from "@/layout/component/breadcrumb.vue";
import settings from "@/layout/component/settings.vue";
import { appStore } from "@/store/modules/app.js";
import { reactive, watch } from "vue";
interface obj {
  [key: string]: any;
}
export default {
  components: {
    hamburger,
    breadcrumb,
    settings,
  },
  setup(): obj {
    const appStores = appStore();
    let data = reactive({
      isActive: false,
    });
    watch(
      () => appStores.Open,
      (to) => {
        data.isActive = to as boolean;
      },
      {
        immediate: true,
      }
    );
    function toggleSideBar() {
      console.log("header", appStores.Open);
      appStores.setOpen();
    }
    return {
      data,
      toggleSideBar,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  background-color: #fff !important;
  border-bottom: 1px solid #e9eff2;
  box-sizing: border-box;
  padding: 0;
  /deep/ .el-breadcrumb {
    line-height: 60px;
  }
  .hamburger-container {
    line-height: 60px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
}
</style>
