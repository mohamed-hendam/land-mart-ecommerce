import { defineStore } from "pinia";
import axios from "axios";

export const productModule = defineStore("productModule", {
  state: () => ({
    flashDeals: [],
    topProducts: [],
    topMobilephones: [],
    topLaptops: [],
    watches: [],
    categories: [
      {
        id: 1,
        title: "Phones",
        route: "smartphones",
      },
      {
        id: 2,
        title: "Laptops",
        route: "laptops",
      },
      {
        id: 3,
        title: "Fragrances",
        route: "fragrances",
      },
      {
        id: 4,
        title: "Mens Wathces",
        route: "mens-watches",
      },
      {
        id: 5,
        title: "Skin Care",
        route: "skin-care",
      },
      {
        id: 6,
        title: "Furniture",
        route: "furniture",
      },
      {
        id: 7,
        title: "Womens Jewellery",
        route: "womens-jewellery",
      },
    ],
    selectedCategory: [],
    productDetails: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get(
          "https://dummyjson.com/products?limit=193&skip=0&select=title,price,category,description,thumbnail,images,discountPercentage,rating"
        )
        .then((res) => {
          this.flashDeals = res.data.products.slice(0, 9);
          this.topProducts = res.data.products.filter(
            (el) => el.category === "tops"
          );
          this.topMobilephones = res.data.products.filter(
            (el) => el.category === "smartphones"
          );
          this.topLaptops = res.data.products.filter(
            (el) => el.category === "laptops"
          );
          this.watches = res.data.products.filter(
            (el) =>
              el.category === "mens-watches" ||
              el.category === "sunglasses" ||
              el.category === "womens-watches"
          );
        })
        .catch((err) => console.log(err));
    },
    async getProductsbycategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => {
          this.selectedCategory = res.data.products;
        })
        .catch((err) => console.log(err));
    },
    async getsingleProduct(productid) {
      await axios
        .get(`https://dummyjson.com/products/${productid}`)
        .then((res) => {
          this.productDetails = res.data;
        });
    },
  },
});
