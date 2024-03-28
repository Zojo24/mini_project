import { create } from 'zustand';
import {
  devtools,
  persist,
} from 'zustand/middleware';

let hotelListStore = (set) => ({
  totalHotels: [],

  //호텔등록
  addHotel: (hotelInfo) =>
    set((state) => ({
      totalHotels: [
        ...state.totalHotels,
        { ...hotelInfo, id: getRandomInteger(1, 5000) },
      ],
    })),

  //호텔수정하기
  saveEditHotel: (newHotelInfo) =>
    set((state) => ({
      totalHotels: [...newHotelInfo],
    })),

  deleteHotel: (hotelId) =>
    set((state) => ({
      totalHotels: state.totalHotels.filter(
        (hotel) => hotel.id !== Number(hotelId)
      ),
    })),
});

hotelListStore = devtools(hotelListStore);
hotelListStore = persist(hotelListStore, { name: "hotelLists" });

export const usehotelListStore = create(hotelListStore);
let id = 3;
function getId() {
  return id++;
}

function getRandomInteger(min, max) {
  // min과 max 사이의 랜덤 수를 반환합니다.
  // Math.random()은 0 이상 1 미만의 랜덤 수를 반환하므로,
  // 이를 사용하여 min 이상 max 이하의 랜덤 정수를 계산합니다.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
