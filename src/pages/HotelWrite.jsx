import React, {
  useEffect,
  useState,
} from 'react';

import subvisual from '../assets/subvisual3.jpg';
import Badge from '../components/Badge';
import Box from '../components/Box';
import Checkbox from '../components/Checkbox';
import Heading from '../components/Heading';
import RoomList from '../components/Hotel/RoomList';
import RoomWrite from '../components/Hotel/RoomWrite';
import Input from '../components/Input';
import Noimage from '../components/Noimage';
import Radio from '../components/Radio';
import Select from '../components/Select';
import { useVisualStore } from '../store/visualStore';

const where = [
  {
    value: "select2",
    text: "필리핀",
  },
  {
    value: "select3",
    text: "태국",
  },
  {
    value: "select4",
    text: "말레이시아",
  },
  {
    value: "select5",
    text: "일본",
  },
  {
    value: "select6",
    text: "캄보디아",
  },
];

const checkOption = [
  { value: "select2", text: "12:00 - 1:00 am" },
  { value: "select3", text: "1:00 - 2:00 am" },
  { value: "select4", text: "2:00 - 3:00 am" },
  { value: "select5", text: "3:00 - 4:00 am" },
  { value: "select6", text: "4:00 - 5:00 am" },
  { value: "select7", text: "5:00 - 6:00 am" },
  { value: "select8", text: "6:00 - 7:00 am" },
  { value: "select9", text: "7:00 - 8:00 am" },
  { value: "select10", text: "8:00 - 9:00 am" },
  { value: "select11", text: "9:00 - 10:00 am" },
  { value: "select12", text: "10:00 - 11:00 am" },
  { value: "select13", text: "11:00 - 12:00 am" },
  { value: "select14", text: "12:00 - 1:00 pm" },
  { value: "select15", text: "1:00 - 2:00 pm" },
  { value: "select16", text: "2:00 - 3:00 pm" },
  { value: "select17", text: "3:00 - 4:00 pm" },
  { value: "select18", text: "4:00 - 5:00 pm" },
  { value: "select19", text: "5:00 - 6:00 pm" },
  { value: "select20", text: "6:00 - 7:00 pm" },
  { value: "select21", text: "7:00 - 8:00 pm" },
  { value: "select22", text: "8:00 - 9:00 pm" },
  { value: "select23", text: "9:00 - 10:00 pm" },
  { value: "select24", text: "10:00 - 11:00 pm" },
  { value: "select25", text: "11:00 - 12:00 pm" },
];
const HotelWrite = () => {
  const { setTitle } = useVisualStore();
  const [isImage, setIsImage] = useState("");

  useEffect(() => {
    setTitle("Hotel Registration", subvisual);
  }, [setTitle]);

  const handleonChange = (file) => {
    setIsImage(file);
  };

  const [isRadio, setIsRadio] = useState(false);
  const [isRadio2, setIsRadio2] = useState(false);
  const [isRadio3, setIsRadio3] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className="main">
      <div className="container mb-32">
        <Heading tag={"h3"} text={"호텔 등록"} className={"xl my-5"} />
        <Box>
          <Heading
            tag={"h3"}
            text={"호텔 대표이미지"}
            className={"base mb-5"}
          />
          <Box className={"white"}>
            <ul className="grid grid-cols-4 gap-5">
              <li>
                <Noimage
                  props={{ image: isImage[0] }}
                  className={"mb-3 bg-gray-50"}
                />
                <Input type={"file"} onChange={handleonChange} />
              </li>
              <li>
                <Noimage
                  props={{ image: isImage[1] }}
                  className={"mb-3 bg-gray-50"}
                />
                <Input type={"file"} onChange={handleonChange} />
              </li>
              <li>
                <Noimage
                  props={{ image: isImage[2] }}
                  className={"mb-3 bg-gray-50"}
                />
                <Input type={"file"} onChange={handleonChange} />
              </li>
              <li>
                <Noimage
                  props={{ image: isImage[3] }}
                  className={"mb-3 bg-gray-50"}
                />
                <Input type={"file"} onChange={handleonChange} />
              </li>
            </ul>
          </Box>
        </Box>

        <Box className={"mt-10"}>
          <Heading tag={"h3"} text={"호텔 기본정보"} className={"base mb-5"} />
          <Box className={"white"}>
            <ul className="grid grid-cols-3 gap-5">
              <li className="grid gap-3">
                호텔 위치
                <Select options={where} />
              </li>
              <li className="grid gap-3">
                호텔 이름
                <Input
                  type={"text"}
                  value={""}
                  onChange={(e) => console.log(e.target.value)}
                />
              </li>
              <li className="grid gap-3">
                호텔 가격
                <div className="grid grid-cols-[1fr_min-content] items-center gap-2">
                  <Input type={"text"} price={true} /> 원
                </div>
              </li>
              <li className="grid gap-3">
                호텔 예약여부
                <div className="flex">
                  <Radio
                    color={"blue"}
                    checked={!isRadio}
                    value={"예약가능"}
                    id={"hotel_reser1"}
                    name={"rag1"}
                    onChange={() => setIsRadio(!isRadio)}
                  />
                  <Radio
                    color={"red ml-5"}
                    value={"예약 불가능"}
                    id={"hotel_reser2"}
                    name={"rag1"}
                    onChange={() => setIsRadio(!isRadio)}
                  />
                </div>
              </li>
              <li className="grid gap-3 col-span-3">
                호텔 안내
                <Input type={"textarea"} />
              </li>
            </ul>
          </Box>
        </Box>

        <Box className={"mt-10"}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Heading
                tag={"h3"}
                text={"호텔 편의 시설"}
                className={"base mb-5"}
              />
              <Box className={"white"}>
                <ul className="grid grid-cols-3 gap-4">
                  <li>
                    <Checkbox color={"blue"} id={"check3_1"} value={"수영장"} />
                  </li>
                  <li>
                    <Checkbox
                      color={"blue"}
                      id={"check3_2"}
                      value={"조식뷔페"}
                    />
                  </li>
                  <li>
                    <Checkbox
                      color={"blue"}
                      id={"check3_3"}
                      value={"무선인터넷"}
                    />
                  </li>
                  <li>
                    <Checkbox
                      color={"blue"}
                      id={"check3_4"}
                      value={"드라이클리닝"}
                    />
                  </li>
                  <li>
                    <Checkbox
                      color={"blue"}
                      id={"check3_5"}
                      value={"여행가방 보관 서비스"}
                    />
                  </li>
                  <li>
                    <Checkbox color={"blue"} id={"check3_6"} value={"편의점"} />
                  </li>
                  <li>
                    <Checkbox
                      color={"blue"}
                      id={"check3_7"}
                      value={"다림질도구"}
                    />
                  </li>
                  <li>
                    <Checkbox color={"blue"} id={"check3_8"} value={"모닝콜"} />
                  </li>
                  <li>
                    <Checkbox color={"blue"} id={"check3_9"} value={"미니바"} />
                  </li>
                  <li>
                    <Checkbox
                      color={"blue"}
                      id={"check3_10"}
                      value={"샤워실"}
                    />
                  </li>
                  <li>
                    <Checkbox
                      color={"blue"}
                      id={"check3_11"}
                      value={"에어컨"}
                    />
                  </li>
                  <li>
                    <Checkbox color={"blue"} id={"check3_12"} value={"책상"} />
                  </li>
                  <li>
                    <Checkbox color={"blue"} id={"check3_13"} value={"TV"} />
                  </li>
                  <li>
                    <Checkbox
                      color={"blue"}
                      id={"check3_14"}
                      value={"안전금고"}
                    />
                  </li>
                  <li>
                    <Checkbox
                      color={"blue"}
                      id={"check3_15"}
                      value={"웰컴 드링크"}
                    />
                  </li>
                  <li>
                    <Checkbox
                      color={"blue"}
                      id={"check3_16"}
                      value={"무료 주차"}
                    />
                  </li>
                  <li>
                    <Checkbox
                      color={"blue"}
                      id={"check3_17"}
                      value={"피트니스 시설"}
                    />
                  </li>
                  <li>
                    <Checkbox
                      color={"blue"}
                      id={"check3_18"}
                      value={"전기주전자"}
                    />
                  </li>
                </ul>
              </Box>
            </div>
            <div>
              <Heading tag={"h3"} text={"호텔 규칙"} className={"base mb-5"} />
              <Box className={"white"}>
                <ul className="grid gap-5">
                  <li className="grid grid-cols-[8rem_1fr] items-center">
                    <strong>체크인</strong>
                    <Select options={checkOption} />
                  </li>
                  <li className="grid grid-cols-[8rem_1fr] items-center">
                    <strong>체크아웃</strong>
                    <Select options={checkOption} />
                  </li>
                  <li className="grid grid-cols-[8rem_1fr] items-center">
                    <strong>흡연</strong>
                    <div className="flex">
                      <Radio
                        color={"red"}
                        checked={!isRadio2}
                        value={"전객실 불가능"}
                        id={"hotel_reser3"}
                        name={"rag2"}
                        onChange={() => setIsRadio2(!isRadio2)}
                      />
                      <Radio
                        color={"green ml-5"}
                        value={"일부객실 가능"}
                        id={"hotel_reser4"}
                        name={"rag2"}
                        onChange={() => setIsRadio2(!isRadio2)}
                      />{" "}
                      <Badge color={"red ml-2"}>
                        일부객실 선택시 현장에서 방을 배정합니다.
                      </Badge>
                    </div>
                  </li>
                  <li className="grid grid-cols-[8rem_1fr] items-center">
                    <strong>애완동물</strong>
                    <div className="flex">
                      <Radio
                        color={"red"}
                        checked={!isRadio3}
                        value={"전객실 불가능"}
                        id={"hotel_reser5"}
                        name={"rag3"}
                        onChange={() => setIsRadio3(!isRadio3)}
                      />
                      <Radio
                        color={"green ml-5"}
                        value={"일부객실 가능"}
                        id={"hotel_reser6"}
                        name={"rag3"}
                        onChange={() => setIsRadio3(!isRadio3)}
                      />{" "}
                      <Badge color={"red ml-2"}>
                        일부객실 선택시 현장에서 방을 배정합니다.
                      </Badge>
                    </div>
                  </li>
                  <li className="grid grid-cols-[8rem_1fr] items-center">
                    <strong>수영장 이용시간</strong>
                    <div className="grid grid-cols-[1fr_2rem_1fr] items-center">
                      <Select options={checkOption} />
                      <span className="justify-self-center">~</span>
                      <Select options={checkOption} />
                    </div>
                  </li>
                </ul>
              </Box>
            </div>
          </div>
        </Box>

        <Box className={"mt-10 room-write"}>
          <div className="flex justify-between items-center">
            <Heading tag={"h3"} text={"객실관리"} className={"base"} />
            <button className="btn-blue" onClick={() => setIsToggle(!isToggle)}>
              객실등록
            </button>
          </div>
          {isToggle ? <RoomWrite /> : <RoomList edit={true} />}
        </Box>
        <button className="btn-blue">호텔등록</button>
      </div>
    </div>
  );
};

export default HotelWrite;
