<template>
  <div class="products-category">
    <h1 class="text-center py-10">{{ route.params.title }}</h1>
    <v-container fluid>
      <div v-if="!selectedCategory.length">
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
            v-for="item in selectedCategory"
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
                        @mouseenter="quickView = !quickView"
                        @mouseleave="quickView = !quickView"
                        style="position: relative"
                      >
                        <img
                          v-lazy="
                            showenitem[item.id]
                              ? showenitem[item.id]
                              : item.thumbnail
                          "
                          :src="
                            showenitem[item.id]
                              ? showenitem[item.id]
                              : item.thumbnail
                          "
                          :style="`width: 100%; height: 200px; cursor:pointer; transition:0.8s all ease-in-out; scale: ${
                            isHovering ? 1.05 : 1
                          }`"
                          alt=""
                          v-bind="props"
                        />
                        <v-btn
                          v-if="quickView"
                          variant="outlined"
                          style="
                            border-radius: 10px;
                            padding: 2px 10px;
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
                  <v-card-text>{{
                    item.description.split(" ").length >= 10
                      ? item.description.split(" ").slice(0, 9).join(" ") +
                        "..."
                      : item.description.join(" ")
                  }}</v-card-text>
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
                  <v-card-text
                    ><span style="font-weight: bold; color: red"
                      >${{ item.discountPercentage }}</span
                    >
                    discont from
                    <span style="font-weight: bold"
                      >${{ item.price }}</span
                    ></v-card-text
                  >
                  <v-btn-toggle v-model="showenitem[item.id]" mandatory>
                    <v-btn
                      v-for="(pic, i) in item.images"
                      :key="i"
                      :value="pic"
                      style="padding: 2px; margin: 3px"
                    >
                      <img
                        v-lazy="pic"
                        :src="pic"
                        style="width: 30px; height: 30px"
                    /></v-btn>
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
                      display: block;
                      margin: 20px auto;
                      text-align: center;
                      border-radius: 30px;
                      padding-top: 10px;
                      padding-bottom: 10px;
                    "
                    >show details</v-btn
                  >
                </v-card-item>
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script setup>
import { productModule } from "@/stores/products";
import { watch, computed, ref, onMounted, inject } from "vue";
import { useRoute, useRouter } from "vue-router";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";

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
const openDialog = (product) => {
  emitter.emit("openDialog", product);
};
const router = useRouter();
const productStore = productModule();
const showenitem = ref({});
const quickView = ref(false);
const selectedCategory = computed(() => productStore.selectedCategory);
const route = useRoute();
watch(() => {
  productStore.getProductsbycategory(route.params.category);
});
onMounted(() => {
  productStore.getProductsbycategory(route.params.category);
});
</script>
<style scoped lang="scss">
.products-category {
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
