import { defineStore } from "pinia";

export const cartStore = defineStore("cartStore", {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  }),
  actions: {
    addItem(item) {
      if (!item || !item.id) {
        console.error("Invalid item or missing id:", item);
        return;
      }

      const existingItem = this.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.cartItems.push(item);
      }
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    removeItem(itemId) {
      this.cartItems = this.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    resetItems() {
      this.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});
