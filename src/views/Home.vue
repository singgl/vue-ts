<template>
  <div class="home" ref="root">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <span>{{ $Test() }}</span>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { getCurrentInstance, ref } from "vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  created(): void {
    console.log(this, "-----1-------");
    const root = ref();
    console.error(root);
  }
  mounted(): void {
    console.log(this, "-----2-------");
    this.hello();
  }
  hello(): string {
    // 全局globalProperties变量
    const internalInstance = getCurrentInstance();
    const config = internalInstance?.appContext.config.globalProperties;
    console.log(config?.$Test(), "------========", config);
    return "哈哈";
  }
}
</script>
