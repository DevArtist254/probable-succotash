<template>
  <div>
    <div>
      <router-view></router-view>
      <router-view name="NavBar"></router-view>
      <!-- <SidebarNav /> -->
    </div>
  </div>

</template>

<script>
import SidebarNav from './components/Dashboard/SidebarNav.vue';
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
    SidebarNav
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
