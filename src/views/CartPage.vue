<template>
  <div class="main-cart-details">
    <v-container v-if="!cartItems.length" class="no-data">
      <v-row>
        <v-col cols="12" style="text-align: center">
          <v-card elevation="0">
            <v-card-item>
              <v-card-title
                style="
                  padding: 20px;
                  font-size: 30px;
                  color: #0d2a52;
                  font-weight: 900;
                "
                >shopping cart</v-card-title
              >
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
                <router-link to="/">
                  <v-btn class="continue-shopping-btn" elevation="0">
                    continue shopping
                  </v-btn></router-link
                >
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="cartItems.length" fluid class="main-data">
      <v-card style="position: sticky; top: 0; z-index: 1000">
        <h1 style="font-size: 50px; padding: 10px; font-weight: 900">
          Your Cart
        </h1>
        <h4 style="margin-left: 20px">{{ cartItems.length }} Items</h4>
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

        <!-- table is best practice -->
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
      </v-card>
      <v-row class="py-4">
        <v-col cols="12" lg="8" class="pa-0">
          <v-row style="padding: 10px">
            <v-col
              cols="3"
              md="7"
              style="
                background-color: #f6f1f1;
                color: black;
                text-transform: uppercase;
                font-size: 12px;
              "
              >product</v-col
            >
            <v-col
              cols="2"
              md="1"
              style="
                background-color: #f6f1f1;
                color: black;
                text-transform: uppercase;
                font-size: 12px;
              "
              >price</v-col
            >
            <v-col
              cols="3"
              md="2"
              style="
                background-color: #f6f1f1;
                color: black;
                text-transform: uppercase;
                padding: 15px;
                font-size: 12px;
                text-align: center;
              "
              >quantity</v-col
            >
            <v-col
              cols="3"
              md="1"
              style="
                background-color: #f6f1f1;
                color: black;
                text-transform: uppercase;
                font-size: 12px;
              "
              >subtotal</v-col
            >
            <v-col
              cols="1"
              lg="1"
              style="
                background-color: #f6f1f1;
                text-transform: uppercase;
                font-size: 12px;
              "
            ></v-col>
          </v-row>
          <v-card
            elevation="0"
            style="width: 100%; border: 1px solid #e9ecef; padding: 5px"
          >
            <v-card-item
              v-for="item in cartItems"
              :key="item.id"
              style="padding: 10px 0; border-bottom: 1px solid grey"
            >
              <v-row>
                <v-col cols="12" md="7">
                  <div
                    style="
                      display: flex;
                      justify-content: start;
                      align-items: center;
                      gap: 15px;
                    "
                  >
                    <img
                      :src="item.thumbnail"
                      style="width: 150px; height: 150px"
                    />
                    <v-card-subtitle
                      >({{ item.title }})Sample
                      <p>Category: {{ item.category }}</p>
                    </v-card-subtitle>
                  </div>
                </v-col>
                <v-col
                  cols="3"
                  md="1"
                  style="
                    font-size: 12px;
                    font-weight: 400;
                    display: flex;
                    align-items: center;
                  "
                  >${{ item.price }}</v-col
                >
                <v-col
                  cols="4"
                  md="2"
                  style="display: flex; align-items: center"
                >
                  <v-card-text
                    style="
                      font-size: 12px;
                      font-weight: 400;
                      margin-left: 1px;
                      border: 1px solid gray;
                      width: fit-content;
                      padding: 0px 5px;
                      border-radius: 30px;
                      display: flex;
                      justify-content: space-around;
                    "
                  >
                    <button @click="dec(item)" style="font-weight: 400">
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
                        font-weight: 400;
                        font-size: 13px;
                      "
                    />
                    <button @click="inc(item)" style="font-weight: 400">
                      +
                    </button>
                  </v-card-text></v-col
                >
                <v-col
                  cols="3"
                  md="1"
                  style="
                    font-size: 12px;
                    font-weight: 400;
                    display: flex;
                    align-items: center;
                  "
                >
                  ${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100)
                    ) * item.quantity
                  }}</v-col
                >
                <v-col
                  cols="2"
                  md="1"
                  style="display: flex; align-items: center"
                >
                  <v-btn
                    elevation="0"
                    @click="removeItem(item.id)"
                    style="
                      background-color: transparent;
                      color: #0d2a52;
                      font-size: 16px;
                      text-align: center;
                    "
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
          <div style="padding: 20px; font-size: 15px">
            <p>
              do you want a gift wrap?
              <strong style="font-weight: bold"> only for $10.00</strong>
              <v-btn variant="outlined" style="border-radius: 20px; margin: 0"
                >add</v-btn
              >
            </p>
            <div>
              <p style="padding: 10px; color: #4a4a4a">Additional Comments</p>
              <v-text-field
                style="width: 50%; height: 100px"
                label="Special Instruction For Seller"
              ></v-text-field>
            </div>
            <p style="padding: 10px">
              Secure Shopping Guarantee
              <v-icon>mdi-shield-check</v-icon>
            </p>
            <img
              src="../assets/images/cart-page-cards.webp"
              style="max-width: 40%"
            />
          </div>
        </v-col>
        <v-col cols="12" lg="4">
          <p
            style="
              color: #0d2a52;
              font-size: 18px;
              font-weight: 600;
              padding: 12px 10px 10px;
              border-bottom: 1px solid gray;
              text-transform: uppercase;
            "
          >
            order summary
          </p>
          <p
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 30px 10px 0;
              border-bottom: 1px solid #dee2e6;
            "
          >
            <strong>Total: </strong><strong> ${{ calcTotalprice }}</strong>
          </p>
          <p style="color: black; font-size: 15px; padding: 5px">
            Get Shipping Estimate:
          </p>
          <div style="display: flex; gap: 5%; padding: 20px 0 10px">
            <p id="contery-btn" style="width: 50%">
              <span
                style="
                  display: block;
                  cursor: pointer;
                  width: 100%;
                  padding: 10px;
                  border: 1px solid gainsboro;
                  border-radius: 20px;
                "
              >
                {{ selectedContery[0].contery }}
              </span>
              <v-menu activator="#contery-btn">
                <v-list v-model:selected="selectedContery">
                  <v-list-item
                    v-for="(con, index) in contries"
                    :key="index"
                    :value="con"
                  >
                    <v-list-item-title>{{ con.contery }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </p>
            <p id="region-btn" style="width: 50%">
              <span
                style="
                  display: block;
                  cursor: pointer;
                  width: 100%;
                  padding: 10px;
                  border: 1px solid gainsboro;
                  border-radius: 20px;
                "
              >
                {{ selectedregion[0].region }}
              </span>
              <v-menu activator="#region-btn">
                <v-list v-model:selected="selectedregion">
                  <v-list-item
                    v-for="(reg, index) in regions"
                    :key="index"
                    :value="reg"
                  >
                    <v-list-item-title>{{ reg.region }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </p>
          </div>
          <div style="padding-bottom: 10px; border-bottom: 1px solid #e9ecef">
            <input
              type="text"
              placeholder="Postal Code"
              style="
                display: block;
                width: 70%;
                padding: 10px;
                border: 1px solid gainsboro;
                border-radius: 20px;
                margin: 5px auto;
              "
            />
          </div>
          <div style="padding: 10px; border-bottom: 1px solid #e9ecef">
            <p style="padding-bottom: 10px">Cupon Code:</p>
            <input
              type="text"
              placeholder="Cupon Code"
              style="
                display: block;
                width: 100%;
                padding: 10px;
                border: 1px solid gainsboro;
                border-radius: 20px;
                margin: 5px auto;
              "
            />
            <p style="font-size: 14px; color: #968686; padding: 5px">
              coupon code will be applied on the checkout page
            </p>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 30px 0;
              border-bottom: 1px solid #dee2e6;
            "
          >
            <strong>Total After Discont : </strong
            ><strong> ${{ calcTotalprice }}</strong>
          </div>
          <div>
            <p style="padding: 10px 5px 15px; color: #4a4a4a; font-size: 14px">
              tax included and shipping calculated at checkout
            </p>
            <v-checkbox-btn
              v-model="enabled"
              class="pe-2"
              label="I agree with terms & conditions"
            ></v-checkbox-btn>
          </div>
          <div style="text-align: center">
            <v-btn
              elevation="0"
              :disabled="!enabled"
              style="
                background-color: #0d2a52;
                color: whitesmoke;
                width: 100%;
                border-radius: 10px;
                height: 50px;
              "
            >
              <router-link
                :to="{ name: 'check_out' }"
                style="text-decoration: none; color: white; font-weight: bolder"
                >Proceed To Checkout</router-link
              ></v-btn
            >
          </div>
          <div>
            <router-link style="text-decoration: none" to="/">
              <v-btn
                variant="outlined"
                elevation="0"
                style="
                  width: 100%;
                  margin-top: 10px;
                  height: 50px;
                  border-radius: 10px;
                  color: #4a4a4a;
                  font-weight: bold;
                  display: block;
                  margin: 10px auto;
                "
              >
                continue shopping
              </v-btn></router-link
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { cartStore } from "@/stores/cart";
const enabled = ref(false);
const addProduct = cartStore();
const cartItems = computed(() => addProduct.cartItems);
const selectedContery = ref([
  {
    contery: "Select Your Contery",
  },
]);
const contries = ref([
  {
    contery: "Egypt",
  },
  {
    contery: "labanon",
  },
  {
    contery: "sudan",
  },
  {
    contery: "libia",
  },
  {
    contery: "Saubi Aribia",
  },
  {
    contery: "seria",
  },
  {
    contery: "Jordon",
  },
]);
const selectedregion = ref([
  {
    region: "Select Your Region",
  },
]);
const regions = ref([
  {
    region: "region1",
  },
  {
    region: "region2",
  },
  {
    region: "region3",
  },
  {
    region: "region4",
  },
]);
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

// // total price
const calcTotalprice = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return (
      total +
      Math.ceil(item.price - item.price * (item.discountPercentage / 100)) *
        item.quantity
    );
  }, 0);
});
</script>

<style lang="scss" scoped>
.main-cart-details {
  .no-data {
    .continue-shopping-btn {
      width: 40%;
      margin-top: 10px;
      height: 50px;
      background-color: #0d2a52;
      border-radius: 40px;
      color: white;
      font-weight: bold;
    }
  }
  // .main-data {

  // }
}
@media (max-width: 767px) {
  .main-cart-details {
    .no-data {
      .continue-shopping-btn {
        width: 80%;
        margin-top: 10px;
        height: 40px;
        border-radius: 30px;
      }
    }
  }
}
</style>
