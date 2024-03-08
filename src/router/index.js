import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";
import RouterBypass from "@/views/pages/RouterBypass/RouterBypass.vue";

const routes = [
  {
    path: "/",
    redirect: "/tabs/weather",
  },
  {
    path: "/home/",
    component: HomePage,
    children: [
      {
        path: "",
        redirect: "weather",
      },
      {
        path: "weather",
        component: () => import("@/views/pages/Weather/Weather.vue"),
      },
    ],
  },
  // {
  //   path: "/home",
  //   component: HomePage,
  //   children: [
  //     {
  //       path: "",
  //       redirect: "/weather",
  //     },
  //     {
  //       path: "weather",
  //       component: () => import("@/views/pages/Weather/Weather.vue"),
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
