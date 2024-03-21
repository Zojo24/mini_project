import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let registerStore = (set) => ({
  register: false,
  setRegister: (value) => set({ register: value }),
});

registerStore = devtools(registerStore);
registerStore = persist(registerStore, { name: "user" });

export const useRegisterStore = create(registerStore);
