import { create } from 'zustand';

export const useHotelStore = create((set) => ({
  hotelLists: [],
  addHotel: (location, name, price, availability, comment) =>
    set((state) => ({
      todos: [
        ...state.hotelLists,
        {
          location,
          id: getId(),
          name,
          price,
          availability,
          comment,
        },
      ],
    })),
}));

let id = 0;
function getId() {
  return id++;
}
