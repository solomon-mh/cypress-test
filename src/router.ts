import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
