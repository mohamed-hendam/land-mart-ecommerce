<template>
  <div class="responsive-drawer">
    <v-navigation-drawer
      temporary
      class="drawer-content bg-#0d2a52 pa-0"
      width="250"
      v-model="resDrawer"
      style="background-color: #0d2a52"
    >
      <v-card elevation="0" style="background-color: #0d2a52">
        <v-card-item class="px-1" style="background-color: #0d2a52">
          <v-card-title
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 20px;
              font-weight: 700;
              padding: 5px 5px 20px;
              color: whitesmoke;
            "
            ><span>Menu</span>
            <v-icon @click="resDrawer = false">mdi-close</v-icon></v-card-title
          >
          <v-divider></v-divider>
          <v-hover v-slot="{ isHovering, props }" open-delay="100">
            <v-card-text
              v-bind="props"
              :style="`background-color:${
                isHovering ? '#227fff' : '#0d2a52'
              }; color: whitesmoke `"
              @click="router.push({ name: 'home' })"
              ><v-icon
                icon="mdi-home"
                style="font-size: 30px; color: whitesmoke"
              ></v-icon
              ><span style="padding-left: 10px; font-weight: bold"
                >Home</span
              ></v-card-text
            >
          </v-hover>
          <v-divider></v-divider>
          <v-hover v-slot="{ isHovering, props }" open-delay="100">
            <v-card-text
              v-bind="props"
              :style="`background-color:${
                isHovering ? '#227fff' : '#0d2a52'
              }; color: whitesmoke `"
              @click="router.push({ name: 'log_in' })"
              ><v-icon
                icon="mdi-account"
                style="font-size: 30px; color: whitesmoke"
              ></v-icon
              ><span style="padding-left: 10px; font-weight: bold"
                >Log In</span
              ></v-card-text
            >
          </v-hover>
          <v-divider></v-divider>
          <v-hover v-slot="{ isHovering, props }" open-delay="100">
            <v-card-text
              v-bind="props"
              :style="`background-color:${
                isHovering ? '#227fff' : '#0d2a52'
              }; color: whitesmoke `"
              @click="router.push({ name: 'help' })"
              ><i
                class="fa-solid fa-headset"
                style="font-size: 25px; color: whitesmoke"
              ></i
              ><span style="padding-left: 10px; font-weight: bold"
                >Help</span
              ></v-card-text
            >
          </v-hover>
          <!-- <p
            style="
              font-weight: bold;
              color: whitesmoke;
              text-align: center;
              padding: 10px;
            "
          >
            Select Currency
          </p>
          <div
            class="language d-flex align-center justify-center ga-2 cursor-pointer"
            id="language-btn"
            style="padding: 20px 2px"
          >
            <span v-html="selectedlang[0].icon"></span>
            <span
              >{{ selectedlang[0].lang }} / {{ selectedlang[0].currency }}
            </span>
            <v-icon>mdi-chevron-down</v-icon>
            <v-menu activator="#language-btn">
              <v-list v-model:selected="selectedlang" mandatory>
                <v-list-item
                  v-for="lang in langs"
                  :key="lang.lang"
                  :value="lang"
                >
                  <v-list-item-title
                    class="d-flex justify-start align-center ga-1"
                  >
                    <span v-html="lang.icon"></span>
                    <span>{{ lang.lang }}/{{ lang.currency }}</span>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div> -->
          <v-divider></v-divider>
          <div v-for="cat in categories" :key="cat.id">
            <v-hover v-slot="{ isHovering, props }" open-delay="100">
              <v-card-text
                v-bind="props"
                :style="`background-color:${
                  isHovering ? '#227fff' : '#0d2a52'
                }; color: whitesmoke; `"
                @click="
                  router.push({
                    name: 'products',
                    params: { category: cat.route, title: cat.title },
                  })
                "
              >
                {{ cat.title }}
              </v-card-text>
            </v-hover>
            <v-divider></v-divider>
          </div>
        </v-card-item>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>
<script setup>
import { ref, inject, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { productModule } from "@/stores/products";
const productStore = productModule();
const categories = computed(() => productStore.categories);
const router = useRouter();
const resDrawer = ref(false);
const emitter = inject("emitter");
onMounted(() => {
  emitter.on("openmenu", () => {
    resDrawer.value = !resDrawer.value;
  });
});
// const selectedlang = ref([
//   {
//     icon: `  <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     version="1.1"
//                     x="0px"
//                     y="0px"
//                     viewBox="0 0 512 512"
//                     style="width: 20px; enable-background: new 0 0 512 512"
//                     xmlns:xlink="http://www.w3.org/1999/xlink"
//                     xml:space="preserve"
//                   >
//                     <circle
//                       style="fill: #f0f0f0"
//                       cx="256"
//                       cy="256"
//                       r="256"
//                     ></circle>
//                     <g>
//                       <path
//                         style="fill: #0052b4"
//                         d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"
//                       ></path>
//                       <path
//                         style="fill: #0052b4"
//                         d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"
//                       ></path>
//                       <path
//                         style="fill: #0052b4"
//                         d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z"
//                       ></path>
//                       <path
//                         style="fill: #0052b4"
//                         d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"
//                       ></path>
//                       <path
//                         style="fill: #0052b4"
//                         d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"
//                       ></path>
//                       <path
//                         style="fill: #0052b4"
//                         d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"
//                       ></path>
//                       <path
//                         style="fill: #0052b4"
//                         d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"
//                       ></path>
//                       <path
//                         style="fill: #0052b4"
//                         d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"
//                       ></path>
//                     </g>
//                     <g>
//                       <path
//                         style="fill: #d80027"
//                         d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z"
//                       ></path>
//                       <path
//                         style="fill: #d80027"
//                         d="M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z"
//                       ></path>
//                       <path
//                         style="fill: #d80027"
//                         d="M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z"
//                       ></path>
//                       <path
//                         style="fill: #d80027"
//                         d="M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z"
//                       ></path>
//                       <path
//                         style="fill: #d80027"
//                         d="M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z"
//                       ></path>
//                     </g>
//                   </svg>`,
//     lang: "EN",
//     currency: "USD",
//   },
// ]);
// const langs = ref([
//   {
//     icon: `  <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     version="1.1"
//                     x="0px"
//                     y="0px"
//                     viewBox="0 0 512 512"
//                     style="width: 20px; enable-background: new 0 0 512 512"
//                     xmlns:xlink="http://www.w3.org/1999/xlink"
//                     xml:space="preserve"
//                   >
//                     <circle
//                       style="fill: #f0f0f0"
//                       cx="256"
//                       cy="256"
//                       r="256"
//                     ></circle>
//                     <g>
//                       <path
//                         style="fill: #0052b4"
//                         d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"
//                       ></path>
//                       <path
//                         style="fill: #0052b4"
//                         d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"
//                       ></path>
//                       <path
//                         style="fill: #0052b4"
//                         d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z"
//                       ></path>
//                       <path
//                         style="fill: #0052b4"
//                         d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"
//                       ></path>
//                       <path
//                         style="fill: #0052b4"
//                         d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"
//                       ></path>
//                       <path
//                         style="fill: #0052b4"
//                         d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"
//                       ></path>
//                       <path
//                         style="fill: #0052b4"
//                         d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"
//                       ></path>
//                       <path
//                         style="fill: #0052b4"
//                         d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"
//                       ></path>
//                     </g>
//                     <g>
//                       <path
//                         style="fill: #d80027"
//                         d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z"
//                       ></path>
//                       <path
//                         style="fill: #d80027"
//                         d="M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z"
//                       ></path>
//                       <path
//                         style="fill: #d80027"
//                         d="M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z"
//                       ></path>
//                       <path
//                         style="fill: #d80027"
//                         d="M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z"
//                       ></path>
//                       <path
//                         style="fill: #d80027"
//                         d="M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z"
//                       ></path>
//                     </g>
//                   </svg>`,
//     lang: "EN",
//     currency: "USD",
//   },
//   {
//     icon: `          <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         version="1.1"
//                         x="0px"
//                         y="0px"
//                         viewBox="0 0 512 512"
//                         style="width: 20px; enable-background: new 0 0 512 512"
//                         xmlns:xlink="http://www.w3.org/1999/xlink"
//                         xml:space="preserve"
//                       >
//                         <path
//                           style="fill: #ffda44"
//                           d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957L256,322.783  L15.923,345.043z"
//                         ></path>
//                         <path
//                           d="M256,0C145.929,0,52.094,69.472,15.923,166.957L256,189.217l240.077-22.261C459.906,69.472,366.071,0,256,0z"
//                         ></path>
//                         <path
//                           style="fill: #d80027"
//                           d="M15.923,166.957C5.633,194.69,0,224.686,0,256s5.633,61.31,15.923,89.043h480.155  C506.368,317.31,512,287.314,512,256s-5.632-61.31-15.923-89.043H15.923z"
//                         ></path>
//                       </svg>`,
//     lang: "DE",
//     currency: "EURO",
//   },
// ]);
</script>
