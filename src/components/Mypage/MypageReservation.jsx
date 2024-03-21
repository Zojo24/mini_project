import React from "react";
import Heading from "../Heading";
import RoomPicture from "../Hotel/RoomPicture";
import { Link } from "react-router-dom";
import room from "../../assets/hotelroom3.jpeg";
import GuestCounter from "../GuestCounter";

const MypageReservation = () => {
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
            <tr className="group">
              <td>2024-03-15</td>
              <td>
                <div className="grid items-center grid-cols-[min-content_1fr] gap-1 text-left">
                  <Link to="/hoteldetail">
                    <RoomPicture image={room} size={"sm"} />
                  </Link>
                  <Link to="/hoteldetail" className=" group-hover:text-blue-700 line-clamp-2">
                    호텔명
                  </Link>
                </div>
              </td>
              <td>디럭스</td>
              <td>2</td>
              <td>0</td>
              <td>2024-03-18 ~ 2024-03-19</td>
              <td className="text-right">
                <b>5,400,000 원</b>
              </td>
            </tr>
            <tr className="group">
              <td>2024-03-17</td>
              <td>
                <div className="grid items-center grid-cols-[min-content_1fr] gap-1 text-left">
                  <Link to="/hoteldetail">
                    <RoomPicture image={room} size={"sm"} />
                  </Link>
                  <Link to="/hoteldetail" className=" group-hover:text-blue-700 line-clamp-2">
                    호텔명
                  </Link>
                </div>
              </td>
              <td>디럭스</td>
              <td>4</td>
              <td>2</td>
              <td>2024-04-18 ~ 2024-05-19</td>
              <td className="text-right">
                <b>5,400,000 원</b>
              </td>
            </tr>
            <tr>
              <td colSpan={7} className="!py-10">
                예약된 내역이 없습니다.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MypageReservation;
