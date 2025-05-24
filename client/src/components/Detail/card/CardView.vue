<template>
  <div class="card">
    <BookmarkView />
    <div class="card__content">
      <h1 class="card__content--heading">{{ product.title }}</h1>
      <div class="card__subcontent">
        <h2 class="card__subcontent--title">Price: {{ product.views }}</h2>
        <StarsView />
      </div>
    </div>
    <div class="card__link">
      <router-link :to="{ name: 'DetailsView', params: { id: product.title } }"
        >Details</router-link
      >
      <p>Get contact</p>
    </div>
  </div>
</template>

<script>
import StarsView from "./StarsView.vue";
import BookmarkView from "./BookmarkView.vue";
export default {
  name: "CardView",
  props: ["product"],
  components: {
    BookmarkView,
    StarsView,
  },
};
</script>

<style></style>
