import React from "react";
import RoomPicture from "../Hotel/RoomPicture";
import { Link } from "react-router-dom";
import room from "../../assets/hotelroom3.jpeg";

const ReservationHotelInfoItems = ({ close }) => {
  return (
    <>
      <li className="group grid items-center grid-cols-[min-content_1fr] gap-3 text-left border-b border-b-gray-300 border-dashed py-3">
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
        <div className="col-span-2 justify-self-end items-center flex gap-4">
          <div className="text-sm">소계</div>
          <div>
            <b>100,000</b> 원
          </div>
        </div>
        <div className="col-span-2 justify-self-end flex gap-2">
          <Link to="/reservation" onClick={close} className="btn-blue-outline sm">
            결제
          </Link>
          <Link to="/reservation" className="btn-red-outline sm">
            삭제
          </Link>
        </div>
      </li>
      <li className="group grid items-center grid-cols-[min-content_1fr] gap-3 text-left border-b border-b-gray-300 border-dashed py-3">
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
        <div className="col-span-2 justify-self-end items-center flex gap-4">
          <div className="text-sm">소계</div>
          <div>
            <b>100,000</b> 원
          </div>
        </div>
        <div className="col-span-2 justify-self-end flex gap-2">
          <Link to="/reservation" onClick={close} className="btn-blue-outline sm">
            결제
          </Link>
          <Link to="/reservation" className="btn-red-outline sm">
            삭제
          </Link>
        </div>
      </li>
      <li className="group grid items-center grid-cols-[min-content_1fr] gap-3 text-left border-b border-b-gray-300 border-dashed py-3">
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
        <div className="col-span-2 justify-self-end items-center flex gap-4">
          <div className="text-sm">소계</div>
          <div>
            <b>100,000</b> 원
          </div>
        </div>
        <div className="col-span-2 justify-self-end flex gap-2">
          <Link to="/reservation" onClick={close} className="btn-blue-outline sm">
            결제
          </Link>
          <Link to="/reservation" className="btn-red-outline sm">
            삭제
          </Link>
        </div>
      </li>
    </>
  );
};

export default ReservationHotelInfoItems;
