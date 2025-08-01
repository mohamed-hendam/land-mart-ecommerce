<template>
  <div class="top-offers" style="background-color: rgb(240 240 240)">
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }" open-delay="100">
            <div v-bind="props" style="overflow: hidden; border-radius: 20px">
              <img
                src="../../assets/images/playstations.webp"
                :style="`width: 100%; cursor: pointer;transition:0.8s all ease-in-out ;scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }" open-delay="100">
            <div v-bind="props" style="overflow: hidden; border-radius: 20px">
              <img
                src="../../assets/images/headset.webp"
                :style="`width: 100%; cursor: pointer;transition:0.8s all ease-in-out ;scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }" open-delay="100">
            <div v-bind="props" style="overflow: hidden; border-radius: 20px">
              <img
                src="../../assets/images/chairs.webp"
                :style="`width: 100%; cursor: pointer;transition:0.8s all ease-in-out ;scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6">
          <v-hover v-slot="{ isHovering, props }" open-delay="100">
            <div v-bind="props" style="overflow: hidden; border-radius: 20px">
              <img
                src="../../assets/images/iphones.webp"
                :style="`width: 100%; cursor: pointer;transition:0.8s all ease-in-out ;scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6">
          <v-hover v-slot="{ isHovering, props }" open-delay="100">
            <div v-bind="props" style="overflow: hidden; border-radius: 20px">
              <img
                src="../../assets/images/laptops.webp"
                :style="`width: 100%; cursor: pointer;transition:0.8s all ease-in-out ;scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
