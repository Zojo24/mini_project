import React from "react";
import RoomPicture from "../Hotel/RoomPicture";
import { Link } from "react-router-dom";
import room from "../../assets/hotelroom3.jpeg";
import { IoCloseOutline } from "react-icons/io5";
import GuestCounter from "../GuestCounter";

const ReservationHotelInfoItems = () => {
  return (
    <>
      <li className="grid items-center grid-cols-[min-content_1fr] gap-3 text-left border-b border-b-gray-300 border-dashed py-3">
        <Link to="/hoteldetail">
          <RoomPicture image={room} className="base" />
        </Link>
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
        </div>
      </li>
      <li className="grid group items-center gap-[0.5rem] grid-cols-[min-content_1fr_min-content] grid-rows-[repeat(auto-fill,minmax(0,auto))] border-b border-b-gray-300 border-dashed py-3">
        <RoomPicture image={room} />
        <div>
          <Link to="/hoteldetail" className="font-semibold group-hover:text-blue-700">
            호텔명
          </Link>
          <div className="text-gray-500 text-sm">1박가격</div>
        </div>
        <div className="self-start justify-self-end text-lg text-gray-500">
          <button>
            <IoCloseOutline />
          </button>
        </div>
        <div></div>
        <div>
          <GuestCounter className={"sm"} />
        </div>
        <div className="whitespace-nowrap">₩ 총 가격</div>
      </li>
      <li className="grid group items-center gap-[0.5rem] grid-cols-[min-content_1fr_min-content] grid-rows-[repeat(auto-fill,minmax(0,auto))] border-b border-b-gray-300 border-dashed py-3">
        <RoomPicture image={room} />
        <div>
          <Link to="/hoteldetail" className="font-semibold group-hover:text-blue-700">
            호텔명
          </Link>
          <div className="text-gray-500 text-sm">1박가격</div>
        </div>
        <div className="self-start justify-self-end text-lg text-gray-500">
          <button>
            <IoCloseOutline />
          </button>
        </div>
        <div></div>
        <div>
          <GuestCounter className={"sm"} />
        </div>
        <div className="whitespace-nowrap">₩ 총 가격</div>
      </li>
    </>
  );
};

export default ReservationHotelInfoItems;
