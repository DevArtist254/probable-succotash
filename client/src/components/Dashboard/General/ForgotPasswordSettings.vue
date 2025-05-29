<template>
  <div class="profile-content bdg-pri--800">
    <div class="content bdg-pri--1000">
      <form class="form" @submit.prevent="handleSubmit">
        <div class="form__content">
          <div class="form__sec">
            <p class="fw-pri--600 fs-pri--600 clr-pri--200 ff-sec">
              Send a password reset link to the user who requested it.
            </p>
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
  name: "ForgotPasswordSettings",
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const API_URL =
      "http://j0k400sc0k80gwwcs8kcgkow.devartist.art" ||
      "http://mjidb.devartist.art";

    const handleSubmit = async () => {
      const submitBody = {
        email: email.value,
      };

      const res = await fetch(
        `http://mjidb.devartist.art/app/v1/user/passwordreqreset`,
        {
          method: "POST",
          mode: "cors",
          credentials: "include", // 👈 very important: allows cookies to be set
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submitBody),
        }
      );

      const content = await res.json();
      console.log(content);
    };

    return { handleSubmit, email, password, username };
  },
};
</script>
