import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let loginStore = (set) => ({
  isLogined: false,
  setIsLogined: (value) => set({ isLogined: value }),
});

loginStore = devtools(loginStore);
loginStore = persist(loginStore, { name: "user" });

export const useloginStore = create(loginStore);
