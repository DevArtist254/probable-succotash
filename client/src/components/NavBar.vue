<template>
    <nav class="bdg-pri--1000">
        <div class="nav">
            <router-link to="/" class="nav__logo">
                <h1>Logo</h1>
            </router-link>
            <form id="search">
                <div class="bdg-pri--200 nav__search">
                    <select name="category" ref="searchBy" class="bdg-pri--800 clr-pri--200 nav__search--select">
                        <option value="default">Search by</option>
                        <option value="byLocation">By Location</option>
                        <option value="byPrice">By Price</option>
                        <option value="byTrends">By Trends</option>
                        <option value="byAge">By Age</option>
                    </select>
                    <input type="search" id="searchInput" @click="handleSearchAnime" class="nav__search--input"
                        placeholder="Search for items here..">
                </div>
            </form>
            <ul class="nav__list">
                <li class="nav__item">
                    <span class="nav__link">
                        <router-link to="/bookmarks">
                            <svg xmlns="http://www.w3.org/2000/svg" width="5.3rem" height="4.1rem" viewBox="0 0 24 24">
                                <path fill="#fff" d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3l7 3V5c0-1.1-.9-2-2-2" />
                            </svg>
                        </router-link>
                        <p class="clr-sec--200 fs-pri--200 ff-sec" id="bookmarks">
                            12
                        </p>
                    </span>
                </li>
                <li class="nav__item">
                    <span class="nav__link">
                        <router-link to="/messages">
                            <svg xmlns="http://www.w3.org/2000/svg" width="4.6rem" height="4.1rem" viewBox="0 0 24 24">
                                <path fill="#fff"
                                    d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 12H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z" />
                            </svg>
                        </router-link>
                        <p class="clr-sec--200 fs-pri--200 ff-sec" id="messages">9</p>
                    </span>
                </li>
                <li class="nav__item">
                    <span class="nav__link">
                        <router-link to="/notifications">
                            <svg xmlns="http://www.w3.org/2000/svg" width="4.6rem" height="4.1rem" viewBox="0 0 24 24">
                                <path fill="#fff"
                                    d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z" />
                            </svg>
                        </router-link>
                        <p class="clr-sec--200 fs-pri--200 ff-sec" id="notifications"> 3</p>
                    </span>
                </li>
                <li class="nav__item">
                    <span class="nav__cta bdg-pri--200">
                        <router-link to="/login"
                            class="nav__cta--link clr-pri--800 fs-pri--200 ff-sec">Login</router-link>
                    </span>
                    <span class="nav__cta bdg-pri--200">
                        <router-link to="/signup"
                            class="nav__cta--link clr-pri--800 fs-pri--200 ff-sec">Signup</router-link>
                    </span>
                </li>
                <li class="nav__item">
                    <span class="nav__cta bdg-pri--200">
                        <router-link to="/trade"
                            class="nav__cta--link clr-pri--800 fs-pri--200 ff-sec">Trade</router-link>
                    </span>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { onMounted } from 'vue'

export default {
    name: "NavBar",
    setup() {

        onMounted(() => {
            const handleSearchAnime = () => {
                const select = this.$refs.searchBy

                select.style.width = "12.5rem"
            }
        })

        return { handleSearchAnime }
    }
}
</script>

<style></style>