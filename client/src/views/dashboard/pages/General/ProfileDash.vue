<template>
  <div>
    <topbarnav />
    <router-view />
  </div>
</template>

<script>
import Topbarnav from "../../../../components/Dashboard/Topbarnav.vue";

export default {
    components: {Topbarnav}
}
</script>

<style>

</style>