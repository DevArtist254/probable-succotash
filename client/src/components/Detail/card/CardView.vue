<template>
  <div class="card">
    <BookmarkView />
    <div
      class="card__content clr-pri--200"
      :style="{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${product.coverImage})`,
      }"
    >
      <h1 class="card__content--heading">{{ product.title }}</h1>
      <div class="card__subcontent">
        <h2 class="card__subcontent--title">
          Price: {{ product.price.toLocaleString() }}ksh
        </h2>
        <StarsView />
      </div>
    </div>
    <div class="card__link">
      <router-link :to="{ name: 'DetailsView', params: { id: product._id } }"
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
