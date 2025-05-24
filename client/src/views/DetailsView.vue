<template>
  <div class="container">
    <main id="main">
      <section id="images" class="images">
        <div class="images__pri images__pri--1">
          <img src="" alt="landing" />
        </div>
      </section>
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
              <p class="ff-sec fw-pri--400 fs-pri--600 clr-sec--200">
                Start chat
              </p>
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
      <div class="specificationsPri">
        <div :key="spec.value" v-for="spec in primary_specifications">
          <div class="specificationsPri__icon">
            <img
              :src="`./assets/images/icons/${spec.type}.svg`"
              :alt="`${spec.value} logo`"
            />
            <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200">
              {{ spec.value }}
            </p>
          </div>
        </div>
      </div>
      <div class="specificationsSec">
        <div class="specificationsSec__des" style="grid-area: intro">
          <h3 class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600"></h3>
          <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200"></p>
        </div>
        <div class="specificationsSec__des" style="grid-area: m1">
          <h3 class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600"></h3>
          <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200"></p>
        </div>
        <div class="specificationsSec__des" style="grid-area: s1">
          <h3 class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600"></h3>
          <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200"></p>
        </div>
        <div class="specificationsSec__des" style="grid-area: f1">
          <h3 class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600"></h3>
          <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200"></p>
        </div>
        <div class="specificationsSec__des" style="grid-area: f2">
          <h3 class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600"></h3>
          <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200"></p>
        </div>
        <div class="specificationsSec__des" style="grid-area: f3">
          <h3 class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600"></h3>
          <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200"></p>
        </div>
      </div>
      <div class="description">
        <p class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600"></p>
      </div>
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
            <div
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
            </div>
          </address>
        </div>
      </div>
      <div class="user__address">
        <address>
          <div class="user__address--img">
            <img src="@/assets/images/icons/phone.svg" alt="phone call" />
          </div>
          <div class="user__stack">
            <a
              href="tel:+254795263459"
              class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600"
              id="userPhone"
              >0795 263459</a
            >
            <a
              href="tel:+254795263459"
              class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600"
              id="userPhone"
              >0795 263459</a
            >
          </div>
        </address>
        <address>
          <div class="user__address--img">
            <img src="@/assets/images/icons/location.svg" alt="location" />
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
            <img src="@/assets/images/icons/email.svg" alt="email icon" />
          </div>
          <div class="user__stack">
            <a
              href="mailto:motors@gmail.com"
              class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600"
              >motors@gmail.com</a
            >
          </div>
        </address>
      </div>
      <div class="user__location"></div>
    </main>
    <section class="sidebar">
      <div class="sidebar__content"></div>
      <div id="safety_tips">
        <h2 class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--800">
          Safety tips
        </h2>
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
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "DetailsView",
  props: ["id"],
  components: { Icon },
};
</script>
