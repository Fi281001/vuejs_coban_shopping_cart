import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/components/Shoppingcart.vue"),
      // import ShoppingCart from "@/components/Shoppingcart.vue";
    },
  ],
});

export default router;
