import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useHotelStore = create(
  persist(
    (set) => ({
      thisHotel: {},
      fetchHotel: async (id) => {
        axios.get(`/hotels/${id}`).then((response) => {
          set({ thisHotel: response.data });
        });
      },
    }),

    {
      name: "hotel-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

let id = 0;
function getId() {
  return id++;
}
