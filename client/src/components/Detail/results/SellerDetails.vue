<template>
  <div class="user">
    <div class="user__intro">
      <h1 class="ff-pri fw-pri--1000 fs-pri--1400 clr-pri--1000"></h1>
      <p class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--400"></p>
    </div>
    <div class="user__photo"></div>
    <div class="user__social">
      <p class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--400">
        Connect with us
      </p>
      <address>
        <!-- <div
              :key="social.image"
              v-for="social in sellersDetails.socials"
              class=".user__social--link"
            >
              <a :href="`${social.image}`">
                <img
                  :src="`./assests/images/socials/${social.image}.svg`"
                  :alt="`${social.image} logo`"
                />
              </a>
            </div> -->
      </address>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
