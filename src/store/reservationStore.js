import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let reservationStore = (set) => ({
  paymentInfos: {},
  totalInfos: [],
  cartInfos: [],

  // 결제정보
  addInfo: (paymentState) =>
    set((state) => ({
      paymentInfos: [paymentState],
    })),

  // 결제정보 + 개인정보
  addAdditionalInfo: (additionalText) =>
    set((state) => ({
      totalInfos: [...state.totalInfos, additionalText],
    })),

  // 장바구니
  addCartInfo: (cartState) =>
    set((state) => ({
      cartInfos: [
        ...state.cartInfos,
        {
          ...cartState,
          cart_id: getId(),
        },
      ],
    })),
  deleteCart: (cartId) =>
    set((state) => ({
      cartInfos: state.cartInfos.filter((cart) => cart.cart_id !== cartId),
    })),
});

reservationStore = devtools(reservationStore);
reservationStore = persist(reservationStore, { name: "reservation" });

export const useReservationStore = create(reservationStore);

let cart_id = 0;
function getId() {
  return cart_id++;
}
