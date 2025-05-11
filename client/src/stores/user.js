import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: null,
    username: "",
    email: "",
    isLoggedIn: false,
  }),

  actions: {
    login(userData) {
      this.id = userData.id;
      this.username = userData.name;
      this.email = userData.email;
      this.isLoggedIn = true;
    },
    logout() {
      this.id = null;
      this.username = "";
      this.email = "";
      this.isLoggedIn = false;
    },
  },

  persist: true,
});
