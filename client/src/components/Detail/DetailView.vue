<template>
  <div class="m-container containerRow">
    <main id="main">
      <ad-images />
      <ad-details :product="product" />
      <specifications-primary :product="product" />
      <specifications-secondary />
      <ad-description />
      <seller-details />
      <user-address />
      <user-location />
    </main>
    <ad-sidebar />
  </div>
</template>

<script>
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
};
</script>

<style></style>
