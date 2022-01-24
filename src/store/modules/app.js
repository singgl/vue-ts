import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const appStore = defineStore("app", {
  state: () => {
    return {
      Open: false,
    };
  },
  getters: {
    getOpen: (state) => {
      return state.Open;
    },
  },
  actions: {
    setOpen() {
      this.Open = !this.Open;
      console.log("app", this.Open);
    },
  },
});
