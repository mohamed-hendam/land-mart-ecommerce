<template>
  <div class="quick-view">
    <v-dialog v-model="dialog" max-width="900" max-height="600">
      <v-icon
        @click="dialog = !dialog"
        style="
          background-color: #0d2a52;
          color: whitesmoke;
          font-size: 25px;
          position: absolute;
          right: -10px;
          top: -10px;
          z-index: 10;
          padding: 12px;
        "
      >
        mdi-close
      </v-icon>
      <v-card class="content-card">
        <v-container class="py-10">
          <v-row>
            <v-col cols="12" sm="12" md="6" lg="6">
              <img
                :src="
                  showenitem[product.id]
                    ? showenitem[product.id]
                    : product.thumbnail
                "
                style="width: 100%; height: 300px"
              />
              <div style="text-align: center">
                <v-btn-toggle v-model="showenitem[product.id]">
                  <v-btn
                    v-for="(pic, i) in product.images"
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
                      white-space: pre-wrap;
                    "
                    >({{ product.title }}) - {{ product.category }} For Sale
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
                      v-model="product.rating"
                      readonly
                      style="fill: #787878; color: #787878"
                      active-color="#ff6a00"
                      half-increments
                      density="compact"
                      size="small"
                    ></v-rating>
                    <v-card-text style="font-weight: 600; color: #787878"
                      >Stock : {{ product.stock }}</v-card-text
                    >
                  </v-card-text>
                  <v-card-text
                    style="font-weight: 600; color: rgb(140 140 140)"
                    class="my-0 py-2"
                    >{{ product.description }}</v-card-text
                  >
                  <v-card-text
                    style="font-weight: 600; color: rgb(140 140 140)"
                    class="my-0 py-2"
                    >Brand:
                    <span style="font-weight: 400">{{ product.brand }}</span>
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
                    ><del>{{ product.price }}</del> From
                    <span style="color: black">{{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
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
                  <v-card-text
                    style="font-weight: 600; color: rgb(140 140 140)"
                  >
                    Subtotlal:
                    {{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
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
                      addItem(product);
                      addsnack(product);
                    "
                    >add to cart</v-btn
                  >
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { onMounted, ref, inject } from "vue";
import { cartStore } from "@/stores/cart";
const addProduct = cartStore();
const showenitem = ref({});
const quantity = ref(1);
const dialog = ref(false);
const product = ref([]);
const emitter = inject("emitter");
const addsnack = (product) => {
  emitter.emit("snackbar", product);
};
const addItem = (product) => {
  addProduct.addItem({
    ...product,
    quantity: quantity.value,
  });
};
onMounted(() => {
  addProduct.addItem();
  emitter.on("openDialog", (data) => {
    product.value = data;
    dialog.value = !dialog.value;
  });
});
const inc = () => {
  quantity.value++;
};
const dec = () => {
  if (quantity.value > 0) {
    quantity.value--;
  }
};
</script>
<style lang="scss">
.content-card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: blue;
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: #0d2a52;
  }
}
</style>
