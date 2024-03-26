import React, { useEffect } from "react";
import { useVisualStore } from "../../store/visualStore";
import ReservationHotelInfo from "./ReservationHotelInfo";
import ReservationPersonInfo from "./ReservationPersonInfo";
import "../../styles/pages/reservation.css";
import subvisual from "../../assets/subvisual3.png";

const userInfo = {
  role: "USER",
  credit: 500000,
  profile_image: "이미지 주소",
  name: "가나다",
  email: "123@123.com",
  address: "주소가 불러와집니다.",
  city: "도시이름이 불러와집니다.",
  nation: "",
  zip_code: "우편번호가 불러와집니다.",
};

const ReservationSecond = () => {
  const { setTitle } = useVisualStore();

  useEffect(() => {
    setTitle("Reservation Hotels", subvisual);
  }, [setTitle]);

  return (
    <div className="main pb-20">
      <div className="container">
        <div className="reservation mt-10">
          <ReservationHotelInfo userInfo={userInfo} />
          <ReservationPersonInfo userInfo={userInfo} />
        </div>
      </div>
    </div>
  );
};

export default ReservationSecond;
