import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let loginStore = (set) => ({
  login: false,
  user: {},
  accessToken: "",
  setLogin: (value) => set({ login: value }),
  setUser: (userInfo, accessToken) => set({ user: userInfo, accessToken }),
});

loginStore = devtools(loginStore);
loginStore = persist(loginStore, { name: "login" });

export const useLoginStore = create(loginStore);
