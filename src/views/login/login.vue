<template>
  <div class="login"></div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {
      options: ref([
        {
          label: "1",
          value: "1",
        },
      ]),
    };
  },
});
</script>

<style lang="scss" scoped></style>
