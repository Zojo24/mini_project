import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let loginStore = (set) => ({
  login: false,
  accessToken: "",
  userId: null,
  userName: "",
  userEmail: "",
  userBirth: "",
  userCredit: 0,
  userRole: "",

  setLogin: (value) => set({ login: value }),
  setAccessToken: (token) => set({ accessToken: token }),
  setUserInfo: (userInfo, token) =>
    set({
      userId: userInfo.id,
      userName: userInfo.name,
      userEmail: userInfo.email,
      userBirth: userInfo.birth,
      userCredit: userInfo.credit,
      userRole: userInfo.role,
      accessToken: token,
    }),
  logout: () =>
    set({
      login: false,
      accessToken: "",
      userId: null,
      userName: "",
      userEmail: "",
      userBirth: "",
      userCredit: 0,
      userRole: "",
    }),
});

loginStore = devtools(loginStore);
loginStore = persist(loginStore, { name: "login" });

export const useLoginStore = create(loginStore);
