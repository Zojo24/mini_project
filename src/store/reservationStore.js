import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let reservationStore = (set) => ({
  reservationInfos: {},
  totalInfos: [],

  // 예약정보
  addInfo: (reservationText) =>
    set((state) => ({
      reservationInfos: [reservationText],
    })),

  // 예약정보 + 개인정보
  addAdditionalInfo: (additionalText) =>
    set((state) => ({
      totalInfos: [...state.totalInfos, additionalText],
    })),
});

reservationStore = devtools(reservationStore);
reservationStore = persist(reservationStore, { name: "reservation" });

export const useReservationStore = create(reservationStore);
