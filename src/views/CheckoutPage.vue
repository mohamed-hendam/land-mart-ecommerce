<template>
  <div class="check-out">
    <v-container fluid style="padding: 0">
      <v-row>
        <v-col cols=""></v-col>
        <v-col
          cols="12"
          md="6"
          class="order-1 order-md-0"
          style="padding-top: 40px"
        >
          <div>
            <h3 style="padding-left: 15px">New-Mart-Demo</h3>
            <v-breadcrumbs
              :items="['cart', 'information']"
              style="font-size: 14px"
            >
              <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
              </template>
            </v-breadcrumbs>
          </div>
          <v-col cols="12" style="text-align: center">
            <h4 style="color: darkgray">Express Checkout</h4>
          </v-col>
          <v-col cols="12" style="text-align: center">
            <v-btn
              elevation="0"
              style="
                background-color: #5a31f4;
                color: white;
                font-size: 18px;
                font-weight: bold;
                width: 47%;
                margin-right: 3%;
              "
              >Shop
              <svg
                class="icon icon--full-color"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 38 24"
                width="38"
                height="24"
                aria-labelledby="pi-shopify_pay"
              >
                <title id="pi-shopify_pay">Shop Pay</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  fill="#000"
                ></path>
                <path
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                  fill="#fff"
                ></path>
                <path
                  d="M21.382 9.713c0 1.668-1.177 2.858-2.821 2.858h-1.549a.133.133 0 00-.12.08.127.127 0 00-.01.049v2.192a.129.129 0 01-.13.129h-1.084a.13.13 0 01-.13-.13V6.986a.127.127 0 01.08-.12.129.129 0 01.05-.01h2.9c1.637 0 2.814 1.19 2.814 2.858v-.001zm-1.352 0c0-.958-.658-1.658-1.55-1.658h-1.468a.13.13 0 00-.13.13v3.05a.127.127 0 00.038.092.129.129 0 00.092.038h1.468c.892.005 1.55-.695 1.55-1.652zm1.674 3.791a1.527 1.527 0 01.647-1.317c.423-.316 1.084-.48 2.055-.514l1.033-.036v-.303c0-.607-.41-.863-1.068-.863-.658 0-1.075.231-1.17.61a.127.127 0 01-.125.09h-1.022a.13.13 0 01-.126-.092.125.125 0 01-.004-.055c.152-.898.904-1.58 2.494-1.58 1.692 0 2.303.783 2.303 2.276v3.172a.13.13 0 01-.132.129h-1.03a.13.13 0 01-.13-.13v-.236a.096.096 0 00-.061-.091.1.1 0 00-.107.022c-.31.334-.808.575-1.607.575-1.175 0-1.95-.607-1.95-1.657zm3.735-.687v-.246l-1.339.07c-.705.036-1.115.326-1.115.816 0 .444.376.69 1.034.69.893 0 1.42-.48 1.42-1.33zm2.316 4.6v-.919a.13.13 0 01.049-.1.132.132 0 01.108-.027c.158.029.318.044.479.044a1.229 1.229 0 001.245-.876l.067-.211a.133.133 0 000-.088l-2.145-5.471a.13.13 0 01.06-.165.13.13 0 01.062-.015h1.04a.132.132 0 01.123.085l1.456 3.859a.131.131 0 00.125.088.133.133 0 00.125-.088l1.265-3.848a.13.13 0 01.126-.09h1.076a.134.134 0 01.132.116.134.134 0 01-.008.063l-2.295 6.076c-.528 1.413-1.433 1.773-2.43 1.773a1.959 1.959 0 01-.561-.066.132.132 0 01-.1-.14h.001zM8.57 6.4a5.363 5.363 0 00-3.683 1.427.231.231 0 00-.029.31l.618.839a.236.236 0 00.362.028 3.823 3.823 0 012.738-1.11c2.12 0 3.227 1.584 3.227 3.15 0 1.7-1.163 2.898-2.835 2.921-1.292 0-2.266-.85-2.266-1.974a1.908 1.908 0 01.713-1.48.231.231 0 00.033-.324l-.65-.815a.236.236 0 00-.339-.034 3.43 3.43 0 00-.942 1.183 3.39 3.39 0 00-.337 1.47c0 1.935 1.655 3.452 3.775 3.464h.03c2.517-.032 4.337-1.884 4.337-4.415 0-2.247-1.667-4.64-4.752-4.64z"
                  fill="#5A31F4"
                ></path>
              </svg>
            </v-btn>
            <v-btn
              elevation="0"
              style="
                width: 47%;
                background-color: black;
                color: white;
                font-size: 18px;
                font-weight: bold;
                margin-left: 3%;
              "
            >
              <svg width="41" height="17" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M13.448 7.134c0-.473-.04-.93-.116-1.366H6.988v2.588h3.634a3.11 3.11 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944"
                    fill="#4285F4"
                  />
                  <path
                    d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.728 6.728 0 0 0 6.01 3.703"
                    fill="#34A853"
                  />
                  <path
                    d="M3.212 8.267a4.034 4.034 0 0 1 0-2.572V3.964H.978A6.678 6.678 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017l2.234-1.731z"
                    fill="#FABB05"
                  />
                  <path
                    d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.728 6.728 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774"
                    fill="#E94235"
                  />
                </g>
              </svg>
              Pay</v-btn
            >
          </v-col>
          <v-row>
            <v-col cols="5.5">
              <p style="padding: 10px 0"><v-divider></v-divider></p>
            </v-col>
            <v-col cols="1">
              <p style="text-align: center; padding: 0; color: darkgray">
                OR
              </p></v-col
            >
            <v-col cols="5.5">
              <p style="padding: 10px 0"><v-divider></v-divider></p>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              style="
                display: flex;
                justify-content: space-between;
                padding: 20px;
              "
            >
              <p>Contact</p>
              <p>
                Have an account ?
                <router-link
                  style="color: #0d2a52; font-weight: bold"
                  :to="{ name: 'log_in' }"
                  >log in</router-link
                >
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" style="padding: 0 20px">
              <v-text-field label="Email Or Phone Number" variant="outlined">
                <template v-slot:append>
                  <v-icon
                    style="
                      background-color: aqua;
                      color: white;
                      width: 60px;
                      height: 100%;
                      margin-left: -75px;
                    "
                  >
                    mdi-account</v-icon
                  >
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" style="padding: 0 20px">
              <v-checkbox-btn
                label="Email Me With News And Offers"
              ></v-checkbox-btn>
            </v-col>
            <v-col cols="12" style="padding: 0 20px">
              <h3>Delivery Method</h3>
              <v-radio-group>
                <v-radio
                  label="Ship"
                  value="one"
                  style="
                    padding: 5px;
                    width: 100%;
                    border: 1px solid gainsboro;
                    color: black;
                  "
                >
                </v-radio>
                <v-radio
                  label="Pick Up"
                  value="two"
                  style="
                    padding: 5px;
                    width: 100%;
                    border: 1px solid gainsboro;
                    color: black;
                  "
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-card-title>Shipping Address</v-card-title>
              <v-card-text
                id="contery-btn"
                style="width: 100%; padding-bottom: 4px; color: #565656"
              >
                <span
                  style="
                    display: block;
                    cursor: pointer;
                    width: 100%;
                    padding: 15px;
                    border: 1px solid gainsboro;
                    border-radius: 10px;
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
              </v-card-text>
              <v-card-text class="py-1">
                <input
                  type="text"
                  placeholder="Frist Name"
                  style="
                    width: 50%;
                    height: 50px;
                    border: 1px solid gainsboro;
                    padding: 10px;
                    margin-right: 1%;
                    border-radius: 10px;
                  "
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name (Optional)"
                  style="
                    width: 48%;
                    height: 50px;
                    border: 1px solid gainsboro;
                    padding: 10px;
                    margin-left: 1%;
                    border-radius: 10px;
                  "
                />
              </v-card-text>
              <v-card-text class="py-1">
                <input
                  type="text"
                  placeholder="Address"
                  style="
                    width: 100%;
                    height: 50px;
                    border: 1px solid gainsboro;
                    padding: 10px;
                    border-radius: 10px;
                  "
                  required
                />
              </v-card-text>
              <v-card-text class="py-1">
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  style="
                    width: 100%;
                    height: 50px;
                    border: 1px solid gainsboro;
                    padding: 10px;
                    border-radius: 10px;
                  "
                />
              </v-card-text>
              <v-card-text class="py-1">
                <input
                  type="text"
                  placeholder="Ctiy"
                  style="
                    width: 32%;
                    height: 50px;
                    border: 1px solid gainsboro;
                    padding: 10px;
                    border-radius: 10px;
                    margin-right: 1%;
                  "
                  required
                />
                <input
                  type="text"
                  placeholder="Covernorate"
                  style="
                    width: 34%;
                    height: 50px;
                    border: 1px solid gainsboro;
                    padding: 10px;
                    border-radius: 10px;
                  "
                  required
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  style="
                    width: 32%;
                    height: 50px;
                    border: 1px solid gainsboro;
                    padding: 10px;
                    border-radius: 10px;
                    margin-left: 1%;
                  "
                />
              </v-card-text>
              <v-card-text>
                <v-btn
                  style="
                    background-color: #0d2a52;
                    color: white;
                    border-radius: 10px;
                    width: 45%;
                    margin-right: 5%;
                    height: 40px;
                    font-weight: bold;
                  "
                  @click="resetData"
                  >Send order
                  <v-icon style="margin-left: 5px">mdi-upload</v-icon></v-btn
                >
                <v-btn
                  variant="outlined"
                  style="
                    background-color: white;
                    border-radius: 10px;
                    width: 45%;
                    margin-left: 5%;
                    height: 40px;
                    font-weight: bolder;
                  "
                >
                  <router-link
                    to="/"
                    style="
                      text-decoration: none;
                      word-spacing: -1px;
                      color: #0d2a52;
                      font-size: 12px;
                      font-weight: bolder;
                    "
                  >
                    Continue Shipping
                    <v-icon style="margin-left: 5px">mdi-widgets</v-icon>
                  </router-link>
                </v-btn>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-subtitle class="py-2"
                >all rigth reseved
                <span style="color: #0d2a52"> Mohamed Hendam</span>
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="5" style="background-color: white">
          <v-card
            v-if="!cartItems.length"
            elevation="0"
            style="background-color: rgb(239 239 239); padding: 20px"
          >
            <v-card-item>
              <v-card-title style="font-size: 40px; font-weight: bold">
                there is no products
              </v-card-title>
            </v-card-item>
          </v-card>
          <v-card
            v-if="cartItems.length"
            elevation="0"
            style="background-color: rgb(239 239 239); padding-top: 40px"
          >
            <v-card-item v-for="item in cartItems" :key="item.id">
              <v-row>
                <v-col cols="2" style="padding: 20px">
                  <v-badge :content="item.quantity">
                    <img
                      :src="item.thumbnail"
                      style="
                        width: 70px;
                        height: 70px;
                        background: white;
                        border-radius: 10px;
                        border: 1px solid darkgrey;
                      "
                    />
                  </v-badge>
                </v-col>
                <v-col cols="6">
                  <v-card-text style="font-size: 14px"
                    >({{ item.title }})Sample
                    <p>Category: {{ item.category }}</p>
                  </v-card-text>
                </v-col>
                <v-col cols="4">
                  <v-card-text>
                    ${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      ) * item.quantity
                    }}</v-card-text
                  >
                </v-col>
              </v-row>
              <v-row style="padding: 5px">
                <v-col cols="12">
                  <input
                    type="text"
                    placeholder="Discount Code"
                    style="
                      width: 70%;
                      padding: 10px;
                      background-color: white;
                      color: black;
                      border: 1px solid grey;
                      border-radius: 5px;
                    "
                  />
                  <v-btn
                    style="
                      width: 15%;
                      margin: 0 0 2px 2px;
                      height: 100%;
                      border-radius: 5px;
                      font-weight: bold;
                      color: gray;
                    "
                    variant="outlined"
                    >Apply</v-btn
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="10">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      padding: 0 10px;
                    "
                  >
                    <card-text style="color: #565656; font-size: 14px"
                      >sybtotal</card-text
                    >
                    <card-text style="color: #565656; font-size: 14px">
                      ${{
                        Math.ceil(
                          item.price -
                            item.price * (item.discountPercentage / 100)
                        ) * item.quantity
                      }}</card-text
                    >
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      padding: 0 10px;
                    "
                  >
                    <card-text style="color: #565656; font-size: 14px"
                      >Shipping</card-text
                    >
                    <card-text style="color: #565656; font-size: 14px"
                      >$20</card-text
                    >
                  </div>
                  <v-divider class="my-2"></v-divider>
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      padding: 0 10px;
                    "
                  >
                    <card-text>Total</card-text>
                    <card-text>
                      ${{
                        Math.ceil(
                          item.price -
                            item.price * (item.discountPercentage / 100)
                        ) *
                          item.quantity +
                        20
                      }}</card-text
                    >
                  </div>
                </v-col>
              </v-row>
              <v-divider></v-divider>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="dialog"
      transition="dialog-top-transition"
      max-height="500"
      max-width="700"
    >
      <v-container>
        <v-card style="border: 6px solid gainsboro">
          <v-card-item>
            <v-card-text style="text-align: center"
              ><v-icon
                style="
                  font-size: 100px;
                  font-weight: bolder;
                  color: #0d2a52;
                  border: 10px solid #0d2a52;
                  border-radius: 50%;
                  text-shadow: #0d2a52 1px 3px 20px;
                  box-shadow: #0d2a52 1px 3px 20px;
                "
                >mdi-check</v-icon
              ></v-card-text
            >
            <v-card-title
              style="
                font-size: 30px;
                font-weight: bolder;
                color: #0d2a52;
                padding: 20px;
              "
              >Your Order Has been Sent Successfully !</v-card-title
            >
            <v-card-text style="color: #565656"
              >If there any problem call us</v-card-text
            >
            <v-card-text style="text-align: end; padding: 10px">
              <v-btn variant="outlined" @click="dialog = false">
                <v-icon
                  style="font-size: 30px; font-weight: bold; color: #565656"
                  >mdi-close</v-icon
                >
              </v-btn>
            </v-card-text>
          </v-card-item>
        </v-card>
      </v-container>
    </v-dialog>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { cartStore } from "@/stores/cart";
const router = useRouter();
const dialog = ref(false);
const addProduct = cartStore();
const cartItems = computed(() => addProduct.cartItems);
const resetData = () => {
  dialog.value = true;
  addProduct.resetItems();
  setTimeout(() => {
    router.push({ name: "home" });
  }, 2000);
};
const selectedContery = ref([
  {
    contery: "Contery / Region",
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
// const items = ref(["cart", "information", "shipping", "payment"]);
</script>

<style scoped lang="scss">
.check-out {
  input[type="text"] {
    &:focus {
      outline: 1px solid rgb(11, 106, 184);
      box-shadow: -1px 0px 7px 2px rgb(11, 106, 184);
    }
  }
}
</style>
