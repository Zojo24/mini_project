import React, { useEffect } from "react";
import Heading from "../Heading";
import Box from "../Box";
import ReservationHotelInfoItems from "./ReservationHotelInfoItems";
import { useReservationStore } from "../../store/reservationStore";
import { digit3 } from "../../store/digit3";
import { useLoginStore } from "../../store/loginStore";
import instance from "../../api/axios";
import request from "../../api/request";

const ReservationHotelInfo = () => {
  const token = localStorage.getItem("token");
  const { fetchHotels } = request; // 필요한 요청 URL을 추출
  const { paymentInfos } = useReservationStore();

  const { userCredit, userName, login } = useLoginStore();
  const paymentinfo = paymentInfos[0].data.result;

  // console.log(reservedRoom);

  return (
    <Box className="reservation__hotel-info">
      <Heading tag={"h3"} text={"호텔 예약정보"} />
      <div>
        <ul className="reservation__hotel-info__list">
          <ReservationHotelInfoItems {...paymentinfo} />
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
              {digit3(userCredit - paymentinfo.total_price)}
            </span>
            <span className="text-lg pl-1">원</span>
          </div>
        </div>
        <div className="flex justify-between items-baseline pb-4">
          <span className="text-lg pr-2">총 결제 금액</span>
          <div>
            <span className="text-3xl font-extrabold text-rose-600" style={{ fontFamily: "var(--eng1)" }}>
              {digit3(paymentinfo.total_price)}
            </span>
            <span className="text-lg pl-1 ">원</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ReservationHotelInfo;
