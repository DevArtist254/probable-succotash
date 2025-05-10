<template>
  <div class="main-content">
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>{{ msg }}</h1>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue';
import { onMounted, ref } from 'vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavBar
  },
  setup() {
    const msg = ref("");

    onMounted(async () => {
      const API_URL = "http://j0k400sc0k80gwwcs8kcgkow.devartist.art" || "http://localhost:3000";

      const res = await fetch(`http://localhost:3000/app/v1/product`);
      const message = await res.json();

      msg.value = message.msg
    })

    return { msg }
  }
}
</script>
