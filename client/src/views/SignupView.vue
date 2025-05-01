<template>
    <div class="Login">
        <div class="switchToLogin">
            <p>If you don't have an account, <br> you can signup here</p>
            <router-link to="/login">
                login page
            </router-link>
        </div>
        <form>
            <label for="username">Username</label>
            <input type="text" required name="username" v-model="username" placeholder="Please enter your username">
            <label for="email">Email</label>
            <input type="email" placeholder="Please enter a valid email" required v-model="email">
            <label for="password">Password</label>
            <input type="password" required name="password" v-model="password" placeholder="Please enter your password">
            <button type="submit">Signup</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>