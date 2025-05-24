<template>
  <div class="main-content">
    <div v-if="listing.length !== 0">
      <cards-view :listing="listing" />
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-if="isLoading" class="center-loading">
      <img
        src="../assets/loading.svg"
        alt="loading"
        class="loading-full-page"
      />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import CardsView from "../components/Detail/card/CardsView.vue";

export default {
  components: {
    CardsView,
  },
  setup() {
    const listing = ref([]);
    const isLoading = ref(false);
    const error = ref("");

    onMounted(async () => {
      try {
        isLoading.value = true;

        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });

        const API_URL =
          "http://j0k400sc0k80gwwcs8kcgkow.devartist.art" ||
          "http://localhost:3000";

        const res = await fetch(
          `http://localhost:3000/app/v1/product/car_listing`
        );
        const message = await res.json();
        isLoading.value = false;

        listing.value = message.data.cars;
      } catch (err) {
        error.value = err.message;
      } finally {
        isLoading.value = false;
      }
    });

    return { listing, isLoading, error };
  },
};
</script>

<style></style>
