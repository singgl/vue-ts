<template>
  <el-container>
    <Menu />
    <el-container>
      <Header />
      <Main />
      <Footer />
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Menu from "./component/asides/menu.vue";
import Header from "./component/header.vue";
import Main from "./component/container.vue";
import Footer from "./component/footer.vue";

@Options({
  components: {
    Menu,
    Header,
    Main,
    Footer,
  },
})
export default class Container extends Vue {}
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}
.el-container {
  height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(2) {
  flex-direction: column;
}
</style>
