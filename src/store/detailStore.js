import { create } from 'zustand';
import {
  createJSONStorage,
  persist,
} from 'zustand/middleware';

export const useDetailStore = create(
  persist(
    (set) => ({
      detailInfo: {},
      sendDetail: ({ name, id }) =>
        set((state) => ({
          detailInfo: {
            name,
            id,
          },
        })),
    }),

    {
      name: "detail-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
