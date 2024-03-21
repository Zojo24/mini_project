import React from "react";
import RoomPicture from "../Hotel/RoomPicture";
import { Link } from "react-router-dom";
import room from "../../assets/hotelroom3.jpeg";

const ReservationHotelInfoItems = () => {
  return (
    <>
      <li className="grid group items-center gap-3 grid-cols-[min-content_1fr_min-content] grid-rows-[repeat(auto-fill,minmax(0,auto))] border-b border-b-gray-300 border-dashed py-3">
        <Link to="/hoteldetail">
          <RoomPicture image={room} className={"md"} />
        </Link>
        <div>
          <div>
            <Link to="/hoteldetail" className=" group-hover:text-blue-700 line-clamp-2 font-bold">
              호텔명
            </Link>
            <div className="text-sm flex mt-2 leading-6">
              <b className="font-semibold">예약일</b>
              <div> : 2024-03-18 ~ 2024-03-19</div>
            </div>
            <div className="text-sm flex leading-6">
              <b className="font-semibold">인원수</b>
              <div> : 성인 1, 어린이 1</div>
            </div>
            <div className="text-sm flex leading-6">
              <b className="font-semibold">룸 정보</b>
              <div> : 디럭스 / 더블베드</div>
            </div>
          </div>
        </div>
        <div className="--price col-span-2 text-right pt-3 border-t border-solid border-gray-200 flex justify-between">
          <strong>소계</strong>500,000 원
        </div>
      </li>
    </>
  );
};

export default ReservationHotelInfoItems;
