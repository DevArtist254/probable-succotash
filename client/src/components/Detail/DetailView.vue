<template>
  <div class="m-container containerRow">
    <main id="main">
      <ad-images :coverVideo="product.coverVideo" />
      <ad-details :product="product" />
      <specifications-primary
        :primarySpecifications="product.primarySpecifications"
      />
      <specifications-secondary :specifications="product.specifications" />
      <ad-description :description="product.description" />
      <div v-if="user">
        <seller-details :user="user" />
        <user-address :user="user" />
      </div>
      <div v-if="error">{{ error }}</div>
      <div v-if="isLoading" class="loader"></div>
      <user-location :location="product.location" />
    </main>
    <ad-sidebar :images="product.images" :coverImage="product.coverImage" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import AdDescription from "./results/AdDescription.vue";
import AdDetails from "./results/AdDetails.vue";
import AdImages from "./results/AdImages.vue";
import AdSidebar from "./results/AdSidebar.vue";
import SellerDetails from "./results/SellerDetails.vue";
import SpecificationsPrimary from "./results/SpecificationsPrimary.vue";
import SpecificationsSecondary from "./results/SpecificationsSecondary.vue";
import UserAddress from "./results/UserAddress.vue";
import UserLocation from "./results/UserLocation.vue";
export default {
  components: {
    AdImages,
    AdDetails,
    SpecificationsPrimary,
    SpecificationsSecondary,
    AdDescription,
    SellerDetails,
    UserAddress,
    UserLocation,
    AdSidebar,
  },
  props: ["product"],
  setup(props) {
    const user = ref(null);
    const isLoading = ref(false);
    const error = ref("");

    const getSeller = async () => {
      const res = await fetch(
        `http://y8wk8c48wc0g84cwssc4wgcs.devartist.art/app/v1/user/${props.product.seller}`
      );
      const message = await res.json();

      user.value = message.data.doc;
    };

    onMounted(getSeller);

    return { user, isLoading, error };
  },
};
</script>

<style></style>
