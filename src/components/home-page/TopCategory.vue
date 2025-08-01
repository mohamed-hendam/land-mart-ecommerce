<template>
  <div class="top-cat">
    <div class="cyber-banner">
      <v-container fluid>
        <img
          src="../../assets/images/cyber-banner.webp"
          style="width: 100%; height: 100%"
        />
      </v-container>
    </div>
    <div class="top-categories my-8">
      <h1>top categories</h1>
      <v-container fluid>
        <v-row>
          <v-col
            cols="4"
            sm="3"
            md="2"
            lg="2"
            v-for="cat in categories"
            :key="cat.id"
          >
            <div>
              <v-hover v-slot="{ isHovering, props }">
                <div v-bind="props">
                  <img
                    :src="cat.image"
                    :style="`width: 100%;transition:0.4s all ease-in-out ;scale: ${
                      isHovering ? 1.05 : 1
                    }`"
                  />
                </div>
              </v-hover>
              <p style="text-align: center">{{ cat.title }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const categories = ref([
  {
    id: 1,
    title: "Mobile Phones",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
  },
  {
    id: 2,
    title: "Labtops",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=1754607865454114020",
  },
  {
    id: 3,
    title: "televisions",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
  },
  {
    id: 4,
    title: "PCs & accessories",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
  },
  {
    id: 5,
    title: "Audio & Video",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
  },
  {
    id: 6,
    title: "Gaming",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
  },
  {
    id: 7,
    title: "Home Appliances",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
  },
  {
    id: 8,
    title: "Kitchen",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
  },

  {
    id: 9,
    title: "Cameras",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
  },
  {
    id: 10,
    title: "Consumables",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
  },
  {
    id: 11,
    title: "Smart Homes",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
  },
  {
    id: 12,
    title: "Accessories",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
  },
]);
</script>

<style scoped lang="scss">
.top-cat {
  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    color: #1d3a73;
    margin: 20px;
  }
}

@media (max-width: 767px) {
  .top-cat {
    h1 {
      text-align: center;
      font-size: 30px;
      margin: 10px;
    }
  }
}
</style>
