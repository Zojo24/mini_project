import React from "react";
import RoomPicture from "../Hotel/RoomPicture";
import { Link } from "react-router-dom";
import { digit3 } from "../../store/digit3";

const ReservationHotelInfoItems = (item) => {
  const { adult_count, child_count, check_out, check_in, total_price, hotel_name, file } = item;

  const formattedPrice = digit3(total_price);
  console.log(item);
  return (
    <>
      <li className="grid group items-center gap-3 grid-cols-[min-content_1fr_min-content] grid-rows-[repeat(auto-fill,minmax(0,auto))] border-b border-b-gray-300 border-dashed py-3">
        <Link to="/hoteldetail">
          <RoomPicture image={file} className={"md"} />
        </Link>
        <div>
          <div>
            <Link to="/hoteldetail" className=" group-hover:text-blue-700 line-clamp-2 font-bold">
              {hotel_name}
            </Link>
            <div className="text-sm flex mt-2 leading-6">
              <b className="font-semibold">예약일</b>
              <div>
                : {check_in} ~ {check_out}
              </div>
            </div>
            <div className="text-sm flex leading-6">
              <b className="font-semibold">인원수</b>
              <div>
                : 성인 {adult_count}, 어린이 {child_count}
              </div>
            </div>
            <div className="text-sm flex leading-6">
              <b className="font-semibold">룸 정보</b>
              <div> : 디럭스 / 더블베드</div>
            </div>
          </div>
        </div>
        <div className="--price col-span-2 text-right pt-3 border-t border-solid border-gray-200 flex justify-between">
          <strong>소계</strong>
          {formattedPrice} 원
        </div>
      </li>
    </>
  );
};

export default ReservationHotelInfoItems;
