import React, { useEffect, useState } from "react";

import axios from "axios";

import subvisual from "../assets/subvisual3.jpg";
import Badge from "../components/Badge";
import Box from "../components/Box";
import Checkbox from "../components/Checkbox";
import Heading from "../components/Heading";
import RoomList from "../components/Hotel/RoomList";
import RoomWrite from "../components/Hotel/RoomWrite";
import Input from "../components/Input";
import Noimage from "../components/Noimage";
import Radio from "../components/Radio";
import Select from "../components/Select";
import { useVisualStore } from "../store/visualStore";

const where = [
  {
    value: "select2",
    text: "태국",
  },
  {
    value: "select3",
    text: "베트남",
  },
  {
    value: "select4",
    text: "필리핀",
  },
  {
    value: "select5",
    text: "말레이시아",
  },
  {
    value: "select6",
    text: "대만",
  },
];

const checkOption = [
  { value: "select3", text: "1:00" },
  { value: "select4", text: "2:00" },
  { value: "select5", text: "3:00" },
  { value: "select6", text: "4:00" },
  { value: "select7", text: "5:00" },
  { value: "select8", text: "6:00" },
  { value: "select9", text: "7:00" },
  { value: "select10", text: "8:00" },
  { value: "select11", text: "9:00" },
  { value: "select12", text: "10:00" },
  { value: "select13", text: "11:00" },
  { value: "select14", text: "12:00" },
  { value: "select15", text: "13:00" },
  { value: "select16", text: "14:00" },
  { value: "select17", text: "15:00" },
  { value: "select18", text: "16:00" },
  { value: "select19", text: "17:00" },
  { value: "select20", text: "18:00" },
  { value: "select21", text: "19:00" },
  { value: "select22", text: "20:00" },
  { value: "select23", text: "21:00" },
  { value: "select24", text: "22:00" },
  { value: "select25", text: "23:00" },
  { value: "select2", text: "24:00" },
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
  const [locationText, setLocationText] = useState("");
  const [price, setPrice] = useState("");
  const [hotelInfo, setHotelInfo] = useState({
    name: "",
    location: "",
    price: "",
    available: true,
    content: "",
    facilities: [],
    checkIn: "",
    checkOut: "",
    notSmoking: true,
    noPet: true,
    swimmingpool_open: "",
    swimmingpool_closed: "",
  });
  //호텔이름
  const handleName = (value) => {
    setHotelInfo({ ...hotelInfo, name: value });
  };
  //호텔위치
  const handleLocationChange = (event) => {
    const selectedValue = event.target.value;
    const selectedText =
      where.find((option) => option.value === selectedValue)?.text || "";

    setHotelInfo((prevHotelInfo) => ({
      ...prevHotelInfo,
      location: selectedText,
    }));
  };
  //가격
  const handlePrice = (value) => {
    setPrice(value);
  };
  console.log(hotelInfo);
  //예약가능
  const handleRadioChange = (value) => {
    setHotelInfo({ ...hotelInfo, available: value === "예약가능" });
  };
  //호텔안내
  const [content, setContent] = useState("");
  const handleContent = (value) => {
    setHotelInfo({ ...hotelInfo, content: value });
  };
  //편의시설
  const handleCheckboxChange = (checked, value) => {
    setHotelInfo((prevHotelInfo) => {
      const newFacilities = checked
        ? [...prevHotelInfo.facilities, value] // 체크된 경우 facilities 배열에 항목 추가
        : prevHotelInfo.facilities.filter((item) => item !== value); // 언체크된 경우 facilities 배열에서 해당 항목 제거

      return {
        ...prevHotelInfo,
        facilities: newFacilities,
      };
    });
  };
  //체크인

  const handleCheckIn = (e) => {
    const selectedValue = e.target.value;

    const selectedText =
      checkOption.find((option) => option.value === selectedValue)?.text || "";
    setHotelInfo({ ...hotelInfo, checkIn: selectedText });
  };
  const handleCheckOut = (e) => {
    const selectedValue = e.target.value;

    const selectedText =
      checkOption.find((option) => option.value === selectedValue)?.text || "";
    setHotelInfo({ ...hotelInfo, checkOut: selectedText });
  };
  //흡연
  const handleSmoking = (value) => {
    setHotelInfo({ ...hotelInfo, notSmoking: value === "전객실 불가능" });
  };
  const handlePet = (value) => {
    setHotelInfo({ ...hotelInfo, noPet: value === "전객실 불가능" });
  };
  //수영장
  const handlePoolOpen = (e) => {
    const selectedValue = e.target.value;
    // 'where' 대신 'checkOption' 배열을 사용합니다.
    const selectedText =
      checkOption.find((option) => option.value === selectedValue)?.text || "";
    setHotelInfo({ ...hotelInfo, swimmingpool_open: selectedText });
  };
  const handlePoolClose = (e) => {
    const selectedValue = e.target.value;

    const selectedText =
      checkOption.find((option) => option.value === selectedValue)?.text || "";
    setHotelInfo({ ...hotelInfo, swimmingpool_closed: selectedText });
  };
  //호텔등록
  const onSendClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/hotels", hotelInfo);
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };
  return (
    <>
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
                    props={{ image: isImage }}
                    className={"mb-3 bg-gray-50"}
                  />
                  <Input type={"file"} onChange={handleonChange} />
                </li>
                <li>
                  <Noimage
                    props={{ image: isImage }}
                    className={"mb-3 bg-gray-50"}
                  />
                  <Input type={"file"} onChange={handleonChange} />
                </li>
                <li>
                  <Noimage
                    props={{ image: isImage }}
                    className={"mb-3 bg-gray-50"}
                  />
                  <Input type={"file"} onChange={handleonChange} />
                </li>
                <li>
                  <Noimage
                    props={{ image: isImage }}
                    className={"mb-3 bg-gray-50"}
                  />
                  <Input type={"file"} onChange={handleonChange} />
                </li>
              </ul>
            </Box>
          </Box>

          <Box className={"mt-10"}>
            <Heading
              tag={"h3"}
              text={"호텔 기본정보"}
              className={"base mb-5"}
            />
            <Box className={"white"}>
              <ul className="grid grid-cols-3 gap-5">
                <li className="grid gap-3">
                  호텔 위치
                  <Select
                    options={where}
                    value={locationText}
                    onChange={handleLocationChange}
                  />
                </li>
                <li className="grid gap-3">
                  호텔 이름
                  <Input
                    type={"text"}
                    value={hotelInfo.name}
                    onChange={handleName}
                  />
                </li>
                <li className="grid gap-3">
                  호텔 가격
                  <div className="grid grid-cols-[1fr_min-content] items-center gap-2">
                    <Input
                      onChange={handlePrice}
                      value={price}
                      type={"text"}
                      price={true}
                    />{" "}
                    원
                  </div>
                </li>
                <li className="grid gap-3">
                  호텔 예약여부
                  <div className="flex">
                    <Radio
                      color="blue"
                      checked={hotelInfo.available}
                      value="예약가능"
                      id="hotel_reser1"
                      name="reservationAvailability"
                      onChange={() => handleRadioChange("예약가능")}
                    />
                    <Radio
                      color="red ml-5"
                      checked={!hotelInfo.available}
                      value="예약불가능"
                      id="hotel_reser2"
                      name="reservationAvailability"
                      onChange={() => handleRadioChange("예약불가능")}
                    />
                  </div>
                </li>
                <li className="grid gap-3 col-span-3">
                  호텔 안내
                  <Input
                    type={"textarea"}
                    onChange={handleContent}
                    value={hotelInfo.content}
                  />
                </li>
              </ul>
            </Box>
          </Box>

          <Box className={"mt-10"}>
            <div className="grid gap-5 md:grid-cols-1 2xl:grid-cols-2 ">
              <div>
                <Heading
                  tag={"h3"}
                  text={"호텔 편의 시설"}
                  className={"base mb-5"}
                />
                <Box className={"white"}>
                  <ul className="grid grid-cols-3 gap-4">
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_1"
                        value="수영장"
                        checked={hotelInfo.facilities.includes("수영장")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "수영장")
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color={"blue"}
                        id={"check3_2"}
                        value={"조식뷔페"}
                        checked={hotelInfo.facilities.includes("조식뷔페")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "조식뷔페")
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color={"blue"}
                        id={"check3_3"}
                        value={"무선인터넷"}
                        checked={hotelInfo.facilities.includes("무선인터넷")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "무선인터넷")
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_4"
                        value="드라이클리닝"
                        checked={hotelInfo.facilities.includes("드라이클리닝")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "드라이클리닝")
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_5"
                        value="여행가방 보관 서비스"
                        checked={hotelInfo.facilities.includes(
                          "여행가방 보관 서비스"
                        )}
                        onChange={(e) =>
                          handleCheckboxChange(
                            e.target.checked,
                            "여행가방 보관 서비스"
                          )
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_6"
                        value="편의점"
                        checked={hotelInfo.facilities.includes("편의점")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "편의점")
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_7"
                        value="다림질도구"
                        checked={hotelInfo.facilities.includes("다림질도구")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "다림질도구")
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_8"
                        value="모닝콜"
                        checked={hotelInfo.facilities.includes("모닝콜")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "모닝콜")
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_9"
                        value="미니바"
                        checked={hotelInfo.facilities.includes("미니바")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "미니바")
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_10"
                        value="샤워실"
                        checked={hotelInfo.facilities.includes("샤워실")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "샤워실")
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_11"
                        value="에어컨"
                        checked={hotelInfo.facilities.includes("에어컨")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "에어컨")
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_12"
                        value="책상"
                        checked={hotelInfo.facilities.includes("책상")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "책상")
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_13"
                        value="TV"
                        checked={hotelInfo.facilities.includes("TV")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "TV")
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_14"
                        value="안전금고"
                        checked={hotelInfo.facilities.includes("안전금고")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "안전금고")
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_15"
                        value="웰컴 드링크"
                        checked={hotelInfo.facilities.includes("웰컴 드링크")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "웰컴 드링크")
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_16"
                        value="무료 주차"
                        checked={hotelInfo.facilities.includes("무료 주차")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "무료 주차")
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_17"
                        value="피트니스 시설"
                        checked={hotelInfo.facilities.includes("피트니스 시설")}
                        onChange={(e) =>
                          handleCheckboxChange(
                            e.target.checked,
                            "피트니스 시설"
                          )
                        }
                      />
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_18"
                        value="전기주전자"
                        checked={hotelInfo.facilities.includes("전기주전자")}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "전기주전자")
                        }
                      />
                    </li>
                  </ul>
                </Box>
              </div>
              <div>
                <Heading
                  tag={"h3"}
                  text={"호텔 규칙"}
                  className={"base mb-5"}
                />
                <Box className={"white"}>
                  <ul className="grid gap-5">
                    <li className="grid grid-cols-[8rem_1fr] items-center">
                      <strong>체크인</strong>
                      <Select options={checkOption} onChange={handleCheckIn} />
                    </li>
                    <li className="grid grid-cols-[8rem_1fr] items-center">
                      <strong>체크아웃</strong>
                      <Select options={checkOption} onChange={handleCheckOut} />
                    </li>
                    <li className="grid grid-cols-[8rem_1fr] items-center">
                      <strong>흡연</strong>
                      <div className="flex justify-start">
                        <Radio
                          color={"red"}
                          checked={hotelInfo.notSmoking === true}
                          value={"전객실 불가능"}
                          id={"hotel_reser3"}
                          name={"rag2"}
                          onChange={() => handleSmoking("전객실 불가능")}
                        />
                        <Radio
                          color={"green ml-5"}
                          checked={hotelInfo.notSmoking === false}
                          value={"일부객실 가능"}
                          id={"hotel_reser4"}
                          name={"rag2"}
                          onChange={() => handleSmoking("일부객실 가능")}
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
                          checked={hotelInfo.noPet === true}
                          value={"전객실 불가능"}
                          id={"hotel_reser5"}
                          name={"rag3"}
                          onChange={() => handlePet("전객실 불가능")}
                        />
                        <Radio
                          color={"green ml-5"}
                          checked={hotelInfo.noPet === false}
                          value={"일부객실 가능"}
                          id={"hotel_reser6"}
                          name={"rag3"}
                          onChange={() => handlePet("일부객실 가능")}
                        />{" "}
                        <Badge color={"red ml-2"}>
                          일부객실 선택시 현장에서 방을 배정합니다.
                        </Badge>
                      </div>
                    </li>
                    <li className="grid grid-cols-[8rem_1fr] items-center">
                      <strong>수영장 이용시간</strong>
                      <div className="grid grid-cols-[1fr_2rem_1fr] items-center">
                        <Select
                          options={checkOption}
                          onChange={handlePoolOpen}
                        />
                        <span className="justify-self-center">~</span>
                        <Select
                          options={checkOption}
                          onChange={handlePoolClose}
                        />
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
              <button
                className="btn-blue"
                onClick={() => setIsToggle(!isToggle)}
              >
                객실등록
              </button>
            </div>
            {isToggle ? <RoomWrite /> : <RoomList edit={true} />}
          </Box>
          <div className="flex justify-between mt-10">
            <button className="btn-gray xl">이전</button>
            <div className="flex  gap-3">
              <button onClick={onSendClick} className="btn-blue xl">
                호텔 등록
              </button>
              <button className="btn-green xl">호텔 수정</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelWrite;
