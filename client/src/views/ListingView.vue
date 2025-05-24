<template>
  <div>
    <div v-if="listing.length !== 0" class="m-container">
      <cards-view :listing="listing" />
      <div class="pages">
        <div
          class="prev"
          @click="goToPage(currentPage - 1)"
          v-show="!(currentPage === 1)"
        >
          <Icon
            icon="ion:arrow-undo"
            width="32"
            height="32"
            style="color: C9C1B1"
          />
          <p>prev page</p>
        </div>
        <p>{{ currentPage }}</p>
        <div class="next" @click="goToPage(currentPage + 1)">
          <p>next page</p>
          <Icon
            icon="ion:arrow-redo-sharp"
            width="32"
            height="32"
            style="color: C9C1B1"
          />
        </div>
      </div>
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
import { Icon } from "@iconify/vue";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import CardsView from "../components/Detail/card/CardsView.vue";

export default {
  components: {
    Icon,
    CardsView,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const listing = ref([]);
    const isLoading = ref(false);
    const error = ref("");

    const limit = 10;

    const currentPage = computed(() => {
      return parseInt(route.query.page || "1", 10);
    });

    const goToPage = (page) => {
      router.push({ query: { ...route.query, page } });
    };

    const fetchProducts = async () => {
      isLoading.value = true;
      try {
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });

        const API_URL =
          "http://j0k400sc0k80gwwcs8kcgkow.devartist.art" ||
          "http://localhost:3000";

        const res = await fetch(
          `http://localhost:3000/app/v1/product/car_listing?page=${currentPage.value}&limit=${limit}`
        );

        const message = await res.json();

        listing.value = message.data.doc;
      } catch (err) {
        error.value = err.message;
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(fetchProducts);
    watch(() => route.query.page, fetchProducts);

    return { listing, isLoading, error, goToPage, currentPage };
  },
};
</script>

<style></style>
