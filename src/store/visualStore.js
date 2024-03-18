import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let visualStore = (set) => ({
  title: "",
  setTitle: (text) => set({ title: text }),
});

visualStore = devtools(visualStore);
visualStore = persist(visualStore, { name: "visual" });

export const useVisualStore = create(visualStore);
