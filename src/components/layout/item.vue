<template>
  <el-menu-item index="1-1">item one</el-menu-item>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Vue, Options } from "vue-class-component";
export interface comProps {
  path: string;
  name: string;
  meta: { title: string; icon: string; affix: boolean };
  component: "";
}
@Options({
  props: {
    router: {
      type: Array as PropType<comProps[]>,
      require: true,
    },
  },
})
export default class HelloWorld extends Vue {}
</script>

<style lang="scss" scoped></style>
