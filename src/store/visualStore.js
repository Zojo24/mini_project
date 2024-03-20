import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let visualStore = (set) => ({
  title: "",
  img: "",
  setTitle: (text, src) => set({ title: text, img: src }),
});

visualStore = devtools(visualStore);
visualStore = persist(visualStore, { name: "visual" });

export const useVisualStore = create(visualStore);
