import React, { useEffect } from "react";
import Heading from "../Heading";
import { useReservationStore } from "../../store/reservationStore";
import MypageReservationItems from "./MypageReservationItems";
import request from "../../api/request";
import instance from "../../api/axios";
import { useLoginStore } from "../../store/loginStore";

const { fetchOrders } = request; // 필요한 요청 URL을 추출

const MypageReservation = () => {
  // const { totalInfos } = useReservationStore();
  const { userName, userCredit, userId, userEmail, address, city, nation, zip_code, profile_image } = useLoginStore();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const responseOrder = await instance.get(`${fetchOrders}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // const data = responseOrder.data;
      console.log(responseOrder.data);
    };
    fetchData();
  }, []);

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
            {/* {totalInfos.length > 0 ? (
              totalInfos.map((items, index) => <MypageReservationItems key={index} items={items} />)
            ) : (
              <tr>
                <td colSpan={7} className="!py-10">
                  예약된 내역이 없습니다.
                </td>
              </tr>
            )} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MypageReservation;
