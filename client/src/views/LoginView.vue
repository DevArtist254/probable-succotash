<template>
    <div class="Login">
        <div class="switchToSignup">
            <p>If you don't have an account, <br> you can signup here</p>
            <router-link to="/signup">
                Signup page
            </router-link>
        </div>
        <form>
            <label for="email">Email</label>
            <input type="email" placeholder="Please enter a valid email" required v-model="email">
            <label for="password">Password</label>
            <input type="password" required name="password" v-model="password" placeholder="Please enter your password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>
