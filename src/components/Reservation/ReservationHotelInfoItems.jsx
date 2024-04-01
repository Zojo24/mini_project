import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { digit3 } from "../../store/digit3";
import instance from "../../api/axios";
import request from "../../api/request";
import RoomPicture from "../../components/Hotel/RoomPicture";

const ReservationHotelInfoItems = (item) => {
  const token = localStorage.getItem("token");
  const { fetchHotels } = request; // 필요한 요청 URL을 추출

  const { adult_count, child_count, check_out, check_in, hotelId, total_price } = item;
  const { room_id, member_id } = item.result;
  const formattedPrice = digit3(total_price);

  const [isHotelInfo, setIsHotelInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseHotel = await instance.get(`${fetchHotels}/${hotelId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const hotelData = responseHotel.data.result;
        setIsHotelInfo(hotelData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // console.log(isHotelInfo.rooms);
  // 현재 룸아이디와 맞는 호텔의 룸 조회
  const roomInfo = isHotelInfo.rooms?.find((room) => {
    return room.id === room_id;
  });

  return (
    <>
      <li className="grid group items-center gap-3 grid-cols-[min-content_1fr_min-content] grid-rows-[repeat(auto-fill,minmax(0,auto))] border-b border-b-gray-300 border-dashed py-3">
        <Link to={`/hoteldetail/${hotelId}`}>
          <RoomPicture image={roomInfo?.thumbnails[0].img_url} className={"md"} />
        </Link>
        <div>
          <div>
            <Link to={`/hoteldetail/${hotelId}`} className=" group-hover:text-blue-700 line-clamp-2 font-bold">
              {isHotelInfo.name}
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
                : {roomInfo?.type} / {roomInfo?.bed_type}
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
