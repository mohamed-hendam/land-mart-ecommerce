<template>
  <v-container class="py-8">
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="text-h4 font-weight-bold">Help Center</h1>
        <p class="text-subtitle-1">How can we assist you today?</p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="8">
        <v-expansion-panels multiple>
          <v-expansion-panel v-for="(item, index) in faqs" :key="index">
            <v-expansion-panel-title style="font-weight: bold; color: #2c3e50">
              {{ item.question }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              {{ item.answer }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="8">
        <h2 class="text-h6 font-weight-medium mb-4">Still need help?</h2>
        <v-form @submit.prevent="submitForm">
          <v-text-field
            v-model="form.name"
            label="Your Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            label="Your Email"
            required
          ></v-text-field>
          <v-textarea
            v-model="form.message"
            label="Your Message"
            required
          ></v-textarea>
          <v-btn color="primary" type="submit">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "How do I reset my password?",
    answer:
      'Click on "Forgot password" on the login page and follow the instructions.',
  },
  {
    question: "How can I contact support?",
    answer: "Use the contact form below or email us at support@example.com.",
  },
  {
    question: "Where can I find my account settings?",
    answer: 'Go to your profile and click "Settings" in the menu.',
  },
]);

const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted:", form.value);
  alert("Your message has been sent!");
  form.value = { name: "", email: "", message: "" };
};
</script>
