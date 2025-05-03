<template>
    <div>
        <SidebarNav />
        <router-view />
    </div>
</template>

<script>
import SidebarNav from '@/components/Dashboard/SidebarNav.vue';

export default {
    components: { SidebarNav }
}
</script>

<style></style>