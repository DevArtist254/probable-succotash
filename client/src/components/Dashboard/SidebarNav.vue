<template>
  <nav
    class="sidebarnav bdg-pri--1000 clr-pri--600 fs-pri--800 ff-sec fw-pri--200"
  >
    <router-link to="/" class="sidebarnav__logo">
      <img
        src="../../assets/logo.svg"
        alt="logo"
        class="sidebarnav__logo--img"
      />
    </router-link>
    <form class="sidebarnav__form">
      <input
        class="sidebarnav__form--search"
        type="search"
        placeholder="Search setting here...."
      />
    </form>
    <span v-if="!loginedIn" class="sidebarnav__nav">
      <p class="sidebarnav__nav--title">
        <Icon
          icon="tabler:settings-down"
          width="48"
          height="48"
          style="color: C9C1B1"
        />
        Profile settings
      </p>
      <ul class="sidebarnav__nav--list">
        <li>
          <router-link
            class="sidebarnav__nav--link clr-pri--600 fs-pri--800 ff-sec fw-pri--200"
            to="/dashboard/profile/login"
            >Login</router-link
          >
        </li>
        <li>
          <router-link
            class="sidebarnav__nav--link clr-pri--600 fs-pri--800 ff-sec fw-pri--200"
            to="/dashboard/profile/signup"
            >Signup</router-link
          >
        </li>
        <li>
          <router-link
            class="sidebarnav__nav--link clr-pri--600 fs-pri--800 ff-sec fw-pri--200"
            to="/dashboard/profile/forgotpassword"
            >Forgot Password</router-link
          >
        </li>
      </ul>
    </span>
    <ul v-if="loginedIn">
      <li>Home</li>
      <li>Studio</li>
      <li>
        <span>Orders <button>></button></span>
        <ul>
          <li>Confirmed orders</li>
          <li>Bookmarks</li>
          <li>In progress</li>
        </ul>
      </li>
      <li>Inbox</li>
      <li>Customer</li>
      <li>
        <span class="sidebarnav__nav">
          <p class="sidebarnav__nav--title">
            <Icon
              icon="tabler:settings-down"
              width="48"
              height="48"
              style="color: C9C1B1"
            />
            Profile settings
          </p>
          <ul class="sidebarnav__nav--list">
            <li>
              <router-link
                class="sidebarnav__nav--link clr-pri--600 fs-pri--800 ff-sec fw-pri--200"
                to="/dashboard/profile"
                >General</router-link
              >
            </li>
            <li>
              <router-link
                class="sidebarnav__nav--link clr-pri--600 fs-pri--800 ff-sec fw-pri--200"
                to="/dashboard/profile/notifications"
                >Notifications</router-link
              >
            </li>
            <li>
              <router-link
                class="sidebarnav__nav--link clr-pri--600 fs-pri--800 ff-sec fw-pri--200"
                to="/dashboard/profile/security"
                >Security</router-link
              >
            </li>
          </ul>
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { useUserStore } from "@/stores/user";

export default {
  name: "SidebarNav",
  components: { Icon },
  setup() {
    const userStore = useUserStore();
    const loginedIn = userStore.isLoggedIn;

    return { loginedIn };
  },
};
</script>

<style>
a.router-link-exact-active {
  text-decoration: underline;
}
</style>
