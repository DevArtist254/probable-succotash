<template>
  <div>
    <div v-if="product">
      <detail-view :product="product" />
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
import { onMounted, ref, watch } from "vue";
import DetailView from "../components/Detail/DetailView.vue";

export default {
  name: "DetailsView",
  props: ["id"],
  components: { Icon, DetailView },
  setup(props) {
    const product = ref(null);
    const isLoading = ref(false);
    const error = ref("");

    const fetchProduct = async () => {
      isLoading.value = true;
      try {
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });

        const API_URL =
          "http://j0k400sc0k80gwwcs8kcgkow.devartist.art" ||
          "http://localhost:3000";

        const res = await fetch(
          `http://mjidb.devartist.art/app/v1/product/car_listing/${props.id}`
        );

        const message = await res.json();

        product.value = message.data.doc;
      } catch (err) {
        error.value = err.message;
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(fetchProduct);
    watch(() => fetchProduct);

    return { product, isLoading };
  },
};
</script>
