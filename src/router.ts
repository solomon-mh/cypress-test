import { createRouter, createWebHistory } from "vue-router";
import AboutView from "./views/AboutView.vue";
import LoginView from "./views/LoginView.vue";

const routes = [
  { path: "/about", name: "About", component: AboutView },
  { path: "/login", name: "Login", component: LoginView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
