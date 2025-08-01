<template>
  <div class="main-search">
    <div class="no-word" v-if="searchQuery && !searchQuery.trim()">
      <h2 style="text-align: center; padding: 20px; color: #1d3a73">
        Please search for a product to view results.
      </h2>
    </div>
    <div v-else-if="searchData.length === 0" class="no-match">
      <h2 style="text-align: center; padding: 20px; color: #1d3a73">
        There are no results for this search.
      </h2>
    </div>
    <div class="main-data">
      <v-container fluid>
        <div v-if="loading">
          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col cols="3" v-for="num in 4" :key="num">
                  <v-skeleton-loader type="image, article"></v-skeleton-loader>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
        <div v-else>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              v-for="item in searchData"
              :key="item.id"
            >
              <v-lazy>
                <v-card elevation="20">
                  <v-card-item style="padding: 10px; text-align: center">
                    <div>
                      <div
                        class="newbtn"
                        title="add to wishlist"
                        @click="
                          addItemToWishlist(item);
                          addsnackwishlist(item);
                        "
                      >
                        <i class="fa-regular fa-heart"></i>
                      </div>
                      <v-hover v-slot="{ isHovering, props }">
                        <div
                          @mouseenter="quickView = true"
                          @mouseleave="quickView = false"
                          style="position: relative"
                        >
                          <img
                            :src="showenitem[item.id] || item.thumbnail"
                            :style="`width: 100%; height: 200px; cursor:pointer; transition:0.8s; scale: ${
                              isHovering ? 1.05 : 1
                            }`"
                            alt=""
                            v-bind="props"
                          />
                          <v-btn
                            v-if="quickView"
                            variant="outlined"
                            style="
                              position: absolute;
                              top: 50%;
                              left: 50%;
                              transform: translate(-50%, -50%);
                              background-color: #1d3a73;
                              color: white;
                            "
                            @click="openDialog(item)"
                          >
                            quick view
                          </v-btn>
                        </div>
                      </v-hover>
                      <div
                        class="newbtn"
                        title="add to Cart"
                        @click="
                          addItem(item);
                          addsnack(item);
                        "
                      >
                        <i class="fa-solid fa-cart-plus"></i>
                      </div>
                    </div>
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-text>
                      {{
                        item.description.split(" ").length >= 10
                          ? item.description.split(" ").slice(0, 9).join(" ") +
                            "..."
                          : item.description
                      }}
                    </v-card-text>
                    <v-card-text class="py-0">
                      <v-rating
                        readonly
                        class="mt-0"
                        color="rgba(245, 245, 245, 0.705)"
                        active-color="rgb(255, 238, 0)"
                        half-increments
                        v-model="item.rating"
                        density="compact"
                        size="small"
                      ></v-rating>
                    </v-card-text>
                    <v-card-text>
                      <span style="font-weight: bold; color: red">
                        ${{ item.discountPercentage }}
                      </span>
                      discount from
                      <span style="font-weight: bold">${{ item.price }}</span>
                    </v-card-text>

                    <v-btn-toggle v-model="showenitem[item.id]" mandatory>
                      <v-btn
                        v-for="(pic, i) in item.images"
                        :key="i"
                        :value="pic"
                        style="border-radius: 50%; padding: 2px; margin: 3px"
                      >
                        <img :src="pic" style="width: 30px; height: 30px" />
                      </v-btn>
                    </v-btn-toggle>

                    <v-btn
                      @click="
                        router.push({
                          name: 'productDetails',
                          params: { productid: item.id },
                        })
                      "
                      variant="outlined"
                      class="px-10"
                      style="
                        margin: 20px auto;
                        display: block;
                        border-radius: 30px;
                      "
                    >
                      show details
                    </v-btn>
                  </v-card-item>
                </v-card>
              </v-lazy>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import { searchProducut } from "@/stores/search";
import { ref, computed, watch, inject } from "vue";
import { useRouter, useRoute } from "vue-router";

import { cartStore } from "@/stores/cart";
import { wishlistStore } from "@/stores/wishlist";
const addProduct = cartStore();
const addWishlistItem = wishlistStore();
const quantity = ref(1);

const addsnack = (data) => {
  emitter.emit("snackbar", data);
};
const addsnackwishlist = (data) => {
  emitter.emit("wishlistSnackbar", data);
};
const addItem = (data) => {
  addProduct.addItem({
    ...data,
    quantity: quantity.value,
  });
};
const addItemToWishlist = (data) => {
  addWishlistItem.addItem({
    ...data,
    quantity: quantity.value,
  });
};

const emitter = inject("emitter");
const openDialog = (product) => emitter.emit("openDialog", product);

const router = useRouter();
const route = useRoute();
const searchStore = searchProducut();

const showenitem = ref({});
const quickView = ref(false);

const searchData = computed(() => searchStore.searchData);
const loading = computed(() => searchStore.loading);

watch(
  () => route.params.query,
  (val) => {
    if (val?.trim()) {
      searchStore.getSearch(val.trim());
    } else {
      searchStore.searchData = [];
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.main-search {
  .newbtn {
    width: fit-content;
    padding: 8px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    &:hover {
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
    }

    &:active {
      transform: scale(0.9);
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
    }
    i {
      font-size: 15px;
      color: gray;
    }
  }
}
</style>
