import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: null,
    username: "",
    email: "",
    photo: "",
    isLoggedIn: false,
  }),

  actions: {
    login(userData) {
      this.id = userData.id;
      this.username = userData.username;
      this.email = userData.email;
      this.photo = userData.photo;
      this.isLoggedIn = true;
    },
    logout() {
      this.id = null;
      this.username = "";
      this.email = "";
      this.photo = "";
      this.isLoggedIn = false;
    },
  },

  persist: true,
});
