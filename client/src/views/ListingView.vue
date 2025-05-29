<template>
  <div>
    <div v-if="listing.length !== 0" class="m-container">
      <div class="pages">
        <div class="pages__btn">
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
        <div class="pages__currentPage">
          <p class="fs-pri--800">{{ currentPage - 1 }}</p>
          <p class="fs-pri--1000">/</p>
          <p class="fs-pri--1400">{{ currentPage }}</p>
        </div>
      </div>
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
          "http://mjidb.devartist.art";

        const res = await fetch(
          `http://mjidb.devartist.art/app/v1/product/car_listing?page=${currentPage.value}&limit=${limit}`
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
