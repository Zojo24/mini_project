import React, { useEffect } from "react";
import { useVisualStore } from "../../store/visualStore";
import ReservationHotelInfo from "./ReservationHotelInfo";
import ReservationPersonInfo from "./ReservationPersonInfo";
import "../../styles/pages/reservation.css";
import subvisual from "../../assets/subvisual3.png";
import { useReservationStore } from "../../store/reservationStore";

const ReservationSecond = () => {
  const { setTitle } = useVisualStore();
  const { reservationInfos } = useReservationStore();

  useEffect(() => {
    setTitle("Reservation Hotels", subvisual);
  }, [setTitle]);

  console.log(reservationInfos);
  return (
    <div className="main pb-20">
      <div className="container">
        <div className="reservation mt-10">
          <ReservationHotelInfo />
          <ReservationPersonInfo />
        </div>
      </div>
    </div>
  );
};

export default ReservationSecond;
