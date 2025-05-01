<template>
    <div class="Login">
        <div class="switchToSignup">
            <p>If you don't have an account, <br> you can signup here</p>
            <router-link to="/signup">
                Signup page
            </router-link>
        </div>
        <form id="login" @submit.prevent="handleSubmit">
            <div class="login__email">
                <label for="email">Email</label>
                <input type="email" placeholder="Please enter a valid email" required v-model="email">
            </div>
            <div class="login__password">
                <label for="password" class="login__password--label">Password</label>
                <input type="password" class="login__password--input" required name="password" v-model="password"
                    placeholder="Please enter your password">
            </div>
            <button class="login__submit" type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "LoginView",
    setup() {
        const email = ref("")
        const password = ref("");
        const API_URL = "http://j0k400sc0k80gwwcs8kcgkow.devartist.art" || "http://localhost:3000";

        const handleSubmit = async () => {
            const submitBody = { email: email.value, password: password.value }

            const res = await fetch(`http://localhost:3000/app/v1/user/login`, {
                method: 'POST',
                credentials: 'include', // 👈 very important: allows cookies to be set
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submitBody),
            });

            const content = await res.json();
            console.log(content);
        }

        return { handleSubmit, email, password }
    }
}
</script>
