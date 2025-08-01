import { defineStore } from "pinia";

export const wishlistStore = defineStore("wishlistStore", {
  state: () => ({
    wishlistItems: JSON.parse(localStorage.getItem("wishlistItems")) || [],
  }),
  actions: {
    addItem(item) {
      if (!item || !item.id) {
        console.error("Invalid item or missing id:", item);
        return;
      }

      const existingItem = this.wishlistItems.find(
        (wishlistItem) => wishlistItem.id === item.id
      );

      if (existingItem) {
        return;
      } else {
        this.wishlistItems.push(item);
      }
      localStorage.setItem("wishlistItems", JSON.stringify(this.wishlistItems));
    },
    removeItem(itemId) {
      this.wishlistItems = this.wishlistItems.filter(
        (wishlistItem) => wishlistItem.id !== itemId
      );
      localStorage.setItem("wishlistItems", JSON.stringify(this.wishlistItems));
    },
    resetItems() {
      this.wishlistItems = [];
      localStorage.removeItem("wishlistItems");
    },
  },
});
