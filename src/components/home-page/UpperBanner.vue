<template>
  <div class="banner">
    <div class="parent">
      <img src="../../assets/images/banner2.jpg" />
      <div class="cont">
        <h3>
          The Best Deals And Biggest Brands
          <span>All in One Place</span>
        </h3>
        <p class="hint">New Arrivals Daily Check What is Trending Now !</p>
        <v-btn variant="outlined" @click="scrollToSection('laptops')"
          >Shop Now</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style lang="scss" scoped>
.banner {
  .parent {
    height: 500px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      // object-fit: cover;
    }
    .cont {
      color: white;
      padding: 30px;
      position: absolute;
      top: 10%;
      left: 10%;
      width: 40%;
      h3 {
        font-size: 42px;
        font-weight: bold;
        span {
          color: #e1c574;
        }
      }
      .v-btn {
        border-radius: 30px;
        height: 50px;
        width: 200px;
        margin: 20px 0;
      }
    }
  }
}
// medai quaries
@media (max-width: 990px) {
  .banner {
    .parent {
      height: 300px;
      .cont {
        padding: 20px;
        h3 {
          font-size: 28px;
        }
        .v-btn {
          margin: 20px 0;
          border-radius: 30px;
          height: 40px;
          width: 150px;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .banner {
    .parent {
      height: 250px;
      .cont {
        padding: 5px;
        h3 {
          font-size: 16px;
        }
        p {
          font-size: 14px;
        }
        .v-btn {
          margin: 8px 0;
          border-radius: 15px;
          height: 25px;
          width: 100px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
