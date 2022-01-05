<!--
 * @Description: main
 * @Autor: juest
 * @Date: 2021-12-20 10:37:54
 * @LastEditors: juest
 * @LastEditTime: 2022-01-05 13:51:54
-->
<template>
  <div class="home" ref="root">
    <span>{{ $Test() }}</span>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { getCurrentInstance } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  created(): void {
    console.log(this, "-----1-数据初始化,dom未渲染------");
  }
  mounted(): void {
    console.log(this, "-----2-dom渲染------");
    this.hello();
  }
  hello(): string {
    // 获取全局globalProperties变量
    const internalInstance = getCurrentInstance();
    const config = internalInstance?.appContext.config.globalProperties;
    console.log(config?.$Test(), "------========", config);
    return "哈哈";
  }
}
</script>
