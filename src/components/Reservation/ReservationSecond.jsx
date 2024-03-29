import React, { useEffect, useState } from "react";
import { useVisualStore } from "../../store/visualStore";
import ReservationHotelInfo from "./ReservationHotelInfo";
import ReservationPersonInfo from "./ReservationPersonInfo";
import "../../styles/pages/reservation.css";
import subvisual from "../../assets/subvisual3.png";
import { useReservationStore } from "../../store/reservationStore";
import instance from "../../api/axios";
import request from "../../api/request";

// const userInfo = {
//   role: "USER",
//   credit: 500000,
//   profile_image: "이미지 주소",
//   name: "가나다",
//   email: "123@123.com",
//   address: "주소가 불러와집니다.",
//   city: "도시이름이 불러와집니다.",
//   nation: "",
//   zip_code: "우편번호가 불러와집니다.",
// };

const ReservationSecond = () => {
  const { setTitle } = useVisualStore();
  // const { paymentInfos } = useReservationStore();
  const { fetchOrders } = request; // 필요한 요청 URL을 추출
  const token = localStorage.getItem("token");
  const [reservationData, setReservationData] = useState({});

  useEffect(() => {
    setTitle("Reservation Hotels", subvisual);

    const fetchData = async () => {
      try {
        const response = await instance.get(`${fetchOrders}/8`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
        console.log(response);
        setReservationData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setTitle]);

  return (
    <div className="main pb-20">
      <div className="container">
        <div className="reservation mt-10">
          <ReservationHotelInfo userInfo={reservationData} />
          <ReservationPersonInfo userInfo={reservationData} />
        </div>
      </div>
    </div>
  );
};

export default ReservationSecond;
