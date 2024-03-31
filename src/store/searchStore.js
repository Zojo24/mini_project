import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let searchStore = (set) => ({
  searchTerm: "",
  searchResults: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSearchResults: (results) => set({ searchResults: results }),
});

searchStore = devtools(searchStore);
searchStore = persist(searchStore, { name: "search" });

export const useSearchStore = create(searchStore);
