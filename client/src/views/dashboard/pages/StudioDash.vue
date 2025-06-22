<template>
    <div class="dashboard-content">
        <Topbarnav />
        <router-view />
    </div>
</template>

<script>
import Topbarnav from "../../../components/Dashboard/Topbarnav.vue";

export default {
    components: { Topbarnav }
}
</script>