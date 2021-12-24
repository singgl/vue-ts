<template>
  <div v-if="!item.meta.hidden">
    <template>
      <el-menu-item :index="item.name">
        <template #title>
          {{ item.meta.title }}
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Vue, Options } from "vue-class-component";
import { RouteRecordRaw } from "vue-router";
// export interface comProps {
//   path: string;
//   name: string;
//   meta: { title: string; icon: string; affix: boolean; hidden: boolean };
//   component: "";
// }
@Options({
  props: {
    item: {
      // type: Object as unknown as comProps,
      type: Array as PropType<RouteRecordRaw[]>,
      require: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
})
export default class HelloWorld extends Vue {
  basePath!: string;
  // onlyOneChild: any = null;
  // hasOneShowingChild(children = [], item: object | null): boolean {
  //   console.log(children, item);
  //   return false;
  // }
}
</script>

<style lang="scss" scoped></style>
