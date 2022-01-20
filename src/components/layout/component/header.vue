<template>
  <el-header class="header">
    <hamburger />
    <breadcrumb />
    <settings />
    Header</el-header
  >
</template>

<script lang="ts">
import hamburger from "@/components/layout/component/hamburger.vue";
import breadcrumb from "@/components/layout/component/breadcrumb.vue";
import settings from "@/components/layout/component/settings.vue";
export default {
  components: {
    hamburger,
    breadcrumb,
    settings,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  background-color: #fff !important;
  border-bottom: 1px solid #e9eff2;
  box-sizing: border-box;
  /deep/ .el-breadcrumb {
    line-height: 60px;
  }
}
</style>
