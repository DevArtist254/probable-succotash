<template>
  <div>
    <detail-view :product="product" />
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import DetailView from "../components/Detail/DetailView.vue";

export default {
  name: "DetailsView",
  props: ["id"],
  components: { Icon, DetailView },
  setup(props) {
    const product = ref({});
    const loading = ref(true);

    console.log(props.id);

    return { product };
  },
};
</script>
