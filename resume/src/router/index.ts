import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const HelloWorld = () => import("../components/HelloWorld.vue");

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "login", component: HelloWorld },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
