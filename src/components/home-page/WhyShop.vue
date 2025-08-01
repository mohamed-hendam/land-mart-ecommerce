<template>
  <div class="why-shop">
    <div class="header"><span>why shop</span> with us?</div>
    <v-container fluid>
      <v-row style="color: whitesmoke; text-align: center">
        <v-col cols="6" sm="6" md="4" lg="3">
          <div class="div">
            <img src="../../assets/images/free-shipping.png" />
            <h3>free shipping on first order</h3>
            <p>praesent suscipit mattis facilisis</p>
            <a href="#">Learn More</a>
          </div>
        </v-col>
        <v-col cols="6" sm="6" md="4" lg="3">
          <div class="div">
            <img src="../../assets/images/weekly-flash-sales.png" />
            <h3>weekly flash sale</h3>
            <p>praesent suscipit mattis facilisis</p>
            <a href="#">Learn More</a>
          </div>
        </v-col>
        <v-col cols="6" sm="6" md="4" lg="3">
          <div class="div">
            <img src="../../assets/images/discount.png" />
            <h3>anual payment discount</h3>
            <p>praesent suscipit mattis facilisis</p>
            <a href="#">Learn More</a>
          </div>
        </v-col>
        <v-col cols="6" sm="6" md="4" lg="3">
          <div class="div">
            <img src="../../assets/images/cash-back.png" />
            <h3>cashback reward program</h3>
            <p>praesent suscipit mattis facilisis</p>
            <a href="#">Learn More</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped lang="scss">
.why-shop {
  background-image: url(../../assets/images/why-shop-with-us-banner.webp);
  background-size: cover;
  background-position: left top;
  min-height: 400px;
  padding: 30px 20px 50px;
  .header {
    color: whitesmoke;
    font-weight: 900;
    letter-spacing: 1px;
    font-size: clamp(10px, 5rem, 45px);
    margin: clamp(10px, 3.5rem, 40px);
    text-align: center;
    span {
      color: #10ffda;
    }
  }

  .div {
    img {
      width: 100px;
    }
    h3 {
      font-size: 22px;
      font-weight: 700;
    }
    p {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    a {
      color: whitesmoke;
      font-weight: 500px;
      padding-bottom: 1px;
      text-decoration: none;
      border-bottom: solid whitesmoke 1px;
      &:hover {
        border: 0;
      }
    }
  }
}

@media (max-width: 767px) {
  .why-shop {
    min-height: 200px;
    padding: 20px 10px 30px;
    .header {
      font-size: 20px;
      span {
        color: whitesmoke;
      }
    }
    .div {
      img {
        width: 60px;
      }
      h3 {
        font-size: 16px;
        font-weight: 600;
      }
      p {
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 5px;
      }
      a {
        font-size: 14px;
      }
    }
  }
}
</style>
