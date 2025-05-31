<template>
  <div class="profile-content bdg-pri--800">
    <div class="content bdg-pri--1000">
      <div class="form">
        <div v-if="imageSrc" class="form__image">
          <img :src="imageSrc" alt="Preview" />
        </div>
        <div class="form__content">
          <div class="form__sec">
            <div v-if="error">{{ error }}</div>
            <label
              class="form__sec--title fw-pri--200 fs-pri--600 clr-pri--200 ff-sec"
              for="photo"
              >Profile photo</label
            >
            <input
              class="form__sec--input"
              type="file"
              accept="image/*"
              @change="onFileChange"
              placeholder="Please enter a valid photo"
              required
            />
          </div>
          <button
            class="form__submit fw-pri--200 fs-pri--600 clr-pri--1000 ff-sec"
            @click="uploadImage"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const imageSrc = ref("");
    const imageFile = ref(null);
    const uploadStatus = ref("");
    const error = ref("");

    const loadimage = (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        imageSrc.value = e.target.result;
      };
      reader.readAsDataURL(file);
      imageFile.value = file;
    };

    const onFileChange = (e) => {
      const file = e.target.files[0];

      if (file && file.type.startsWith("image/")) {
        loadimage(file);
      } else {
        error.value = "The following file type are needed";
      }
    };

    const uploadImage = async () => {
      if (!imageFile.value) return;

      const formData = new FormData();
      formData.append("photo", imageFile.value);

      try {
        const res = await fetch("http://localhost:3000/app/v1/user/upload/", {
          method: "POST",
          body: formData,
          credentials: "include",
        });

        if (!res.ok) error.value = "Upload failed";

        uploadStatus.value = "Upload successful";
      } catch (err) {
        error.value = `Upload failed: ${err.message}`;
      }
    };

    return {
      imageSrc,
      imageFile,
      uploadStatus,
      onFileChange,
      uploadImage,
      error,
    };
  },
};
</script>

<style></style>
