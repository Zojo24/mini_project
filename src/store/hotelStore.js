import { create } from 'zustand';

export const useHotelStore = create((set) => ({
  hotelLists: [],
  addHotel: (location, price, availability, comment, facilit) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { text: todoText, id: getId(), isCompleted: false },
      ],
    })),
}));
