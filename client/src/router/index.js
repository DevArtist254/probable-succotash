import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListingView from "../views/ListingView.vue";
import DetailsView from "../views/DetailsView.vue";
import AboutView from "@/views/AboutView.vue";
import ProfileDash from "@/views/dashboard/pages/General/ProfileDash.vue";
import DashboardView from "@/views/dashboard/DashboardView.vue";
import LoginSettings from "@/components/Dashboard/General/LoginSettings.vue";
import SignupSettings from "@/components/Dashboard/General/SignupSettings.vue";
import ForgotPasswordSettings from "@/components/Dashboard/General/ForgotPasswordSettings.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    children: [
      {
        path: "",
        name: "ListingView",
        component: ListingView,
        props: true,
      },
      {
        path: "/details/:id",
        name: "DetailsView",
        component: DetailsView,
        props: true,
      },
    ],
  },

  {
    path: "/about",
    component: AboutView,
    // meta: { requiresAuth: true },
  },
  {
    path: "/dashboard",
    component: DashboardView,
    children: [
      {
        path: "profile",
        component: ProfileDash,
        children: [
          {
            path: "login",
            component: LoginSettings,
          },
          {
            path: "signup",
            component: SignupSettings,
          },
          {
            path: "forgotpassword",
            component: ForgotPasswordSettings,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
