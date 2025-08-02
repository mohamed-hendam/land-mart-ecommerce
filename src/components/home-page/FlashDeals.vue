<template>
  <div class="main-flash-deals">
    <v-container fluid>
      <h1>flash Sale</h1>
      <div v-if="!products.length">
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
      <div class="products-swiper" v-else>
        <swiper
          :modules="[Pagination, Navigation, Autoplay]"
          :pagination="{ el: '.swiper-pagination', clickable: true }"
          :slides-per-view="4"
          :space-between="20"
          style="padding-bottom: 20px"
          :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :breakpoints="breakpoints"
          :loop="true"
        >
          <swiper-slide v-for="item in props.products" :key="item.id">
            <v-card elevation="0">
              <v-card-item style="text-align: center">
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
                          showenitem[item.title]
                            ? showenitem[item.title]
                            : item.thumbnail
                        "
                        :src="
                          showenitem[item.title]
                            ? showenitem[item.title]
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
                <v-card-text class="pl-0 pb-0">{{
                  item.description.split(" ").length <= 10
                    ? item.description
                    : item.description.split(" ").slice(0, 9).join(" ") + "..."
                }}</v-card-text>
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
                <v-card-text class="pa-0">
                  <span style="font-weight: bold; color: red"
                    >${{ item.discountPercentage }}</span
                  >
                  Instead of
                  <del style="font-weight: bold"
                    >${{ item.price }}</del
                  ></v-card-text
                >
                <v-btn-toggle v-model="showenitem[item.title]" mandatory>
                  <v-btn
                    v-for="(pic, i) in item.images"
                    :key="i"
                    :value="pic"
                    style="padding: 2px; margin: 3px"
                    ><img
                      v-lazy="pic"
                      :src="pic"
                      style="width: 30px; height: 30px"
                  /></v-btn>
                </v-btn-toggle>
                <br />
                <v-btn
                  @click="
                    router.push({
                      name: 'productDetails',
                      params: { productid: item.id },
                    })
                  "
                  variant="outlined"
                  style="
                    border-radius: 30px;
                    padding: 0px 20px;
                    margin: 20px 5px;
                  "
                  >choose details</v-btn
                >
              </v-card-item>
            </v-card>
          </swiper-slide>
          <div class="swiper-prev"></div>
          <div class="swiper-next"></div>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { ref, defineProps, inject } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { useRouter } from "vue-router";
import { cartStore } from "@/stores/cart";
import { wishlistStore } from "@/stores/wishlist";
const addProduct = cartStore();
const addWishlistItem = wishlistStore();
const router = useRouter();
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
const showenitem = ref({});
const quickView = ref(false);
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
const breakpoints = ref({
  0: {
    slidesPerView: 1,
  },
  580: {
    slidesPerView: 2,
  },
  767: {
    slidesPerView: 3,
  },
  990: {
    slidesPerView: 4,
  },
});
</script>

<style lang="scss">
.main-flash-deals {
  h1 {
    font-size: 40px;
    font-weight: bold;
    color: #1d3a73;
    margin: 20px;
  }
  .products-swiper {
    .swiper-button-next,
    .swiper-button-prev {
      width: 35px;
      height: 35px;
      top: 40%;
      &::after {
        font-size: 10px;
        background-color: whitesmoke;
        color: #2c3e50;
        padding: 10px;
        border-radius: 50%;
      }
    }
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
    }
  }
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

@media (max-width: 767px) {
  .main-flash-deals {
    h1 {
      text-align: center;
      font-size: 30px;
      margin: 10px;
    }
  }
}
</style>
