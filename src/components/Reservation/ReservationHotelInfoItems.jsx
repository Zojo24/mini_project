import React from "react";
import { Link } from "react-router-dom";
import { digit3 } from "../../store/digit3";
import RoomPicture from "../../components/Hotel/RoomPicture";

const ReservationHotelInfoItems = (isitem) => {
  const { hotel, adult_count, child_count, check_out, check_in, room, total_price } = isitem;
  console.log(isitem);
  const formattedPrice = digit3(total_price);
  const photo = room.thumbnails[0].img_url;

  return (
    <>
      <li className="grid group items-center gap-3 grid-cols-[min-content_1fr_min-content] grid-rows-[repeat(auto-fill,minmax(0,auto))] border-b border-b-gray-300 border-dashed py-3">
        <Link to={`/hoteldetail/${hotel.id}`}>
          <RoomPicture image={photo} className={"md"} />
        </Link>
        <div>
          <div>
            <Link to={`/hoteldetail/${hotel.id}`} className=" group-hover:text-blue-700 line-clamp-2 font-bold">
              {hotel.name}
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
              <div>
                : {room.type} / {room.bed_type}
              </div>
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
