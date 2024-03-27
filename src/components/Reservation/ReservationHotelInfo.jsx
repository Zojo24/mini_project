import React from "react";
import Heading from "../Heading";
import Box from "../Box";
import ReservationHotelInfoItems from "./ReservationHotelInfoItems";
import { useReservationStore } from "../../store/reservationStore";
import { digit3 } from "../../store/digit3";

const ReservationHotelInfo = ({ userInfo }) => {
  const { paymentInfos } = useReservationStore();
  const { credit } = userInfo;
  const totalPayment = paymentInfos?.reduce((acc, curr) => acc + curr.total_price, 0);
  const formattedTotalPayment = digit3(totalPayment);

  return (
    <Box className="reservation__hotel-info">
      <Heading tag={"h3"} text={"호텔 예약정보"} />
      <div>
        <ul className="reservation__hotel-info__list">
          {paymentInfos.map((item, index) => (
            <ReservationHotelInfoItems key={index} {...item} />
          ))}
        </ul>
        <div className="flex justify-between items-baseline py-4">
          <span className="text-sm pr-2">보유 금액</span>
          <div>
            <span className="text-2xl font-extrabold text-blue-700" style={{ fontFamily: "var(--eng1)" }}>
              {digit3(credit)}
            </span>
            <span className="text-lg pl-1">원</span>
          </div>
        </div>
        <div className="flex justify-between items-baseline pb-4">
          <span className="text-sm pr-2">결제후 보유 금액</span>
          <div>
            <span className="text-xl font-extrabold text-gray-700" style={{ fontFamily: "var(--eng1)" }}>
              {digit3(credit - totalPayment)}
            </span>
            <span className="text-lg pl-1">원</span>
          </div>
        </div>
        <div className="flex justify-between items-baseline pb-4">
          <span className="text-lg pr-2">총 결재 금액</span>
          <div>
            <span className="text-3xl font-extrabold text-rose-600" style={{ fontFamily: "var(--eng1)" }}>
              {formattedTotalPayment}
            </span>
            <span className="text-lg pl-1 ">원</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ReservationHotelInfo;
