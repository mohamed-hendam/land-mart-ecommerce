<template>
  <div class="fixed-nav">
    <v-app-bar color="#0d2a52" height="fit-content">
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <router-link :to="{ name: 'home' }">
              <img src="@/assets/images/logo.png" alt="" />
            </router-link>
          </v-col>
          <v-col cols="7">
            <ul
              class="links d-flex justify-space-between align-center pt-3"
              style="list-style: none"
            >
              <li v-for="item in categories" :key="item.id">
                <router-link
                  style="color: white; text-decoration: none; font-size: 15px"
                  :to="{
                    name: 'products',
                    params: { category: item.route, title: item.title },
                  }"
                >
                  {{ item.title }}</router-link
                >
              </li>
            </ul>
          </v-col>
          <v-col cols="3" class="d-flex justify-end align-center ga-4">
            <div @click="router.push({ name: 'localsearch' })" title="Search">
              <svg
                style="width: 27px; fill: whitesmoke; cursor: pointer"
                data-icon="search"
                viewBox="0 0 512 512"
                width="100%"
                height="100%"
              >
                <path
                  d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"
                ></path>
              </svg>
            </div>
            <div
              class="d-flex flex-column align-center"
              @click="router.push({ name: 'whishlist' })"
              style="cursor: pointer; position: relative"
              title="Wish list"
            >
              <v-badge
                style="position: absolute; top: -4px; right: -4px"
                color="red"
                :content="wishlistItems.length"
              ></v-badge>
              <svg
                viewBox="0 0 512 512"
                class="icon icon-wishlist"
                style="width: 27px; fill: whitesmoke; cursor: pointer"
              >
                <g>
                  <g>
                    <path
                      d="M474.644,74.27C449.391,45.616,414.358,29.836,376,29.836c-53.948,0-88.103,32.22-107.255,59.25
        c-4.969,7.014-9.196,14.047-12.745,20.665c-3.549-6.618-7.775-13.651-12.745-20.665c-19.152-27.03-53.307-59.25-107.255-59.25
        c-38.358,0-73.391,15.781-98.645,44.435C13.267,101.605,0,138.213,0,177.351c0,42.603,16.633,82.228,52.345,124.7
        c31.917,37.96,77.834,77.088,131.005,122.397c19.813,16.884,40.302,34.344,62.115,53.429l0.655,0.574
        c2.828,2.476,6.354,3.713,9.88,3.713s7.052-1.238,9.88-3.713l0.655-0.574c21.813-19.085,42.302-36.544,62.118-53.431
        c53.168-45.306,99.085-84.434,131.002-122.395C495.367,259.578,512,219.954,512,177.351
        C512,138.213,498.733,101.605,474.644,74.27z M309.193,401.614c-17.08,14.554-34.658,29.533-53.193,45.646
        c-18.534-16.111-36.113-31.091-53.196-45.648C98.745,312.939,30,254.358,30,177.351c0-31.83,10.605-61.394,29.862-83.245
        C79.34,72.007,106.379,59.836,136,59.836c41.129,0,67.716,25.338,82.776,46.594c13.509,19.064,20.558,38.282,22.962,45.659
        c2.011,6.175,7.768,10.354,14.262,10.354c6.494,0,12.251-4.179,14.262-10.354c2.404-7.377,9.453-26.595,22.962-45.66
        c15.06-21.255,41.647-46.593,82.776-46.593c29.621,0,56.66,12.171,76.137,34.27C471.395,115.957,482,145.521,482,177.351
        C482,254.358,413.255,312.939,309.193,401.614z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div
              @click="openCart"
              :style="`pointer-events: ${
                route.name == 'cart_page' ? 'none' : 'unset'
              }`"
              title="Cart"
            >
              <v-badge color="red" :content="cartItems.length">
                <svg
                  style="width: 27px; fill: whitesmoke; cursor: pointer"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="path1"
                    d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                  ></path>
                  <path
                    class="path2"
                    d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                  ></path>
                  <path
                    class="path3"
                    d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"
                  ></path>
                </svg>
              </v-badge>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script setup>
import { inject, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { productModule } from "@/stores/products";
import { cartStore } from "@/stores/cart";
import { wishlistStore } from "@/stores/wishlist";
const route = useRoute();
const router = useRouter();
const addProduct = cartStore();
const cartItems = computed(() => addProduct.cartItems);
const usewishlistStore = wishlistStore();
const wishlistItems = computed(() => usewishlistStore.wishlistItems);
const productStore = productModule();
const categories = computed(() => productStore.categories);
const emitter = inject("emitter");
const openCart = () => {
  emitter.emit("openCart");
};
</script>
