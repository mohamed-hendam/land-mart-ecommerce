// stores/search.js
import { defineStore } from "pinia";
import axios from "axios";

export const searchProducut = defineStore("searchProducut", {
  state: () => ({
    searchData: [],
    loading: false,
  }),

  actions: {
    async getSearch(newQuery) {
      if (!newQuery || newQuery.trim() === "") {
        this.searchData = [];
        return;
      }

      this.loading = true;

      try {
        const res = await axios.get(
          `https://dummyjson.com/products/search?q=${newQuery}`
        );
        this.searchData = res.data.products;
      } catch (err) {
        console.error("Search error:", err);
        this.searchData = [];
      } finally {
        this.loading = false;
      }
    },
  },
});
