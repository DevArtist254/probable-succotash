<template>
  <div class="specificationsPri">
    <div :key="spec._id" v-for="spec in primarySpecifications">
      <div class="specificationsPri__icon">
        <img
          :src="`/images/icons/${spec.specType}.svg`"
          :alt="`${spec.specType} logo`"
        />
        <p class="clr-pri--1000 fw-pri--800 ff-sec fs-pri--600">
          {{ spec.value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["primarySpecifications"],
};
</script>

<style></style>
