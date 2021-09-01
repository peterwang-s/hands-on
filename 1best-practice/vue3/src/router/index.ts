import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeLayout from "@/router/layout/homeLayout.vue";
import AdminLayout from "@/router/layout/adminLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeLayout,
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "Home" */ "../views/website/home.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "",
    components: AdminLayout,
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "Login" */ "../views/admin/login.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
