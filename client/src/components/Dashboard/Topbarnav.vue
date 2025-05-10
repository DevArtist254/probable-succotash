<template>
  <div
    class="topbardash bdg-pri--1000 clr-pri--600 fs-pri--800 ff-sec fw-pri--200"
  >
    <p class="topbardash__nav--title fs-pri--1000 fw-pri--400">
      <Icon
        icon="qlementine-icons:settings-16"
        width="64"
        height="64"
        style="color: C9C1B1"
      />
      Profile settings
    </p>
    <ul class="topbardash__nav--list">
      <li class="topbardash__nav--item">
        <router-link
          to="/dashboard/profile/login"
          class="topbardash__nav--link clr-pri--600 fs-pri--800 fw-pri--200"
          >Have an account, <strong>login</strong> here</router-link
        >
      </li>
      <li class="topbardash__nav--item">
        <router-link
          to="/dashboard/profile/signup"
          class="topbardash__nav--link clr-pri--600 fs-pri--800 fw-pri--200"
          >Don't have an account, <strong>signup</strong> here</router-link
        >
      </li>
      <li class="topbardash__nav--item">
        <router-link
          to="/dashboard/profile/forgotpassword"
          class="topbardash__nav--link clr-pri--600 fs-pri--800 fw-pri--200"
          >Forgotten your password?</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "Topbarnav",
  components: { Icon },
};
</script>

<style>
.topbardash__nav--item a.router-link-exact-active {
  border-bottom: 1px solid #c9c1b1;
}
</style>
