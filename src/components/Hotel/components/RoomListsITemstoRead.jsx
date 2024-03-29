import React from "react";

import { useParams } from "react-router-dom";

import room from "../../../assets/hotelroom1.jpeg";
import room2 from "../../../assets/hotelroom2.jpeg";
import { usehotelListStore } from "../../../store/hotelListStore";
import { useRoomStore } from "../../../store/roomStore";
import HotelPrice from "../HotelPrice";
import HotelTitle from "../HotelTitle";
import RoomOptions from "../RoomOptions";
import RoomPicture from "../RoomPicture";

const RoomListItemsToRead = ({ edit, ...props }) => {
  const show = { able: "disabled" };
  const { totalHotels } = usehotelListStore();
  let { hotelId } = useParams();
  const { rooms, deleteRoom } = useRoomStore();
  const thisHotel = totalHotels.find((hotel) => hotel.id === Number(hotelId));
  const onDelete = (roomId) => {
    deleteRoom(roomId);
    console.log(roomId);
  };
  console.log("룸", thisHotel);
  return (
    <>
      {thisHotel.rooms.map((it) => (
        <li {...props} key={it.roomId}>
          <div>
            <RoomPicture image={room2} />
            <HotelTitle title={it.type} />
            <HotelPrice price={it.standard_price} />
            <RoomOptions />
            {!edit ? (
              <div className="flex gap-2">
                <button className="btn-blue-outline">예약하기</button>
              </div>
            ) : (
              <div className="flex gap-2">
                <button className="btn-blue-outline">수정하기</button>
                <button
                  className="btn-red-outline"
                  onClick={() => {
                    onDelete(it.roomId);
                  }}
                >
                  삭제하기
                </button>
              </div>
            )}
          </div>
        </li>
      ))}
      <li className={show.able} {...props}>
        <div>
          <RoomPicture image={room} />
          <HotelTitle title={"스탠다드 룸"} />
          <HotelPrice price={"50,000"} />
          <RoomOptions />
          {!edit ? (
            <div className="flex gap-2">
              <button className="btn-blue-outline mobile:flex-1 tablet:flex-none justify-center">
                {show.able ? "Sold Out" : "예약하기"}
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button className="btn-blue-outline">수정하기</button>
              <button className="btn-red-outline">삭제하기</button>
            </div>
          )}
        </div>
      </li>
      <li {...props}>
        <div>
          <RoomPicture image={room2} />
          <HotelTitle title={"디럭스 룸"} />
          <HotelPrice price={"50,000"} />
          <RoomOptions />
          {!edit ? (
            <div className="flex gap-2">
              <button className="btn-blue-outline mobile:flex-1 tablet:flex-none justify-center">예약하기</button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button className="btn-blue-outline">수정하기</button>
              <button className="btn-red-outline">삭제하기</button>
            </div>
          )}
        </div>
      </li>
      <li {...props}>
        <div>
          <RoomPicture image={room} />
          <HotelTitle title={"트윈 룸"} />
          <HotelPrice price={"50,000"} />
          <RoomOptions />
          {!edit ? (
            <div className="flex gap-2">
              <button className="btn-blue-outline mobile:flex-1 tablet:flex-none justify-center">예약하기</button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button className="btn-blue-outline">수정하기</button>
              <button className="btn-red-outline">삭제하기</button>
            </div>
          )}
        </div>
      </li>
      <li {...props}>
        <div>
          <RoomPicture image={room2} />
          <HotelTitle title={"스위트 룸"} />
          <HotelPrice price={"50,000"} />
          <RoomOptions />
          {!edit ? (
            <div className="flex gap-2">
              <button className="btn-blue-outline mobile:flex-1 tablet:flex-none justify-center">예약하기</button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button className="btn-blue-outline">수정하기</button>
              <button className="btn-red-outline">삭제하기</button>
            </div>
          )}
        </div>
      </li>
    </>
  );
};

export default RoomListItemsToRead;
