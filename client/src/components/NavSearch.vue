<template>
    <form id="search">
        <div class="bdg-pri--200 nav__search" @click="handleSearchAnime">
            <select name="category" ref="searchBy" class="bdg-pri--800 clr-pri--200 nav__search--select">
                <option value="default">Search by</option>
                <option value="byLocation">By Location</option>
                <option value="byPrice">By Price</option>
                <option value="byTrends">By Trends</option>
                <option value="byAge">By Age</option>
            </select>
            <input type="search" ref="searchInput" id="searchInput" @focusout="handleFocusOut"
                class="nav__search--input" placeholder="Search for items here..">
        </div>
    </form>
</template>

<script>
export default {
    name: "NavSearch",
    methods: {
        handleSearchAnime() {
            const select = this.$refs.searchBy;
            const searchInput = this.$refs.searchInput;

            select.style.width = "12.5rem";
            searchInput.style.marginTop = "initial";
        },
        handleFocusOut() {
            const select = this.$refs.searchBy;
            const searchInput = this.$refs.searchInput;

            select.style.width = "0";
            searchInput.style.marginTop = "1rem"
        }
    }
}
</script>
