<template>
  <div class="user">
    <div class="user__intro">
      <h1 class="ff-pri fw-pri--1000 fs-pri--1400 clr-pri--1000">
        {{ user.name }}
      </h1>
      <p class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--400">
        {{ user.slogan }}
      </p>
    </div>
    <div class="user__photo">
      <img :src="`${user.logo}`" :alt="`${user.name}`" srcset="" />
    </div>
    <div class="user__social">
      <p class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--400">
        Connect with us
      </p>
      <address>
        <div
          :key="social.id"
          v-for="social in user.socials"
          class=".user__social--link"
        >
          <a :href="`${social.link}`">
            <img
              :src="`/images/socials/${social.image}.svg`"
              :alt="`${social.image} logo`"
            />
          </a>
        </div>
      </address>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  props: ["user"],
};
</script>

<style></style>
