import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

let reserveRoomStore = (set) => ({
  reservedRoom: {},

  //호텔등록
  addRoom: (roomInfo) =>
    set((state) => ({
      reservedRoom: roomInfo,
    })),
});

reserveRoomStore = devtools(reserveRoomStore);
reserveRoomStore = persist(reserveRoomStore, { name: "hotelLists" });
export const useReserveRoomStore = create(reserveRoomStore);
