import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomeNavigation from "../views/HomeNavigation.vue";
import RouterBypass from "@/views/pages/RouterBypass/RouterBypass.vue";
import Example from "../components/Example.vue";

const routes = [
  {
    path: "/",
    redirect: "/weather",
  },
  {
    path: "/",
    component: HomeNavigation,
    children: [
      {
        path: "",
        redirect: "/weather",
      },
      {
        path: "weather",
        component: () => import("@/views/pages/Weather/Weather.vue"),
      },
      {
        path: "emergency",
        component: () => import("@/views/pages/Emergency/Emergency.vue"),
      },
      {
        path: "guidelines",
        component: () => import("@/views/pages/Guidelines/Guidelines.vue"),
      },
      {
        path: "profile",
        component: () => import("@/views/pages/Profile/Profile.vue"),
      },
    ],
  },
];

// const routes = [
//   {
//     path: "/",
//     redirect: "/home/weather",
//   },
//   {
//     path: "/home/",
//     component: HomePage,
//     children: [
//       {
//         path: "",
//         redirect: "weather",
//       },
//       {
//         path: "weather",
//         component: () => import("@/views/pages/Weather/Weather.vue"),
//       },
//       {
//         path: "emergency",
//         component: () => import("@/views/pages/Emergency/Emergency.vue"),
//       },
//       {
//         path: "guidelines",
//         component: () => import("@/views/pages/Guidelines/Guidelines.vue"),
//       },
//       {
//         path: "profile",
//         component: () => import("@/views/pages/Profile/Profile.vue"),
//       },
//     ],
//   },
//   {
//     path: "/weather",
//     component: () => import("@/views/pages/Weather/Weather.vue"),
//   },
//   // {
//   //   path: "/home",
//   //   component: HomePage,
//   //   children: [
//   //     {
//   //       path: "",
//   //       redirect: "/weather",
//   //     },
//   //     {
//   //       path: "weather",
//   //       component: () => import("@/views/pages/Weather/Weather.vue"),
//   //     },
//   //   ],
//   // },
// ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
