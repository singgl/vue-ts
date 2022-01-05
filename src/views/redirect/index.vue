<script lang="ts">
import { useRouter } from "vue-router";
export default {
  created(): void {
    // const { params, query } = this.$route;
    const route = useRouter();
    // const { path } = params;
    console.log("哈哈哈重定向", route);
    // this.$router.replace({ path: "/" + path, query });
  },
  render: function (h: () => any): void {
    return h(); // avoid warning message
  },
};
</script>
