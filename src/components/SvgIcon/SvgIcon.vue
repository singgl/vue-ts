<!--
 * @Description: svg
 * @Autor: juest
 * @Date: 2022-01-25 16:50:52
 * @LastEditors: juest
 * @LastEditTime: 2022-01-26 15:20:39
-->
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { computed, SetupContext } from "vue";
interface obj {
  [key: string]: any;
}
export default {
  name: "svgIcon",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },
  setup(props: obj, context: SetupContext): obj {
    console.log(props.iconClass, context);
    const iconName = computed(() => {
      return `#icon-${props.iconClass}`;
    });
    const svgClass = computed(() => {
      if (props.className) {
        return "svg-icon " + props.className;
      } else {
        return "svg-icon";
      }
    });
    return {
      iconName,
      svgClass,
    };
  },
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  padding-right: 10px;
  fill: currentColor;
  stroke: currentColor;
  overflow: hidden;
}
</style>
