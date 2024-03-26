import React from "react";
import RoomPicture from "../Hotel/RoomPicture";
import { Link } from "react-router-dom";
import room from "../../assets/hotelroom3.jpeg";

const MypageAllReservationItems = () => {
  return (
    <>
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
        <td>홍길동</td>
        <td>디럭스</td>
        <td>2</td>
        <td>0</td>
        <td>2024-03-18 ~ 2024-03-19</td>
        <td className="text-right">
          <b>5,400,000 원</b>
        </td>
      </tr>
    </>
  );
};

export default MypageAllReservationItems;
