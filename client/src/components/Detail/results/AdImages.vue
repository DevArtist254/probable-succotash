<template>
  <section id="images" class="images">
    <div class="images__pri images__pri--1">
      <video class="adVideo" loop muted autoplay>
        <source :src="`${coverVideo}`" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script>
export default {
  props: ["coverVideo"],
};
</script>

<style></style>
