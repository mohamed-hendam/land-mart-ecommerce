<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="pa-6" max-width="500" elevation="2">
      <v-card-title class="text-h4" style="text-align: center"
        >Log in</v-card-title
      >
      <v-card-subtitle class="text-center mb-4"
        >Log in to your account</v-card-subtitle
      >

      <v-form @submit.prevent="signIn" ref="formRef">
        <v-text-field
          label="Email"
          v-model="email"
          variant="underlined"
          type="email"
          class="mb-3"
          :rules="[rules.required, rules.email]"
        />
        <v-text-field
          label="Password"
          v-model="password"
          variant="underlined"
          type="password"
          class="mb-3"
          :rules="[rules.required]"
        />

        <v-btn
          color="primary"
          block
          class="my-4"
          :disabled="!formIsValid"
          @click="signIn"
        >
          Log in
        </v-btn>

        <v-checkbox
          v-model="rememberMe"
          label="Remember me"
          class="mt-0 mb-6"
          density="compact"
        />

        <div class="d-flex align-center justify-center mb-4">
          <v-divider class="mx-2" />
          <span class="text-caption">ACCESS QUICKLY</span>
          <v-divider class="mx-2" />
        </div>

        <div class="d-flex justify-space-between">
          <v-btn variant="outlined" class="text-capitalize" color="blue"
            >Google</v-btn
          >
          <v-btn
            variant="outlined"
            class="text-capitalize"
            color="blue darken-3"
            >LinkedIn</v-btn
          >
        </div>

        <div class="text-center mt-6">
          <span class="text-caption">Don't have an account?</span>
          <v-btn
            variant="text"
            color="primary"
            class="text-caption"
            @click="goToSignUp"
            >Sign up</v-btn
          >
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const formRef = ref(null);

const router = useRouter();

const rules = {
  required: (v) => !!v || "This field is required",
  email: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
};

const formIsValid = computed(() => {
  return email.value && password.value && rules.email(email.value) === true;
});

const signIn = () => {
  if (!formIsValid.value) {
    alert("Please fill in all required fields correctly.");
    return;
  }

  console.log("Logging in with:", {
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value,
  });
  router.push("/");
};

const goToSignUp = () => {
  router.push("/SignUp");
};
</script>
