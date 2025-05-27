<template>
  <section id="images" class="images">
    <div class="images__pri images__pri--1">
      <img :src="`${coverImage}`" alt="landing" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["coverImage"],
};
</script>

<style></style>
