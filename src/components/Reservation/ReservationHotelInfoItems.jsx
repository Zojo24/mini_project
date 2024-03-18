import React from "react";
import RoomPicture from "../Hotel/RoomPicture";
import { Link } from "react-router-dom";
import room from "../../assets/hotelroom3.jpeg";

const ReservationHotelInfoItems = () => {
  return (
    <>
      <li className="grid group items-center gap-[0.2rem_0.5rem] grid-cols-[min-content_1fr_min-content] grid-rows-[repeat(auto-fill,minmax(0,auto))] border-b border-b-gray-300 border-dashed py-3">
        <RoomPicture image={room} />
        <div>
          <Link to="/hoteldetail" className="font-semibold group-hover:text-blue-700">
            호텔명
          </Link>
          <div className="text-gray-500 text-sm">1박가격 ⨉ 갯수</div>
        </div>
        <div className="--price">₩ 총 가격</div>
      </li>
      <li className="grid group items-center gap-[0.2rem_0.5rem] grid-cols-[min-content_1fr_min-content] grid-rows-[repeat(auto-fill,minmax(0,auto))] border-b border-b-gray-300 border-dashed py-3">
        <RoomPicture image={room} />
        <div>
          <Link to="/hoteldetail" className="font-semibold group-hover:text-blue-700">
            호텔명
          </Link>
          <div className="text-gray-500 text-sm">1박가격 ⨉ 갯수</div>
        </div>
        <div className="--price">₩ 총 가격</div>
      </li>
    </>
  );
};

export default ReservationHotelInfoItems;
