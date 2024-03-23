import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let cartStore = (set) => ({
  cartInfos: [],
  addInfo: (cartList) =>
    set((state) => ({
      cartInfos: [...state.cartInfos, cartList],
    })),
});

cartStore = devtools(cartStore);
cartStore = persist(cartStore, { name: "cart" });

export const usecartStore = create(cartStore);
