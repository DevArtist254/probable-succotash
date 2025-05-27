<template>
  <div class="user__address">
    <address>
      <div class="user__address--img">
        <img src="/images/icons/phone.svg" alt="phone call" />
      </div>
      <div class="user__stack">
        <a
          :href="`tel:+${user.phoneNumber[0]}`"
          class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600"
          id="userPhone"
          >{{ user.phoneNumber[0] }}</a
        >
        <a
          :href="`tel:+${user.phoneNumber[1]}`"
          class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600"
          id="userPhone"
          >{{ user.phoneNumber[1] }}</a
        >
      </div>
    </address>
    <address>
      <div class="user__address--img">
        <img src="/images/icons/location.svg" alt="location" />
      </div>
      <div class="user__stack">
        <h3
          class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600"
          id="userLocation"
        >
          View sellers location
        </h3>
      </div>
    </address>
    <address>
      <div class="user__address--img">
        <img src="/images/icons/email.svg" alt="email icon" />
      </div>
      <div class="user__stack">
        <a
          :href="`mailto:${user.email}`"
          class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600"
          >{{ user.email }}</a
        >
      </div>
    </address>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style></style>
