<template>
  <div class="drawer">
    <v-navigation-drawer
      temporary
      v-if="drawer"
      v-model="drawer"
      location="right"
      class="drawer-content bg-white pa-0"
      width="400"
    >
      <v-icon
        @click="drawer = !drawer"
        style="
          background-color: #0d2a52;
          color: whitesmoke;
          font-size: 25px;
          position: absolute;
          right: 0;
          top: 0;
          z-index: 10;
          padding: 12px;
        "
      >
        mdi-close
      </v-icon>
      <v-card elevation="0">
        <v-card-item v-if="!cartItems.length">
          <v-card-title>shopping cart</v-card-title>
          <v-card-subtitle style="font-size: 15px; font-weight: 900"
            >{{ cartItems.length }} Items</v-card-subtitle
          >
          <v-card-text
            style="text-align: center; font-weight: 700; color: #4a4a4a"
            >free shipping for all orders over 10000.00!
          </v-card-text>
          <v-card-text
            style="text-align: center; font-weight: 700; color: #4a4a4a"
            >your cart is empty
          </v-card-text>
          <v-card-text>
            <v-btn
              @click="drawer = !drawer"
              elevation="0"
              style="
                width: 80%;
                margin-top: 10px;
                margin-left: 10%;
                height: 50px;
                background-color: darkgrey;
                border-radius: 40px;
                color: whitesmoke;
                font-weight: bold;
              "
            >
              continue shopping
            </v-btn>
          </v-card-text>
          <v-card-text>
            <router-link :to="{ name: 'cart_page' }">
              <v-btn
                elevation="0"
                style="
                  width: 80%;
                  margin-left: 10%;
                  height: 50px;
                  background-color: #0d2a52;
                  border-radius: 40px;
                  color: whitesmoke;
                  font-weight: bold;
                "
              >
                view cart
              </v-btn>
            </router-link>
          </v-card-text>
        </v-card-item>
        <v-card-item v-if="cartItems.length">
          <div>
            <v-card-title style="font-weight: bold; color: #0d2a52">
              shopping cart
            </v-card-title>
            <v-card-subtitle style="font-size: 15px; font-weight: 900">
              {{ cartItems.length }} Items
            </v-card-subtitle>
            <div style="position: relative; padding: 10px 0">
              <svg
                :style="`     position: absolute;
                  width: 30px;
                  fill:${
                    parseInt((calcTotalprice / 10000) * 100) <= 100
                      ? '#03a9f4'
                      : '#01579b '
                  };
                  top: -5px;
                  left: calc(${
                    parseInt((calcTotalprice / 10000) * 100) <= 100
                      ? parseInt((calcTotalprice / 10000) * 100)
                      : 100
                  }% - 30px);
                  z-index: 10;
                  transition: 0.15s all ease-in-out;`"
                class="icon-shipping-truck"
                viewBox="0 0 40.55 24"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="truck-body"
                      d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                    ></path>
                    <path
                      class="truck-body"
                      d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                    ></path>
                    <path
                      class="wheel"
                      style="fill: white"
                      d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                    ></path>
                    <path
                      class="wheel"
                      style="fill: white"
                      d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                    ></path>
                  </g>
                </g>
              </svg>
              <v-progress-linear
                striped
                :color="
                  parseInt((calcTotalprice / 10000) * 100) <= 100
                    ? 'light-blue'
                    : 'light-blue-darken-4'
                "
                height="10"
                :model-value="
                  parseInt((calcTotalprice / 10000) * 100) <= 100
                    ? parseInt((calcTotalprice / 10000) * 100)
                    : 100
                "
              ></v-progress-linear>
            </div>
            <div>
              <v-card-text
                style="font-weight: bold; color: #4a4a4a"
                v-if="10000 - calcTotalprice > 0"
              >
                only
                <span style="font-weight: bolder; color: #0d2a52"
                  >${{ 10000 - calcTotalprice }}</span
                >
                away from free shipping
              </v-card-text>
              <v-card-text
                v-if="10000 - calcTotalprice <= 0"
                style="font-weight: bold; color: #4a4a4a"
                class="py-1 my-1"
              >
                Now Your Order Qualifies For
                <span style="color: #0d2a52">Free Shipping!</span>
              </v-card-text>
            </div>
          </div>
          <v-card-item
            v-for="item in cartItems"
            :key="item.id"
            style="
              max-height: 250px;
              padding: 3px;
              margin: 1px;
              border-bottom: 1px solid darkgray;
            "
          >
            <v-container fluid>
              <v-row class="align-center">
                <v-col cols="4">
                  <img
                    :src="item.thumbnail"
                    style="max-width: 100%; max-height: 100%"
                  />
                </v-col>
                <v-col cols="8" style="position: relative">
                  <v-card-action
                    style="position: absolute; top: 0px; right: 0px"
                  >
                    <v-btn
                      elevation="0"
                      @click="removeItem(item.id)"
                      style="
                        background-color: transparent;
                        color: #0d2a52;
                        font-size: 20px;
                        z-index: 100;
                        text-align: end;
                      "
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-card-action>
                  <v-card-item>
                    <v-card-title
                      style="
                        font-size: 12px;
                        font-weight: bold;
                        white-space: pre-wrap;
                      "
                      >{{ item.title }} - {{ item.brand }}
                    </v-card-title>
                    <v-card-subtitle
                      style="white-space: pre-wrap; font-size: 12px"
                      >Category: {{ item.category }}</v-card-subtitle
                    >
                    <v-card-text
                      style="
                        margin-left: 1px;
                        border: 1px solid gray;
                        width: fit-content;
                        padding: 0px 5px;
                        border-radius: 30px;
                      "
                    >
                      <button @click="dec(item)" style="font-weight: 700">
                        -
                      </button>
                      <input
                        type="number"
                        v-model="item.quantity"
                        style="
                          width: 50px;
                          padding: 0;
                          margin: 0;
                          border: 0;
                          outline: 0;
                          text-align: center;
                          font-weight: 700;
                          font-size: 15px;
                        "
                      />
                      <button @click="inc(item)" style="font-weight: 700">
                        +
                      </button>
                    </v-card-text>
                    <v-card-text style="font-weight: 600; color: darkgray">
                      Subtotal: ${{
                        Math.ceil(
                          item.price -
                            item.price * (item.discountPercentage / 100)
                        ) * item.quantity
                      }}
                    </v-card-text>
                  </v-card-item>
                </v-col>
              </v-row>
            </v-container>
          </v-card-item>
          <v-card-text
            class="mb-0 py-2"
            style="font-weight: bold; color: black"
          >
            Total Price:
            <span style="padding-left: 5px; color: #0d2a52"
              >${{ calcTotalprice }}</span
            >
          </v-card-text>
          <v-card-text
            class="mb-0 pb-0"
            style="font-size: 14px; color: darkgrey"
          >
            Tax included and shipping calculated at checkout
          </v-card-text>
          <v-card-text class="py-0">
            <v-checkbox-btn
              v-model="enabled"
              class="pe-2"
              label="I agree with terms & conditions"
            ></v-checkbox-btn>
          </v-card-text>
          <v-card-text style="text-align: center" class="my-2 py-0">
            <router-link
              :to="{ name: 'check_out' }"
              style="text-decoration: none; color: white; font-weight: bolder"
            >
              <v-btn
                elevation="0"
                :disabled="!enabled"
                style="
                  background-color: #0d2a52;
                  color: whitesmoke;
                  width: 80%;
                  border-radius: 30px;
                  height: 50px;
                "
              >
                Check out</v-btn
              >
            </router-link>
          </v-card-text>
          <v-card-text style="text-align: center" class="my-0 py-0">
            <router-link :to="{ name: 'cart_page' }">
              <v-btn
                variant="outlined"
                style="
                  background-color: white;
                  color: #0d2a52;
                  width: 80%;
                  border-radius: 30px;
                  height: 50px;
                  font-weight: bold;
                "
                >view cart</v-btn
              >
            </router-link>
          </v-card-text>
        </v-card-item>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { inject, onMounted, ref, computed } from "vue";
import { cartStore } from "@/stores/cart";

const addProduct = cartStore();
const cartItems = computed(() => addProduct.cartItems);
const emitter = inject("emitter");

const drawer = ref(false);
const enabled = ref(false);

// Increase quantity for a specific item
const inc = (item) => {
  item.quantity++;
};

// Decrease quantity for a specific item
const dec = (item) => {
  if (item.quantity > 0) {
    item.quantity--;
  }
};

// Remove item from cart
const removeItem = (productId) => {
  addProduct.removeItem(productId);
};

// total price
const calcTotalprice = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return (
      total +
      Math.ceil(item.price - item.price * (item.discountPercentage / 100)) *
        item.quantity
    );
  }, 0);
});
// Open cart drawer
onMounted(() => {
  emitter.on("openCart", () => {
    drawer.value = !drawer.value;
  });
});
</script>

<style lang="scss">
.v-navigation-drawer__content {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: #0d2a52;
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: white;
  }
}
</style>
