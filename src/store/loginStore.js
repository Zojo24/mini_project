import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let loginStore = (set) => ({
  login: false,
  user: {},
  setLogin: (value) => set({ login: value }),
  setUser: (userInfo) => set({ user: userInfo }),
});

loginStore = devtools(loginStore);
loginStore = persist(loginStore, { name: "login" });

export const useLoginStore = create(loginStore);
