import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import subvisual from "../assets/subvisual3.jpg";
import Badge from "../components/Badge";
import Box from "../components/Box";
import Checkbox from "../components/Checkbox";
import Dialog from "../components/Dialog";
import Heading from "../components/Heading";
import RoomList from "../components/Hotel/RoomList";
import RoomWrite from "../components/Hotel/RoomWrite";
import Input from "../components/Input";
import Loading from "../components/Loading";
import Noimage from "../components/Noimage";
import Radio from "../components/Radio";
import Select from "../components/Select";
import { usehotelListStore } from "../store/hotelListStore";
import { useRoomStore } from "../store/roomStore";
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
  const navigate = useNavigate();
  const [isImage, setIsImage] = useState("");
  const { rooms, resetRooms } = useRoomStore();
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
  const [isPopup, setIsPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hotelInfo, setHotelInfo] = useState({
    name: "",
    nation: "태국",
    price: "",
    available: true,
    description: "",
    check_in: "1:00",
    check_out: "1:00",
    notSmoking: true,
    noPet: true,
    swimmingpool_open: "",
    swimmingpool_closed: "",
    rooms: [],
    options: {
      swimming_pool: false,
      break_fast: false,
      wireless_internet: false,
      dry_cleaning: false,
      storage_service: false,
      convenience_store: false,
      ironing_tools: false,
      wakeup_call: false,
      mini_bar: false,
      shower_room: false,
      air_conditioner: false,
      table: false,
      tv: false,
      safety_deposit_box: false,
      welcome_drink: false,
      free_parking: false,
      fitness: false,
      electric_kettle: false,
    },
  });
  const addHotel = usehotelListStore((state) => state.addHotel);
  //호텔이름
  const handleName = (value) => {
    setHotelInfo({ ...hotelInfo, name: value });
  };
  //호텔위치
  const handleLocationChange = (event) => {
    const selectedValue = event.target.value;
    const selectedText = where.find((option) => option.value === selectedValue)?.text || "";

    setHotelInfo((prevHotelInfo) => ({
      ...prevHotelInfo,
      nation: selectedValue,
    }));
  };
  //가격
  const handlePrice = (value) => {
    setHotelInfo({ ...hotelInfo, price: value });
  };
  console.log(hotelInfo);
  //예약가능
  const handleRadioChange = (value) => {
    setHotelInfo({ ...hotelInfo, available: value === "예약가능" });
  };
  //호텔안내
  const [content, setContent] = useState("");
  const handleContent = (value) => {
    setHotelInfo({ ...hotelInfo, description: value });
  };
  //편의시설
  const handleCheckbox = (e) => {
    const { name, checked } = e.target; // 체크박스의 name과 checked 상태를 가져옵니다.

    // options 상태를 업데이트합니다. 해당하는 option의 값을 checked 값으로 설정합니다.
    setHotelInfo((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        [name]: checked, // name을 키로 사용하여 해당 옵션의 값을 업데이트합니다.
      },
    }));
  };
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

    const selectedText = checkOption.find((option) => option.value === selectedValue)?.text || "";
    setHotelInfo({ ...hotelInfo, check_in: selectedValue });
  };
  const handleCheckOut = (e) => {
    const selectedValue = e.target.value;

    const selectedText = checkOption.find((option) => option.value === selectedValue)?.text || "";
    setHotelInfo({ ...hotelInfo, check_out: selectedText });
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
    const selectedText = checkOption.find((option) => option.value === selectedValue)?.text || "";
    setHotelInfo({ ...hotelInfo, swimmingpool_open: selectedText });
  };
  const handlePoolClose = (e) => {
    const selectedValue = e.target.value;

    const selectedText = checkOption.find((option) => option.value === selectedValue)?.text || "";
    setHotelInfo({ ...hotelInfo, swimmingpool_closed: selectedText });
  };
  //호텔등록
  const onSendClick = async (e) => {
    if (hotelInfo.name == "" || hotelInfo.price == "" || hotelInfo.description == "") {
      setIsPopup(true);
      setErrorMessage("호텔 기본정보를 모두 입력해 주세요.");
      return;
    } else if (
      hotelInfo.check_in == "" ||
      hotelInfo.check_out == "" ||
      (hotelInfo.options.swimming_pool === true && hotelInfo.options.swimmingpool_open == "") ||
      (hotelInfo.options.swimming_pool == true && hotelInfo.options.swimmingpool_closed == "")
    ) {
      setIsPopup(true);
      setErrorMessage("호텔 규칙을 모두 입력해 주세요.");
      return;
    }
    e.preventDefault();
    try {
      const response = await axios.post("/hotels", hotelInfo);
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
    addHotel({ ...hotelInfo, rooms: [...rooms] });
    // resetRooms()
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };
  return (
    <>
      <div className="main">
        <div className="container mb-32">
          <Heading tag={"h3"} text={"호텔 등록"} className={"xl my-5"} />
          <Box>
            <Heading tag={"h3"} text={"호텔 대표이미지"} className={"base mb-5"} />
            <Box className={"white"}>
              <ul className="grid mobile:grid-cols-1 tablet:grid-cols-4 gap-5">
                <li>
                  <Noimage props={{ image: isImage }} className={"mb-3 bg-gray-50"} />
                  <Input type={"file"} onChange={handleonChange} className={"mobile:!w-full"} />
                </li>
                <li>
                  <Noimage props={{ image: isImage }} className={"mb-3 bg-gray-50"} />
                  <Input type={"file"} onChange={handleonChange} className={"mobile:!w-full"} />
                </li>
                <li>
                  <Noimage props={{ image: isImage }} className={"mb-3 bg-gray-50"} />
                  <Input type={"file"} onChange={handleonChange} className={"mobile:!w-full"} />
                </li>
                <li>
                  <Noimage props={{ image: isImage }} className={"mb-3 bg-gray-50"} />
                  <Input type={"file"} onChange={handleonChange} className={"mobile:!w-full"} />
                </li>
              </ul>
            </Box>
          </Box>

          <Box className={"mt-10"}>
            <Heading tag={"h3"} text={"호텔 기본정보"} className={"base mb-5"} />
            <Box className={"white"}>
              <ul className="grid mobile:grid-cols-1 tablet:grid-cols-3 gap-5">
                <li className="grid gap-3">
                  호텔 위치
                  <Select options={where} onChange={handleLocationChange} />
                </li>
                <li className="grid gap-3">
                  호텔 이름
                  <Input type={"text"} value={hotelInfo.name} onChange={handleName} />
                </li>
                <li className="grid gap-3">
                  호텔 가격
                  <div className="grid grid-cols-[1fr_min-content] items-center gap-2">
                    <Input onChange={handlePrice} value={price} type={"text"} price={true} /> 원
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
                <li className="grid gap-3 tablet:col-span-3">
                  호텔 안내
                  <Input type={"textarea"} onChange={handleContent} value={hotelInfo.description} />
                </li>
              </ul>
            </Box>
          </Box>

          <Box className={"mt-10"}>
            <div className="grid gap-5 mobile:grid-cols-1 desktop:grid-cols-2 ">
              <div>
                <Heading tag={"h3"} text={"호텔 편의 시설"} className={"base mb-5"} />
                <Box className={"white"}>
                  <ul className="grid mobile:grid-cols-2 tablet:grid-cols-3 gap-4">
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_1"
                        name="swimming_pool" // name을 추가하여 핸들러에서 참조할 수 있게 합니다.
                        value="수영장"
                        checked={hotelInfo.options.swimming_pool}
                        onChange={handleCheckbox}
                      >
                        수영장
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_2"
                        name="breakfast"
                        value="조식뷔페"
                        checked={hotelInfo.options.breakfast}
                        onChange={handleCheckbox}
                      >
                        조식뷔페
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_3"
                        name="wireless_internet"
                        value="무선 인터넷"
                        checked={hotelInfo.options.wireless_internet}
                        onChange={handleCheckbox}
                      >
                        무선 인터넷
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_4"
                        name="dry_cleaning"
                        value="드라이클리닝"
                        checked={hotelInfo.options.dry_cleaning}
                        onChange={handleCheckbox}
                      >
                        드라이클리닝
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_5"
                        name="storage_service"
                        value="여행가방 보관 서비스"
                        checked={hotelInfo.options.storage_service}
                        onChange={handleCheckbox}
                      >
                        여행가방 보관 서비스
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_6"
                        name="convenience_store"
                        value="편의점"
                        checked={hotelInfo.options.convenience_store}
                        onChange={handleCheckbox}
                      >
                        편의점
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_7"
                        name="ironing_tools"
                        value="다림질도구"
                        checked={hotelInfo.options.ironing_tools}
                        onChange={handleCheckbox}
                      >
                        다림질도구
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_8"
                        name="wakeup_call"
                        value="모닝콜"
                        checked={hotelInfo.options.wakeup_call}
                        onChange={handleCheckbox}
                      >
                        모닝콜
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_9"
                        name="mini_bar"
                        value="미니바"
                        checked={hotelInfo.options.mini_bar}
                        onChange={handleCheckbox}
                      >
                        미니바
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_10"
                        name="shower_room"
                        value="샤워실"
                        checked={hotelInfo.options.shower_room}
                        onChange={handleCheckbox}
                      >
                        샤워실
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_11"
                        name="air_conditioner"
                        value="에어컨"
                        checked={hotelInfo.options.air_conditioner}
                        onChange={handleCheckbox}
                      >
                        에어컨
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_12"
                        name="table"
                        value="책상"
                        checked={hotelInfo.options.table}
                        onChange={handleCheckbox}
                      >
                        책상
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_13"
                        name="tv"
                        value="TV"
                        checked={hotelInfo.options.tv}
                        onChange={handleCheckbox}
                      >
                        TV
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_14"
                        name="safety_deposit_box"
                        value="안전금고"
                        checked={hotelInfo.options.safety_deposit_box}
                        onChange={handleCheckbox}
                      >
                        안전금고
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_15"
                        name="welcome_drink"
                        value="웰컴 드링크"
                        checked={hotelInfo.options.welcome_drink}
                        onChange={handleCheckbox}
                      >
                        웰컴 드링크
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_16"
                        name="free_parking"
                        value="무료 주차"
                        checked={hotelInfo.options.free_parking}
                        onChange={handleCheckbox}
                      >
                        무료 주차
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_17"
                        name="fitness"
                        value="피트니스 시설"
                        checked={hotelInfo.options.fitness}
                        onChange={handleCheckbox}
                      >
                        피트니스 시설
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox
                        color="blue"
                        id="check3_18"
                        name="electric_kettle"
                        value="전기주전자"
                        checked={hotelInfo.options.electric_kettle}
                        onChange={handleCheckbox}
                      >
                        전기주전자
                      </Checkbox>
                    </li>
                  </ul>
                </Box>
              </div>
              <div>
                <Heading tag={"h3"} text={"호텔 규칙"} className={"base mb-5"} />
                <Box className={"white"}>
                  <ul className="grid gap-5">
                    <li className=" grid mobile:grid-cols-1 tablet:grid-cols-[8rem_1fr] mobile:gap-2 tablet:gap-0 items-center">
                      <strong>체크인</strong>
                      <Select options={checkOption} onChange={handleCheckIn} />
                    </li>
                    <li className="grid mobile:grid-cols-1 tablet:grid-cols-[8rem_1fr] mobile:gap-2 tablet:gap-0 items-center">
                      <strong>체크아웃</strong>
                      <Select options={checkOption} onChange={handleCheckOut} />
                    </li>
                    <li className="grid mobile:grid-cols-1 tablet:grid-cols-[8rem_1fr] mobile:gap-2 tablet:gap-0 items-center">
                      <strong>흡연</strong>
                      <div className="flex justify-start mobile:whitespace-nowrap mobile:flex-wrap tablet:flex-nowrap">
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
                        <Badge color={"red mobile:ml-0 tablet:ml-2 mobile:mt-2 tablet:mt-0"}>
                          일부객실 선택시 현장에서 방을 배정합니다.
                        </Badge>
                      </div>
                    </li>
                    <li className="grid mobile:grid-cols-1 tablet:grid-cols-[8rem_1fr] mobile:gap-2 tablet:gap-0 items-center">
                      <strong>애완동물</strong>
                      <div className="flex justify-start mobile:whitespace-nowrap mobile:flex-wrap tablet:flex-nowrap">
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
                        <Badge color={"red  mobile:ml-0 tablet:ml-2 mobile:mt-2 tablet:mt-0"}>
                          일부객실 선택시 현장에서 방을 배정합니다.
                        </Badge>
                      </div>
                    </li>
                    {hotelInfo.options.swimming_pool && (
                      <li className="grid grid-cols-[8rem_1fr] items-center">
                        <strong>수영장 이용시간</strong>
                        <div className="grid grid-cols-[1fr_2rem_1fr] items-center">
                          <Select options={checkOption} onChange={handlePoolOpen} />
                          <span className="justify-self-center">~</span>
                          <Select options={checkOption} onChange={handlePoolClose} />
                        </div>
                      </li>
                    )}
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
      <Dialog open={isPopup} close={() => setIsPopup(false)}>
        <div className="text-center">
          <div className="text-center pb-3">{errorMessage}</div>
          <button className="btn-blue" onClick={() => setIsPopup(false)}>
            확인
          </button>
        </div>
      </Dialog>
      {isLoading && <Loading />}
    </>
  );
};

export default HotelWrite;
