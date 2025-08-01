<template>
  <div class="responsive-na">
    <v-app-bar color="#0d2a52" flat elevation="0">
      <v-container fluid>
        <v-row>
          <v-col cols="4">
            <v-app-bar-nav-icon @click="openmenu"></v-app-bar-nav-icon>
            <v-icon
              style="margin-left: 10px; cursor: pointer"
              @click="router.push({ name: 'localsearch' })"
              >mdi-magnify</v-icon
            >
          </v-col>
          <v-col cols="4" style="text-align: center">
            <router-link to="/">
              <img
                src="../../assets/images/logo.png"
                style="width: 100px; margin-top: 10px"
              />
            </router-link>
          </v-col>
          <v-col
            cols="4"
            style="
              display: flex;
              justify-content: end;
              gap: 20%;
              align-items: center;
            "
          >
            <router-link :to="{ name: 'whishlist' }" style="width: 30px">
              <i
                class="fa-regular fa-heart"
                style="color: white; font-size: 20px; position: relative"
              >
                <v-badge
                  :content="wishlistItems.length"
                  color="#e1c574"
                  style="position: absolute; top: -3px; right: -3px"
                ></v-badge
              ></i>
            </router-link>
            <span
              @click="openCart"
              :style="`cursor: pointer; pointer-events: ${
                route.name == 'cart_page' ? 'none' : 'unset'
              }`"
            >
              <i
                class="fa-solid fa-cart-shopping"
                style="color: white; font-size: 20px; position: relative"
              >
                <v-badge
                  :content="cartItems.length"
                  color="#e1c574"
                  style="position: absolute; top: -3px; right: -3px"
                ></v-badge>
              </i>
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script setup>
import { inject, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { cartStore } from "@/stores/cart";
import { wishlistStore } from "@/stores/wishlist";
const addProduct = cartStore();
const cartItems = computed(() => addProduct.cartItems);
const usewishlistStore = wishlistStore();
const wishlistItems = computed(() => usewishlistStore.wishlistItems);
const emitter = inject("emitter");
const route = useRoute();
const router = useRouter();
const openCart = () => {
  emitter.emit("openCart");
};
const openmenu = () => {
  emitter.emit("openmenu");
};
</script>
