/*
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-27 00:46:18
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-10-28 20:58:15
 * @FilePath: \novelai-tagdictionary-webui\src\router\index.ts
 * @Description:
 */
import { createRouter, createWebHistory } from "vue-router";
import communityView from "./routes/community.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/community",
    },
    {
      path: "/community",
      name: "community",
      component: communityView,
    },
  ],
});

export default router;
