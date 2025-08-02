<template>
  <div class="product-details">
    <h1
      style="
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        color: #0d2a52;
        padding: 20px;
      "
    >
      {{ data.title }}
    </h1>
    <v-lazy>
      <v-container class="py-10">
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6">
            <img
              :src="showenitem[data.id] ? showenitem[data.id] : data.thumbnail"
              style="width: 100%; height: 400px"
            />
            <div style="text-align: center">
              <v-btn-toggle v-model="showenitem[data.id]">
                <v-btn
                  v-for="(pic, i) in data.images"
                  :key="i"
                  :value="pic"
                  style="padding: 2px; margin: 4px"
                >
                  <img :src="pic" style="width: 50px; height: 40px" />
                </v-btn>
              </v-btn-toggle>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <v-card elevation="0">
              <v-card-item>
                <v-card-title
                  style="
                    font-size: 20px;
                    font-weight: 700;
                    color: black;
                    letter-spacing: 0;
                  "
                >
                  {{ data.category }} For Sale
                </v-card-title>
                <v-card-text
                  style="
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    gap: 5px;
                    padding-bottom: 0;
                    margin-bottom: 0;
                  "
                >
                  <v-rating
                    v-model="data.rating"
                    readonly
                    style="fill: #787878; color: #787878"
                    active-color="#ff6a00"
                    half-increments
                    density="compact"
                    size="small"
                  ></v-rating>
                  <v-card-text style="font-weight: 600; color: #787878"
                    >Stock : {{ data.stock }}</v-card-text
                  >
                </v-card-text>
                <v-card-text
                  style="font-weight: 600; color: rgb(140 140 140)"
                  class="my-0 py-2"
                  >{{ data.description }}</v-card-text
                >
                <v-card-text
                  style="font-weight: 600; color: rgb(140 140 140)"
                  class="my-0 py-2"
                  >Brand: <span style="font-weight: 400">{{ data.brand }}</span>
                </v-card-text>
                <v-card-text
                  style="font-weight: 600; color: rgb(140 140 140)"
                  class="my-0 py-2"
                  >Availability :
                  <span style="font-weight: 400">In Stock</span></v-card-text
                >
                <v-card-text
                  style="font-weight: 600; color: rgb(140 140 140)"
                  class="my-0 py-2"
                  ><del>{{ data.price }}</del> From
                  <span style="color: black">{{
                    Math.ceil(
                      data.price - data.price * (data.discountPercentage / 100)
                    )
                  }}</span></v-card-text
                >
                <v-card-text
                  style="font-weight: 600; color: rgb(140 140 140)"
                  class="my-0 py-2"
                  >Quantity</v-card-text
                >
                <v-card-text
                  style="
                    margin-left: 15px;
                    border: 1px solid gray;
                    width: fit-content;
                    padding: 15px;
                    border-radius: 30px;
                  "
                >
                  <button
                    @click="dec"
                    style="font-weight: 700; font-size: 18px"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    v-model="quantity"
                    style="
                      width: 70px;
                      padding: 0;
                      margin: 0;
                      border: 0;
                      outline: 0;
                      text-align: center;
                      font-weight: 700;
                      font-size: 18px;
                    "
                  />
                  <button
                    @click="inc"
                    style="font-weight: 700; font-size: 18px"
                  >
                    +
                  </button>
                </v-card-text>
                <v-card-text style="font-weight: 600; color: rgb(140 140 140)">
                  Subtotlal:
                  {{
                    Math.ceil(
                      data.price - data.price * (data.discountPercentage / 100)
                    ) * quantity
                  }}
                </v-card-text>
                <v-btn
                  elevation="0"
                  style="
                    width: 80%;
                    margin-top: 10px;
                    margin-left: 10%;
                    height: 50px;
                    background-color: #0d2a52;
                    border-radius: 40px;
                    color: whitesmoke;
                    font-weight: bold;
                  "
                  @click="
                    addItem(data);
                    addsnack(data);
                  "
                  >add to cart</v-btn
                >
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-lazy>
  </div>
</template>
<script setup>
import { productModule } from "@/stores/products";
import { onMounted, ref, computed, watch, inject } from "vue";
import { useRoute } from "vue-router";
import { cartStore } from "@/stores/cart";
const addProduct = cartStore();
const emitter = inject("emitter");
const addsnack = (data) => {
  emitter.emit("snackbar", data);
};
const addItem = (data) => {
  addProduct.addItem({
    ...data,
    quantity: quantity.value,
  });
};
const route = useRoute();
const showenitem = ref({});
const quantity = ref(1);
const inc = () => {
  quantity.value++;
};
const dec = () => {
  if (quantity.value > 0) {
    quantity.value--;
  }
};
const productStore = productModule();
const data = computed(() => productStore.productDetails);
watch(() => {
  productStore.getsingleProduct(route.params.productid);
});
onMounted(() => {
  productStore.getsingleProduct(route.params.productid);
});
</script>
