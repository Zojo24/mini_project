import { create } from 'zustand';
import {
  createJSONStorage,
  persist,
} from 'zustand/middleware';

export const useHotelStore = create(
  persist(
    (set) => ({
      hotelLists: [],
      addHotel: ({ name }) =>
        set((state) => ({
          hotelLists: [
            ...state.hotelLists,
            {
              // location,
              id: getId(),
              name,
              // price,
              // availability,
              // comment,
            },
          ],
        })),
      deleteHotel: (todoId) =>
        set((state) => ({
          hotelLists: state.hotelLists.filter((hotel) => hotel.id !== todoId),
        })),
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
