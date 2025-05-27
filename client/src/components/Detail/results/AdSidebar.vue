<template>
  <section class="sidebar">
    <div class="sidebar__content">
      <div class="images__sec">
        <div class="images__sec--mask">
          <span class="images__sec--text">
            <h2 class="ff-sec fw-pri--200 fs-pri--1200 clr-pri--1000"></h2>
            <p class="ff-sec fw-pri--800 fs-pri--600 clr-pri--1000">
              Request a call
            </p>
          </span>
          <div class="images__sec--2">
            <img :src="`${images[0]}`" alt="car1" />
          </div>
        </div>
        <div class="images__sec--1">
          <img :src="`${images[1]}`" alt="car2" />
        </div>
        <div class="images__sec--3">
          <img :src="`${images[2]}`" alt="car3" />
        </div>
        <div class="images__sec--mask">
          <span class="images__sec--text">
            <h1 class="ff-sec fw-pri--1000 fs-pri--1400 clr-pri--1000">
              7+ Images
            </h1>
          </span>
          <div class="images__sec--4">
            <img :src="`${coverImage}`" alt="car5" />
          </div>
        </div>
      </div>
    </div>
    <div id="safety_tips">
      <h2 class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--800">Safety tips</h2>
      <ul>
        <li class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--200">
          Avoid sending any prepayments
        </li>
        <li class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--200">
          Meet with the seller at a safe public place
        </li>
        <li class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--200">
          Inspect what you're going to buy to make sure it's what you need
        </li>
        <li class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--200">
          Check all the docs and only pay if you're satisfied
        </li>
      </ul>
      <div class="btn">
        <button class="btn__st--ctaPri bdg-sec--400" id="markUnavailable">
          <p class="clr-pri--200 fw-pri--200 ff-sec fs-pri--200">
            Mark unavailable
          </p>
        </button>
        <button class="btn__st--ctaSec bdg-pri--200" id="reportAbuse">
          <p class="clr-sec--400 fw-pri--200 ff-sec fs-pri--200">
            Report Abuse
          </p>
        </button>
        <button class="btn__st--ctaTer bdg-pri--1000">
          <p class="clr-pri--200 fw-pri--200 ff-sec fs-pri--200">
            Show contact
          </p>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  props: ["images", "coverImage"],
  setup() {
    const mainRef = ref(null);
    const sideBarRef = ref(null);
    const isSticky = ref(false);

    const handleScroll = () => {
      if (!mainRef.value || !sideBarRef.value) return;

      const parentRect = mainRef.value.getBoundingClientRect();
      const sidebarRect = sideBarRef.value.getBoundingClientRect();

      if (
        parentRect.top <= 20 &&
        parentRect.bottom - sidebarRect.height >= 20
      ) {
        isSticky.value = true;
      } else {
        isSticky.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  },
};
</script>

<style>
.sticky {
  position: fixed;
  top: 20px;
}
</style>
