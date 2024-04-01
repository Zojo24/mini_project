import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { digit3 } from "../../store/digit3";
import instance from "../../api/axios";
import request from "../../api/request";
import RoomPicture from "../../components/Hotel/RoomPicture";
import { useReserveRoomStore } from "../../store/reserveRoomStore";

const ReservationHotelInfoItems = (item) => {
  const token = localStorage.getItem("token");
  const { fetchMembersMyCart, fetchHotels } = request; // 필요한 요청 URL을 추출
  const [hotelName, setHotelName] = useState("");
  const [orderInfos, setOrderInfos] = useState({});
  const { room_id, adult_count, child_count, check_out, check_in, hotelId, total_price, id } = item;
  const formattedPrice = digit3(total_price);
  const { reservedRoom } = useReserveRoomStore();
  const photo = reservedRoom.thumbnails[0].img_url;
  // console.log(reservedRoom);

  const location = useLocation();
  const orderId = location.pathname.split("/").pop();

  const [isHotelInfo, setIsHotelInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseHotel = await instance.get(`${fetchHotels}/${reservedRoom.hotel_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const hotelNames = responseHotel.data.result.name;
        setHotelName(hotelNames);
        // console.log(responseHotel);
        // setIsHotelInfo(hotelData);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchLoadOrder = async () => {
      try {
        const responseOrder = await instance.get(`${fetchMembersMyCart}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrderInfos(responseOrder);
        // console.log(responseOrder);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLoadOrder();
    fetchData();
  }, []);

  // const myorders = orderInfos.filter((item) => {
  //   item.id === parseInt(orderId);
  // });
  // console.log(myorders);
  return (
    <>
      <li className="grid group items-center gap-3 grid-cols-[min-content_1fr_min-content] grid-rows-[repeat(auto-fill,minmax(0,auto))] border-b border-b-gray-300 border-dashed py-3">
        <Link to={`/hoteldetail/${reservedRoom.hotel_id}`}>
          <RoomPicture image={photo} className={"md"} />
        </Link>
        <div>
          <div>
            <Link
              to={`/hoteldetail/${reservedRoom.hotel_id}`}
              className=" group-hover:text-blue-700 line-clamp-2 font-bold"
            >
              {hotelName}
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
                : {reservedRoom.type} / {reservedRoom.bed_type}
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
