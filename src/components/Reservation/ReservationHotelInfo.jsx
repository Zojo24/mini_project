import React from "react";
import Heading from "../Heading";
import Box from "../Box";
import ReservationHotelInfoItems from "./ReservationHotelInfoItems";

const ReservationHotelInfo = () => {
  return (
    <Box className="reservation__hotel-info">
      <Heading tag={"h3"} text={"호텔 예약리스트"} />
      <div>
        <ul className="reservation__hotel-info__list">
          <ReservationHotelInfoItems />
        </ul>
        <div className="flex justify-between items-baseline py-4">
          <span className="text-sm pr-2">보유 금액</span>
          <div>
            <span className="text-2xl font-extrabold text-blue-700" style={{ fontFamily: "var(--eng1)" }}>
              1,000,000
            </span>
            <span className="text-lg pl-1">원</span>
          </div>
        </div>
        <div className="flex justify-between items-baseline pb-4">
          <span className="text-lg pr-2">총 결재 금액</span>
          <div>
            <span className="text-3xl font-extrabold text-rose-600" style={{ fontFamily: "var(--eng1)" }}>
              500,000
            </span>
            <span className="text-lg pl-1 ">원</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ReservationHotelInfo;
