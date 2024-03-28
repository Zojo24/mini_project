import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import { usehotelListStore } from '../../../store/hotelListStore';
import { useRoomStore } from '../../../store/roomStore';
import Box from '../../Box';
import Input from '../../Input';
import Radio from '../../Radio';
import Select from '../../Select';

const viewOption = [
  {
    value: "select1",
    text: "오션뷰",
  },
  {
    value: "select2",
    text: "시티뷰",
  },
  {
    value: "select3",
    text: "가든뷰",
  },
  {
    value: "select4",
    text: "리버뷰",
  },
  {
    value: "select5",
    text: "마운틴뷰",
  },
  {
    value: "select6",
    text: "뷰없음",
  },
];
const bedOption = [
  {
    value: "select1",
    text: "싱글/트윈 베드",
  },
  {
    value: "select2",
    text: "더블베드",
  },
  {
    value: "select3",
    text: "퀸베드",
  },
  {
    value: "select4",
    text: "킹베드",
  },
];
const viewKind = [
  {
    value: "select1",
    text: "스탠다드 룸",
  },
  {
    value: "select2",
    text: "디럭스 룸",
  },
  {
    value: "select3",
    text: "트윈 룸",
  },
  {
    value: "select4",
    text: "스위트 룸",
  },
];
const RoomEdit = ({ roomId, setIsEdit }) => {
  const { hotelId } = useParams();
  const { totalHotels, addHotel } = usehotelListStore();
  const { rooms, addRoom, saveEditedRoom } = useRoomStore();
  const [isRadio, setIsRadio] = useState(false);
  const thisRoom = rooms.find((it) => it.roomId === roomId);
  console.log(thisRoom);
  const [roomInfo, setRoomInfo] = useState({
    type: thisRoom.type,
    active_status: thisRoom.active_status,
    bed_type: thisRoom.bed_type,
    standard_capacity: thisRoom.standard_capacity,
    maximum_capacity: thisRoom.maximum_capacity,
    view_type: thisRoom.view_type,
    standard_price: thisRoom.standard_price,
    adult_fare: thisRoom.adult_fare,
    child_fare: thisRoom.child_fare,
    roomId: thisRoom.roomId,
  });
  const handleRoomType = (e) => {
    setRoomInfo((prevInfo) => ({
      ...prevInfo,
      type: e.target.value,
    }));
  };
  const handleBed = (e) => {
    setRoomInfo((prev) => ({ ...prev, bed_type: e.target.value }));
  };
  const handleView = (e) => {
    setRoomInfo((prev) => ({ ...prev, view_type: e.target.value }));
  };
  const handlePrice = (value) => {
    setRoomInfo({ ...roomInfo, standard_price: value });
  };
  const handleAdultFare = (value) => {
    setRoomInfo({ ...roomInfo, adult_fare: value });
  };
  const handleChildFare = (value) => {
    setRoomInfo({ ...roomInfo, child_fare: value });
  };
  const handleCapacity = (value) => {
    setRoomInfo({ ...roomInfo, standard_capacity: value });
  };
  const handleMax = (value) => {
    setRoomInfo({ ...roomInfo, maximum_capacity: value });
  };
  const handleRadioChange = (value) => {
    setRoomInfo({ ...roomInfo, active_status: value === "예약가능" });
  };
  const onSubmit = () => {
    addRoom(roomInfo);
  };
  const thisHotel = totalHotels.find((hotel) => hotel.id === Number(hotelId));
  const onSave = () => {
    const index = rooms.findIndex((it) => it.roomId === roomId);
    rooms[index] = { ...roomInfo };
    saveEditedRoom(rooms);
    setIsEdit(false);
  };
  return (
    <>
      <Box className={"white mt-5"}>
        <form>
          <ul className="grid mobile:grid-cols-1 tablet:grid-cols-3 gap-10">
            <li className="grid gap-3 self-start">
              객실 종류
              <Select
                selectValue={roomInfo.type}
                options={viewKind}
                onChange={handleRoomType}
              />
            </li>
            <li className="grid gap-3 self-start">
              객실 침대 정보
              <Select
                selectValue={roomInfo.bed_type}
                options={bedOption}
                onChange={handleBed}
              />
            </li>
            <li className="grid gap-3">
              객실 뷰 종류
              <Select
                selectValue={roomInfo.view_type}
                options={viewOption}
                onChange={handleView}
              />
            </li>
            <li className="grid gap-3 self-start">
              객실 1박 가격
              <div className="grid grid-cols-[1fr_min-content] items-center gap-1">
                <Input
                  type={"text"}
                  value={roomInfo.standard_price}
                  price={true}
                  onChange={handlePrice}
                />{" "}
                원
              </div>
            </li>
            <li className="grid gap-3 self-start">
              성인 1명당 1박 가격
              <div className="grid grid-cols-[1fr_min-content] items-center gap-1">
                <Input type={"text"} price={true} onChange={handleAdultFare} />{" "}
                원
              </div>
            </li>
            <li className="grid gap-3 self-start">
              어린이 1명당 1박 가격
              <div className="grid grid-cols-[1fr_min-content] items-center gap-1">
                <Input type={"text"} price={true} onChange={handleChildFare} />{" "}
                원
              </div>
            </li>
            <li className="grid gap-3 self-start">
              객실 기준인원
              <div className="grid grid-cols-[1fr_min-content] items-center gap-1">
                <Input
                  type={"number"}
                  value={roomInfo.standard_capacity}
                  onChange={handleCapacity}
                />{" "}
                명
              </div>
            </li>
            <li className="grid gap-3 self-start">
              객실 최대인원
              <div className="grid grid-cols-[1fr_min-content] items-center gap-1">
                <Input
                  value={roomInfo.maximum_capacity}
                  type={"text"}
                  onChange={handleMax}
                />{" "}
                명
              </div>
            </li>
            <li className="grid gap-3">
              객실 예약여부
              <div className="flex">
                <Radio
                  color={"blue"}
                  checked={roomInfo.active_status}
                  value={"예약가능"}
                  id={"room_reser1"}
                  name={"roomrag1"}
                  onChange={() => handleRadioChange("예약가능")}
                />
                <Radio
                  color={"red ml-5"}
                  checked={!roomInfo.active_status}
                  value={"예약 불가능"}
                  id={"room_reser2"}
                  name={"roomrag1"}
                  onChange={() => handleRadioChange("예약불가능")}
                />
              </div>
            </li>
            <li className="grid gap-3 mobile:col-span-1 tablet:col-span-3">
              객실 사진
              <Input type={"file"} />
              <Input type={"file"} />
              <Input type={"file"} />
              <Input type={"file"} />
            </li>
          </ul>
        </form>
      </Box>
      <div className="flex gap-3 justify-center mt-5">
        <button onClick={onSave} className="btn-green">
          객실 수정
        </button>
        <button className="btn-gray">취소</button>
      </div>
    </>
  );
};

export default RoomEdit;
