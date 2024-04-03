import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useVisualStore } from "../../store/visualStore";
import subvisual from "../../assets/subvisual3.png";

const ReservationThird = () => {
  const { setTitle } = useVisualStore();

  useEffect(() => {
    setTitle("Reservation Done!", subvisual);
  }, [setTitle]);
  return (
    <div className="main pb-20">
      <div className="container py-40">
        <div className=" text-center py-10">
          <strong style={{ fontFamily: "var(--eng2)" }} className="block text-6xl pb-4 text-blue-700">
            Thank you
          </strong>
          <div className="text-2xl text-gray-500">숙박 예약이 완료되었습니다.</div>
        </div>
        <div className="flex justify-center gap-2">
          <Link to="/" className="btn-blue">
            첫페이지 바로가기
          </Link>
          <Link to="/mypage/reservation" className="btn-red-outline">
            주문확인 바로가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReservationThird;
