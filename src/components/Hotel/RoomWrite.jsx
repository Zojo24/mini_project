import React, { useState } from "react";
import Box from "../Box";
import Select from "../Select";
import Input from "../Input";
import Radio from "../Radio";
import Badge from "../Badge";

const viewOption = [
  {
    value: "select1",
    text: "더블 베드",
  },
  {
    value: "select2",
    text: "트윈 베드",
  },
  {
    value: "select3",
    text: "킹 베드",
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
const RoomWrite = () => {
  const [isRadio, setIsRadio] = useState(false);

  return (
    <Box className={"white mt-5"}>
      <form>
        <ul className="grid grid-cols-3 gap-10">
          <li className="grid gap-3 self-start">
            객실 종류
            <Select options={viewKind} />
          </li>
          <li className="grid gap-3 self-start">
            객실 침대 정보
            <Select options={viewOption} />
          </li>
          <li className="grid gap-3">
            객실 뷰 형태
            <Input type={"text"} />
            <div className="flex gap-3 items-center">
              <span className="text-sm">뷰 예시)</span>
              <Badge color={"red"}>오션뷰</Badge>
              <Badge color={"red"}>시티뷰</Badge>
              <Badge color={"red"}>가든뷰</Badge>
            </div>
          </li>
          <li className="grid gap-3 self-start">
            객실 1박 가격
            <div className="grid grid-cols-[1fr_min-content] items-center gap-1">
              <Input type={"text"} price={true} /> 원
            </div>
          </li>
          <li className="grid gap-3 self-start">
            성인 1명당 1박 가격
            <div className="grid grid-cols-[1fr_min-content] items-center gap-1">
              <Input type={"text"} price={true} /> 원
            </div>
          </li>
          <li className="grid gap-3 self-start">
            어린이 1명당 1박 가격
            <div className="grid grid-cols-[1fr_min-content] items-center gap-1">
              <Input type={"text"} price={true} /> 원
            </div>
          </li>
          <li className="grid gap-3 self-start">
            객실 기준인원
            <div className="grid grid-cols-[1fr_min-content] items-center gap-1">
              <Input type={"text"} price={true} /> 명
            </div>
          </li>
          <li className="grid gap-3 self-start">
            객실 최대인원
            <div className="grid grid-cols-[1fr_min-content] items-center gap-1">
              <Input type={"text"} price={true} /> 명
            </div>
          </li>
          <li className="grid gap-3">
            객실 예약여부
            <div className="flex">
              <Radio color={"blue"} checked={!isRadio} value={"예약가능"} id={"room_reser1"} name={"roomrag1"} onChange={() => setIsRadio(!isRadio)} />
              <Radio color={"red ml-5"} value={"예약 불가능"} id={"room_reser2"} name={"roomrag1"} onChange={() => setIsRadio(!isRadio)} />
            </div>
          </li>

          <li className="grid gap-3 col-span-3">
            객실 사진
            <Input type={"file"} />
          </li>
        </ul>
      </form>
    </Box>
  );
};

export default RoomWrite;
