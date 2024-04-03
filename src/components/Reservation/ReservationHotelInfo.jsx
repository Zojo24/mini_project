import React from "react";
import Heading from "../Heading";
import Box from "../Box";
import ReservationHotelInfoItems from "./ReservationHotelInfoItems";
import { useReservationStore } from "../../store/reservationStore";
import { digit3 } from "../../store/digit3";
import { useLoginStore } from "../../store/loginStore";

const ReservationHotelInfo = ({ ...isitem }) => {
  // const { paymentInfos } = useReservationStore();

  const { userCredit } = useLoginStore();
  // const paymentinfo = paymentInfos[0].data.result;

  return (
    <Box className="reservation__hotel-info">
      <Heading tag={"h3"} text={"호텔 예약정보"} />
      <div>
        <ul className="reservation__hotel-info__list">
          <ReservationHotelInfoItems {...isitem} />
        </ul>
        <div className="flex justify-between items-baseline py-4">
          <span className="text-sm pr-2">보유 금액</span>
          <div>
            <span className="text-2xl font-extrabold text-blue-700" style={{ fontFamily: "var(--eng1)" }}>
              {digit3(userCredit)}
            </span>
            <span className="text-lg pl-1">원</span>
          </div>
        </div>
        <div className="flex justify-between items-baseline pb-4">
          <span className="text-sm pr-2">결제후 보유 금액</span>
          <div>
            <span className="text-xl font-extrabold text-gray-700" style={{ fontFamily: "var(--eng1)" }}>
              {digit3(userCredit - isitem.total_price)}
            </span>
            <span className="text-lg pl-1">원</span>
          </div>
        </div>
        <div className="flex justify-between items-baseline pb-4">
          <span className="text-lg pr-2">총 결제 금액</span>
          <div>
            <span className="text-3xl font-extrabold text-rose-600" style={{ fontFamily: "var(--eng1)" }}>
              {digit3(isitem.total_price)}
            </span>
            <span className="text-lg pl-1 ">원</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ReservationHotelInfo;
