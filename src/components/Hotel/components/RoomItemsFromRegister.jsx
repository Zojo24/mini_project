import React, { useState } from 'react';

import room from '../../../assets/hotelroom1.jpeg';
import room2 from '../../../assets/hotelroom2.jpeg';
import { useRoomStore } from '../../../store/roomStore';
import HotelPrice from '../HotelPrice';
import HotelTitle from '../HotelTitle';
import RoomOptions from '../RoomOptions';
import RoomPicture from '../RoomPicture';
import RoomEdit from './RoomEdit';

const RoomItemsFromRegister = ({ roomLists, edit, ...props }) => {
  const show = { able: "disabled" };
  const [isEdit, setIsEdit] = useState(false);
  const { rooms, deleteRoom } = useRoomStore();
  const onDelete = (roomId) => {
    deleteRoom(roomId);
    console.log(roomId);
  };
  const onEdit = () => {
    setIsEdit(true);
  };
  // console.log(roomLists);
  return (
    <>
      {roomLists.map((it) => (
        <li {...props} key={it.roomId}>
          {isEdit ? (
            <RoomEdit roomData={it} setIsEdit={setIsEdit} />
          ) : (
            <div>
              <RoomPicture image={room2} />
              <HotelTitle title={it.type} />
              <HotelPrice price={it.standard_price} />
              <RoomOptions
                bedtype={it.bed_type}
                capacity={it.standard_capacity}
                maximum={it.maximum_capacity}
                view={it.view_type}
                adult_fare={it.adult_fare}
                child_fare={it.child_fare}
              />
              {!edit ? (
                <div className="flex gap-2">
                  <button className="btn-blue-outline">예약하기</button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <button className="btn-blue-outline" onClick={onEdit}>
                    수정하기
                  </button>
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
          )}
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
    </>
  );
};

export default RoomItemsFromRegister;
