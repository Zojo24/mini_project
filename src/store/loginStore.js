import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let loginStore = (set) => ({
  login: false,
  setLogin: (value) => set({ login: value }),
});

loginStore = devtools(loginStore);
loginStore = persist(loginStore, { name: "user" });

export const useLoginStore = create(loginStore);
