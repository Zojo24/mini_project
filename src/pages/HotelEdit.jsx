import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
import { useVisualStore } from "../store/visualStore";

const where = [
  {
    value: "select2",
    text: "THAILAND",
  },
  {
    value: "select3",
    text: "VIETNAM",
  },
  {
    value: "select4",
    text: "PHILIPPINES",
  },
  {
    value: "select5",
    text: "MALAYSIA",
  },
  {
    value: "select6",
    text: "TAIWAN",
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
const HotelEdit = () => {
  const { setTitle } = useVisualStore();
  let { hotelId } = useParams();
  const navigate = useNavigate();
  const { totalHotels, saveEditHotel } = usehotelListStore();
  const [isImage, setIsImage] = useState("");
  const [hotelData, setHotelData] = useState({});
  const thisHotel = totalHotels.find((hotel) => hotel.id === Number(hotelId));

  useEffect(() => {
    axios
      .get(`http://52.78.12.252:8080/api/hotels/${hotelId}`)
      .then((response) => {
        setHotelData(response.data.result);
        console.log(response.data.result);
      });
    console.log(hotelData);
  }, []);

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
  const [hotelInfo, setHotelInfo] = useState({});
  const options = hotelData?.basic_options;
  // console.log(options);

  useEffect(() => {
    // hotelData가 업데이트 된 후 hotelInfo 상태를 업데이트합니다.
    if (Object.keys(hotelData).length > 0) {
      setHotelInfo({
        name: hotelData.name,
        nation: hotelData.nation,
        active_status: hotelData.active_status,
        description: hotelData.description,
        check_in: hotelData.check_in,
        check_out: hotelData.check_out,
        smoking_rule: hotelData.smoking_rule,
        pet_rule: hotelData.pet_rule,
        pool_opening_time: hotelData.pool_opening_time,
        pool_closing_time: hotelData.pool_closing_time,
        basic_options: {
          swimming_pool: options?.swimming_pool,
          break_fast: options?.break_fast,
          wireless_internet: options?.wireless_internet,
          dry_cleaning: options?.dry_cleaning,
          storage_service: options?.storage_service,
          convenience_store: options?.convenience_store,
          ironing_tools: options?.ironing_tools,
          wakeup_call: options?.wakeup_call,
          mini_bar: options?.mini_bar,
          shower_room: options?.shower_room,
          air_conditioner: options?.air_conditioner,
          table: options?.table,
          tv: options?.tv,
          safety_deposit_box: options?.safety_deposit_box,
          welcome_drink: options?.welcome_drink,
          free_parking: options?.free_parking,
          fitness: options?.fitness,
          electric_kettle: options?.electric_kettle,
        },
        // 기타 필드
      });
    }
  }, [hotelData]);

  console.log("edit", hotelInfo);
  const addHotel = usehotelListStore((state) => state.addHotel);
  //이미지
  const handleImage1 = () => {};
  //호텔이름
  const handleName = (value) => {
    setHotelInfo({ ...hotelInfo, name: value });
  };
  //호텔위치
  const handleLocationChange = (event) => {
    const selectedValue = event.target.value;

    setHotelInfo((prevHotelInfo) => ({
      ...prevHotelInfo,
      nation: selectedValue,
    }));
  };
  const getLocationValue = (nation) => {
    const option = where.find((option) => option.text === nation);
    return option ? option.value : undefined;
  };

  const locationValue = getLocationValue(hotelData.nation);
  //가격
  const cut3Digit = /\B(?=(\d{3})+(?!\d))/g;
  const formatPrice = (value) => {
    return value.replace(cut3Digit, ",");
  };

  const handlePrice = (value) => {
    const inputValue = value.replace(/\D/g, "");
    const formattedPrice = formatPrice(inputValue);

    setHotelInfo({ ...hotelInfo, price: formattedPrice });
  };

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
    const { name, checked } = e.target;

    setHotelInfo((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        [name]: checked,
      },
    }));
  };

  //체크인
  const getTimeValue = (time) => {
    const option = checkOption.find((option) => option.text === time);
    return option ? option.value : undefined;
  };

  const checkInValue = getTimeValue(hotelData.check_in);
  const checkOutValue = getTimeValue(hotelData.check_out);
  const poolOpenValue = getTimeValue(hotelData.pool_opening_time);
  const poolClosedValue = getTimeValue(hotelData.pool_closing_time);

  const handleCheckIn = (e) => {
    const selectedValue = e.target.value;

    const selectedText =
      checkOption.find((option) => option.value === selectedValue)?.text || "";
    setHotelInfo({ ...hotelInfo, check_in: selectedValue });
  };
  const handleCheckOut = (e) => {
    const selectedValue = e.target.value;

    const selectedText =
      checkOption.find((option) => option.value === selectedValue)?.text || "";
    setHotelInfo({ ...hotelInfo, check_out: selectedValue });
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
    setHotelInfo({ ...hotelInfo, swimmingpool_open: selectedValue });
  };
  const handlePoolClose = (e) => {
    const selectedValue = e.target.value;

    const selectedText =
      checkOption.find((option) => option.value === selectedValue)?.text || "";
    setHotelInfo({ ...hotelInfo, swimmingpool_closed: selectedValue });
  };

  //수정저장
  const token = localStorage.getItem("token");
  const saveHotel = async () => {
    if (
      hotelInfo.name == "" ||
      hotelInfo.price == "" ||
      hotelInfo.description == ""
    ) {
      setIsPopup(true);
      setErrorMessage("호텔 기본정보를 모두 입력해 주세요.");
      return;
    }
    // else if (
    //   hotelInfo.checkIn == "" ||
    //   hotelInfo.checkOut == "" ||
    //   (hotelInfo.basic_options.swimming_pool === true &&
    //     hotelInfo.options.swimmingpool_open == "") ||
    //   (hotelInfo.basic_options.swimming_pool == true &&
    //     hotelInfo.options.swimmingpool_closed == "")
    // ) {
    //   setIsPopup(true);
    //   setErrorMessage("호텔 규칙을 모두 입력해 주세요.");
    //   return;
    // }
    // const formData = new FormData();
    // formData.append("request", JSON.stringify(hotelInfo));

    try {
      const response = await axios.patch(
        `http://52.78.12.252:8080/api/hotels/${hotelId}`,
        hotelInfo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data); // 응답 데이터 처리
      alert("호텔 수정 성공!");
    } catch (error) {
      console.error(error);
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/hoteldetail/${hotelId}`);
    }, 1500);
  };

  return (
    <>
      <div className="main">
        <div className="container mb-32">
          <Heading tag={"h3"} text={"호텔 수정"} className={"xl my-5"} />
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
                    selectValue={hotelInfo.nation}
                    options={where}
                    onChange={handleLocationChange}
                  />
                </li>
                <li className="grid gap-3">
                  호텔 이름
                  <Input
                    type={"text"}
                    value={hotelInfo?.name}
                    onChange={handleName}
                  />
                </li>
                <li className="grid gap-3">
                  호텔 가격
                  <div className="grid grid-cols-[1fr_min-content] items-center gap-2">
                    <Input
                      onChange={handlePrice}
                      value={hotelInfo.price}
                      type={"text"}
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
                    value={hotelInfo.description}
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
                        name="swimming_pool"
                        value="수영장"
                        checked={hotelInfo.options?.swimming_pool}
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
                        checked={hotelInfo.options?.breakfast}
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
                        checked={hotelInfo.options?.wireless_internet}
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
                        checked={hotelInfo.options?.dry_cleaning}
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
                        checked={hotelInfo.options?.storage_service}
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
                        checked={hotelInfo.options?.convenience_store}
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
                        checked={hotelInfo.options?.ironing_tools}
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
                        checked={hotelInfo.options?.wakeup_call}
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
                        checked={hotelInfo.options?.mini_bar}
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
                        checked={hotelInfo.options?.shower_room}
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
                        checked={hotelInfo.options?.air_conditioner}
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
                        checked={hotelInfo.options?.table}
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
                        checked={hotelInfo.options?.tv}
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
                        checked={hotelInfo.options?.safety_deposit_box}
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
                        checked={hotelInfo.options?.welcome_drink}
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
                        checked={hotelInfo.options?.free_parking}
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
                        checked={hotelInfo.options?.fitness}
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
                        checked={hotelInfo.options?.electric_kettle}
                        onChange={handleCheckbox}
                      >
                        전기주전자
                      </Checkbox>
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
                      <Select
                        selectValue={hotelInfo.check_in}
                        options={checkOption}
                        onChange={handleCheckIn}
                      />
                    </li>
                    <li className="grid grid-cols-[8rem_1fr] items-center">
                      <strong>체크아웃</strong>
                      <Select
                        selectValue={hotelInfo.check_out}
                        options={checkOption}
                        onChange={handleCheckOut}
                      />
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
                    {hotelInfo.basic_options?.swimming_pool && (
                      <li className="grid grid-cols-[8rem_1fr] items-center">
                        <strong>수영장 이용시간</strong>
                        <div className="grid grid-cols-[1fr_2rem_1fr] items-center">
                          <Select
                            selectValue={poolOpenValue}
                            options={checkOption}
                            onChange={handlePoolOpen}
                          />
                          <span className="justify-self-center">~</span>
                          <Select
                            selectValue={poolClosedValue}
                            options={checkOption}
                            onChange={handlePoolClose}
                          />
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
              <button
                className="btn-blue"
                onClick={() => setIsToggle(!isToggle)}
              >
                객실등록
              </button>
            </div>
            {isToggle ? (
              <RoomWrite />
            ) : (
              <RoomList edit={true} roomLists={thisHotel?.rooms} />
            )}
          </Box>
          <div className="flex justify-between mt-10">
            <button onClick={() => {}} className="btn-gray xl">
              이전
            </button>
            <div className="flex  gap-3">
              <button className="btn-green xl" onClick={saveHotel}>
                호텔 수정
              </button>
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

export default HotelEdit;
