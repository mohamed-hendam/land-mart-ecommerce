<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <ResponsiveDrawer />
      <v-main
        :style="`padding-top:${
          route.name == 'check_out' ||
          route.name == 'sign_up' ||
          route.name == 'log_in'
            ? '0px'
            : windowWidth <= 990
            ? '60px'
            : '143px'
        } `"
        ><slot></slot
      ></v-main>
      <AppNav
        v-show="
          route.name != 'check_out' &&
          route.name != 'sign_up' &&
          route.name != 'log_in' &&
          windowWidth > 990
        "
      />
      <ResponsiveNav
        v-show="
          route.name != 'check_out' &&
          route.name != 'sign_up' &&
          route.name != 'log_in' &&
          windowWidth <= 990
        "
      />
      <FixedNav
        v-show="
          route.name != 'check_out' &&
          route.name != 'sign_up' &&
          route.name != 'log_in' &&
          windowWidth > 990
        "
      />
      <AppFooter
        v-show="
          route.name != 'check_out' &&
          route.name != 'sign_up' &&
          route.name != 'log_in'
        "
      />
    </v-layout>
  </div>
</template>
<script setup>
import CartDrawer from "@/components/global/CartDrawer.vue";
import ResponsiveDrawer from "@/components/global/ResponsiveDrawer.vue";
import FixedNav from "@/components/global/FixedNav.vue";
import AppNav from "@/components/global/AppNav.vue";
import ResponsiveNav from "@/components/global/ResponsiveNav.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
const route = useRoute();
const windowWidth = ref(0);
onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.onresize = () => {
    windowWidth.value = window.innerWidth;
  };
});
</script>
