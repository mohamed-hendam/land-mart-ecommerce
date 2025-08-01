<template>
  <app-layout>
    <router-view />
    <QuickView />
    <v-snackbar
      v-model="bar"
      location="left bottom"
      :timeout="4000"
      color="success"
    >
      <span style="font-size: larger; font-weight: bold">
        {{ barData.title }}
      </span>
      Is Added To Cart
      <i class="fa-solid fa-cart-plus"></i>
      <template v-slot:actions>
        <v-icon @click="bar = false">mdi-close</v-icon>
      </template>
    </v-snackbar>
    <v-snackbar
      v-model="wishlistBar"
      location="left bottom"
      :timeout="4000"
      color="info"
    >
      <span style="font-size: larger; font-weight: bold">
        {{ barData.title }}
      </span>
      Is Added To Wish List
      <i class="fa-regular fa-heart"></i>
      <template v-slot:actions>
        <v-icon @click="wishlistBar = false">mdi-close</v-icon>
      </template>
    </v-snackbar>
  </app-layout>
</template>

<script setup>
import AppLayout from "@/components/global/AppLayout.vue";
import QuickView from "@/components/global/QuickView";
import { ref, onMounted, inject } from "vue";
const emitter = inject("emitter");
const bar = ref(false);
const wishlistBar = ref(false);
const barData = ref([]);
onMounted(() => {
  emitter.on("snackbar", (data) => {
    barData.value = data;
    bar.value = true;
  });
  emitter.on("wishlistSnackbar", (data) => {
    barData.value = data;
    wishlistBar.value = true;
  });
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: rgba(245, 245, 245, 0.705);
    }
  }
}
</style>
