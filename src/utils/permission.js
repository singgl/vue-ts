/*
 * @Description: 路由验证
 * @Autor: juest
 * @Date: 2022-01-05 17:01:35
 */
import router from "../router";
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    const title = to.meta["title"];
    document.title = title;
  }
  next();
});
