import { createRouter, createWebHistory } from "vue-router";
import communityView from "../views/community.vue";

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
