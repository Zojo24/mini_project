import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let registerStore = (set) => ({
  user: { name: "", email: "", birth: "", password: "" },
  setUser: (user) => set({ user }),
});

registerStore = devtools(registerStore);
registerStore = persist(registerStore, {
  name: "user",
  getStorage: () => localStorage,
});

export const useRegisterStore = create(registerStore);
