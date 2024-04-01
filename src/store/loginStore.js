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
  userAddress: "",
  userCity: "",
  userZipCode: "",
  userNation: "",

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
      userAddress: userInfo.address,
      userCity: userInfo.city,
      userZipCode: userInfo.zip_code,
      userNation: userInfo.nation,
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
      userAddress: "",
      userCity: "",
      userZipCode: "",
      userNation: "",
    }),
});

loginStore = devtools(loginStore);
loginStore = persist(loginStore, { name: "login" });

export const useLoginStore = create(loginStore);
