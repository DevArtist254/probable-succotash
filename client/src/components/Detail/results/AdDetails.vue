<template>
  <div id="ad">
    <div class="main">
      <div class="head">
        <div class="head__intro">
          <h1 class="ff-pri fs-pri--1400 fw-pri--400 clr-pri--1000">
            {{ product.title }}
          </h1>
          <p class="ff-sec fw-pri--800 fs-pri--600 clr-pri--1000">
            {{ product.seller }}
          </p>
        </div>
        <div class="head__text">
          <p class="ff-sec fw-pri--400 fs-pri--600 clr-sec--400">
            Show contact
          </p>
          <p class="ff-sec fw-pri--400 fs-pri--600 clr-sec--200">Start chat</p>
        </div>
      </div>
      <div class="details">
        <div class="details__bookmark">
          <Icon
            icon="bxs:bookmark-star"
            width="36"
            height="36"
            style="color: C9C1B1"
            class="card__bookmark"
          />
        </div>
        <div class="details__desc">
          <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200"></p>
          <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200"></p>
          <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200"></p>
          <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style></style>
