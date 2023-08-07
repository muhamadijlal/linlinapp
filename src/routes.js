import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/components/Dashboard.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
