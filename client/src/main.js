import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

createApp(App).use(router).use(pinia).mount("#app");

// import { useUserStore } from "@/stores/user";

// router.beforeEach(async (to, from, next) => {
//   const userStore = useUserStore();

//   let isValid = false;

//   try {
//     // const res = await fetch(
//     //   "http://eo00wo08gs08kwosoowksksg.devartist.art/app/v1/user/cookieIsValid",
//     //   {
//     //     method: "GET",
//     //     credentials: "include",
//     //   }
//     // );

//     // const content = await res.json();
//     isValid = true;
//   } catch (error) {
//     console.error("Error validating cookie:", error);
//   }

//   if (to.meta.requiresAuth && !userStore.isLoggedIn && !isValid) {
//     console.log("❌ Not authenticated");
//     next({ path: "/dashboard/profile/login" });
//   } else {
//     console.log("✅ Access granted");
//     next(); // ✅ allow navigation
//   }
// });
