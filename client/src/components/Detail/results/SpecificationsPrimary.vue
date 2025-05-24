<template>
  <div class="specificationsPri">
    <div :key="spec.value" v-for="spec in product.primary_specifications">
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
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style></style>
