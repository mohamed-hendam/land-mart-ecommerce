<template>
  <div class="home">
    <UpperPanner />
    <TheFeatures />
    <TopOffers />
    <section id="laptops">
      <FlashDeals :products="flashDeals" />
    </section>
    <TopCategory />
    <NewProducts :products="topProducts" />
    <QualityFeatures />
    <TopmobilePhones :products="topMobilephones" />
    <TopLaptops :products="topLaptops" />
    <TopWatches :products="watches" />
    <WhyShop />
  </div>
</template>

<script setup>
import UpperPanner from "@/components/home-page/UpperBanner";
import TheFeatures from "@/components/home-page/TheFeatures";
import TopOffers from "@/components/home-page/TopOffers";
import FlashDeals from "@/components/home-page/FlashDeals";
import TopCategory from "@/components/home-page/TopCategory";
import NewProducts from "@/components/home-page/NewProducts";
import QualityFeatures from "@/components/home-page/QualityFeatures";
import TopmobilePhones from "@/components/home-page/TopmobilePhones";
import TopLaptops from "@/components/home-page/TopLaptops";
import TopWatches from "@/components/home-page/TopWatches";
import WhyShop from "@/components/home-page/WhyShop";
import { productModule } from "@/stores/products";
import { computed, onMounted } from "vue";
const productStore = productModule();
const flashDeals = computed(() => productStore.flashDeals);
const topProducts = computed(() => productStore.topProducts);
const topMobilephones = computed(() => productStore.topMobilephones);
const topLaptops = computed(() => productStore.topLaptops);
const watches = computed(() => productStore.watches);
onMounted(() => {
  productStore.getProducts();
});
</script>
