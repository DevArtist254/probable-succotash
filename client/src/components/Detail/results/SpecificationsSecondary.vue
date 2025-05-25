<template>
  <div class="specificationsSec">
    <div class="specificationsSec__des" style="grid-area: intro">
      <h3 class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600">
        {{ specifications[0].value }}
      </h3>
      <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200">
        {{ specifications[0].specType }}
      </p>
    </div>
    <div class="specificationsSec__des" style="grid-area: m1">
      <h3 class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600">
        {{ specifications[1].value }}
      </h3>
      <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200">
        {{ specifications[1].specType }}
      </p>
    </div>
    <div class="specificationsSec__des" style="grid-area: s1">
      <h3 class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600">
        {{ specifications[2].value }}
      </h3>
      <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200">
        {{ specifications[2].specType }}
      </p>
    </div>
    <div class="specificationsSec__des" style="grid-area: f1">
      <h3 class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600">
        {{ specifications[3].value }}
      </h3>
      <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200">
        {{ specifications[3].specType }}
      </p>
    </div>
    <div class="specificationsSec__des" style="grid-area: f2">
      <h3 class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600">
        {{ specifications[4].value }}
      </h3>
      <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200">
        {{ specifications[4].specType }}
      </p>
    </div>
    <div class="specificationsSec__des" style="grid-area: f3">
      <h3 class="clr-pri--1000 fw-pri--200 ff-sec fs-pri--600">
        {{ specifications[5].value }}
      </h3>
      <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--200">
        {{ specifications[5].specType }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["specifications"],
};
</script>

<style></style>
