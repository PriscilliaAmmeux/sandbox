import home from "./pages/home.vue";
import sandbox from "./pages/sandbox.vue";
import contact from "./pages/contact.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("http://localhost:5173"),
  routes: [
    { path: "/", component: home },
    { path: "/sandbox", component: sandbox },
    { path: "/contact", component: contact },
    { path: "/information", component: information },
  ],
});

export default router;
