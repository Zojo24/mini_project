import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let reservationStore = (set) => ({
  reservationInfos: [],
  addInfo: (reservationText) =>
    set((state) => ({
      reservationInfos: [...state.reservationInfos, reservationText],
    })),
});

reservationStore = devtools(reservationStore);
reservationStore = persist(reservationStore, { name: "reservation" });

export const useReservationStore = create(reservationStore);
