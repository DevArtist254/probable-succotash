<template>
  <div class="listing">
    <div :key="product.title" v-for="product in listing">
      <card-view :product="product" />
    </div>
  </div>
</template>

<script>
import CardView from "./CardView.vue";
export default {
  components: { CardView },
  props: ["listing"],
};
</script>

<style></style>
