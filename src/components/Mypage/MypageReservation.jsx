import React from "react";
import Heading from "../Heading";
import { useReservationStore } from "../../store/reservationStore";
import MypageReservationItems from "./MypageReservationItems";

const MypageReservation = () => {
  const { paymentInfos } = useReservationStore();
  return (
    <div>
      <div className="bg-white rounded-xl p-10">
        <Heading tag={"h4"} className={"sm"} text={"예약내역 확인"} />
        <table className="mypage-cart__table mt-5">
          <colgroup>
            <col style={{ width: "10rem" }} />
            <col style={{ width: "" }} />
            <col style={{ width: "5rem" }} />
            <col style={{ width: "7rem" }} />
            <col style={{ width: "7rem" }} />
            <col style={{ width: "15rem" }} />
            <col style={{ width: "8rem" }} />
          </colgroup>
          <thead>
            <tr>
              <th>예약일</th>
              <th>호텔</th>
              <th>룸</th>
              <th>성인</th>
              <th>어린이</th>
              <th>체크인 / 아웃</th>
              <th>총 금액</th>
            </tr>
          </thead>
          <tbody>
            {paymentInfos.length > 0 ? (
              paymentInfos.map((item, index) => <MypageReservationItems key={index} {...item} />)
            ) : (
              <tr>
                <td colSpan={7} className="!py-10">
                  예약된 내역이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MypageReservation;
