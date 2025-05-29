<template>
  <div class="profile-content bdg-pri--800">
    <div class="content bdg-pri--1000">
      <form class="form" @submit.prevent="handleSubmit">
        <div class="form__content">
          <div class="form__sec">
            <label
              class="form__sec--title fw-pri--200 fs-pri--600 clr-pri--200 ff-sec"
              for="email"
              >Username</label
            >
            <input
              class="form__sec--input"
              type="username"
              placeholder="Please enter a valid email"
              required
              v-model="username"
            />
          </div>
          <div class="form__sec">
            <label
              class="form__sec--title fw-pri--200 fs-pri--600 clr-pri--200 ff-sec"
              for="email"
              >Email</label
            >
            <input
              class="form__sec--input"
              type="email"
              placeholder="Please enter a valid email"
              required
              v-model="email"
            />
          </div>
          <div class="form__sec">
            <label
              class="form__sec--title fw-pri--200 fs-pri--600 clr-pri--200 ff-sec"
              for="password"
              >Password</label
            >
            <input
              class="form__sec--input"
              type="password"
              required
              name="password"
              v-model="password"
              placeholder="Please enter your password"
            />
          </div>
          <button
            class="form__submit fw-pri--200 fs-pri--600 clr-pri--1000 ff-sec"
            type="submit"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SignupSettings",
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const API_URL =
      "http://j0k400sc0k80gwwcs8kcgkow.devartist.art" ||
      "http://mjidb.devartist.art";

    const handleSubmit = async () => {
      const submitBody = {
        username: username.value,
        email: email.value,
        password: password.value,
      };

      const res = await fetch(`http://mjidb.devartist.art/app/v1/user/signup`, {
        method: "POST",
        mode: "cors",
        credentials: "include", // 👈 very important: allows cookies to be set
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitBody),
      });

      const content = await res.json();
      console.log(content);
    };

    return { handleSubmit, email, password, username };
  },
};
</script>
