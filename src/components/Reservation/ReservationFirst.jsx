import React, { useEffect, useState } from "react";
import "../../styles/pages/reservation.css";
import Input from "../Input";
import GuestCounter from "../GuestCounter";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast";
import { useReservationStore } from "../../store/reservationStore";
import Dialog from "../Dialog";
import Loading from "../Loading";
import { digit3 } from "../../store/digit3";
import pic from "../../assets/hotel2.jpg";
import Loading2 from "../Loading2";

// 달력 현재날짜 고정
const Today = (nextDay = 0) => {
  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate() + nextDay;

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  return `${year}-${month}-${day}`;
};

const roomInfo = {
  type: "디럭스",
  active_status: "ACTIVE",
  bed_type: "더블베드",
  standard_capacity: 3,
  maximum_capacity: 5,
  view_type: "OCEAN",
  standard_price: 70000, // 필요할까??
  adult_fare: 30000,
  child_fare: 18000,
  file: pic,
  hotel_name: "호텔명이전달됩니다.", //누락됨.
};

// 호텔정보더미
// const hotelInfo = {
//   photo: pic,
//   hotelName: "호텔명이전달됩니다.",
//   room: "디럭스",
//   bed: "더블베드",
// };

// 인원 가격정보더미
// const payInfo = {
//   defaultRoomCount: 4, //가용인원
//   MaxRoomCount: 6, //최대인원
//   adult: "50000", // 어른가격
//   children: "30000", //어린이가격
// };

const ReservationFirst = () => {
  const [isToast, setIsToast] = useState(false);
  const [isToast2, setIsToast2] = useState(false);
  const [isStart, setIsStart] = useState(Today());
  const [isEnd, setIsEnd] = useState(Today(1));
  const [errrorMessage, setErrrorMessage] = useState("");
  const [isPopup, setIsPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isPayInfo, setIsPayInfo] = useState({
    start: "", //시작일
    end: "", //종료일
    adult: 0, //성인
    children: 0, //어린이
    adult_fare: "", //성인요금
    child_fare: "", //어린이요금
    totalPay: "", // 총금액
    file: roomInfo.file, //호텔사진
    hotel_name: roomInfo.hotel_name, //호텔이름
    type: roomInfo.type, //호텔룸종류
    bed_type: roomInfo.bed_type, //호텔침대종류
  });
  const navigate = useNavigate();
  const { addInfo, addCartInfo } = useReservationStore();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 달력 상태제어
  const handleStart = (start) => {
    setIsStart(start);
    setIsPayInfo({ ...isPayInfo, start });
  };
  const handleEnd = (end) => {
    setIsEnd(end);
    setIsPayInfo({ ...isPayInfo, end });
  };
  const handleAdult = (adult) => {
    setIsPayInfo({ ...isPayInfo, adult });
  };
  const handleChildren = (children) => {
    setIsPayInfo({ ...isPayInfo, children });
  };

  const CheckEmpty = () => {
    let isValid = true;
    if (!isPayInfo.start) {
      setIsPopup(true);
      setErrrorMessage("체크인 날짜를 선택해주세요.");
      isValid = false;
    } else if (!isPayInfo.end) {
      setIsPopup(true);
      setErrrorMessage("체크아웃 날짜를 선택해주세요.");
      isValid = false;
    } else if (isPayInfo.adult + isPayInfo.children > roomInfo.maximum_capacity) {
      setIsPopup(true);
      setErrrorMessage(`해당 객실은 ${roomInfo.maximum_capacity}명까지 수용가능한 객실입니다. 인원수를 조절해주세요.`);
      isValid = false;
    } else if (isPayInfo.adult + isPayInfo.children === 0) {
      setIsPopup(true);
      setErrrorMessage(`최소 1명이상 예약해 주세요.`);
      isValid = false;
    }
    return isValid;
  };

  useEffect(() => {
    const handleCalculate = () => {
      const countMember = parseInt(isPayInfo.adult) + parseInt(isPayInfo.children);
      const adult_fare = parseInt(isPayInfo.adult) * roomInfo.adult_fare;
      const childrenPay = parseInt(isPayInfo.children) * roomInfo.child_fare;
      const totalPay = adult_fare + childrenPay;

      if (roomInfo.maximum_capacity < countMember) {
        setIsToast(true);
        setIsPayInfo({ ...isPayInfo, adult_fare, childrenPay, totalPay });
      } else if (roomInfo.standard_capacity < countMember && roomInfo.maximum_capacity >= countMember) {
        setIsToast2(true);
        setIsPayInfo({ ...isPayInfo, adult_fare, childrenPay, totalPay });
      } else {
        setIsToast(false);
        setIsToast2(false);
        setIsPayInfo({ ...isPayInfo, adult_fare, childrenPay, totalPay });
      }
    };

    return handleCalculate();
  }, [isPayInfo.adult, isPayInfo.children]);

  // 결제완료 넘기기
  const handleReservation = async () => {
    const isValidCheck = CheckEmpty();
    if (isValidCheck) {
      setIsLoading(true);
      addInfo(isPayInfo);

      setTimeout(() => {
        setIsLoading(false);
        navigate("/reservation");
      }, 1500);
    }
  };

  // 장바구니 넘기기
  const handleCart = async () => {
    const isValidCheck = CheckEmpty();
    if (isValidCheck) {
      setIsLoading2(true);
      addCartInfo(isPayInfo);

      setTimeout(() => {
        setIsLoading2(false);
      }, 1500);
    }
  };
  return (
    <>
      <div className="relative">
        <form className="reservation-write" onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="reser1" className="--title">
                체크인
              </label>
              <Input type="date" name="start" min={Today()} value={isStart} onChange={handleStart} />
            </li>
            <li>
              <label htmlFor="reser2" className="--title">
                체크아웃
              </label>
              <Input type="date" name="end" min={isStart ? isStart : Today(1)} value={isEnd} onChange={handleEnd} />
            </li>
            <li>
              <strong className="--title">성인(청소년)</strong>
              <GuestCounter iscount={handleAdult} max={roomInfo.maximum_capacity} />
            </li>
            <li>
              <strong className="--title">어린이</strong>
              <GuestCounter kids iscount={handleChildren} max={roomInfo.maximum_capacity} />
            </li>
            <li className="!grid grid-cols-2">
              <strong className="--title">성인 ⨉ {isPayInfo.adult ? isPayInfo.adult : 0}</strong>{" "}
              <span className="--total justify-self-end">
                ₩ {isPayInfo.adult_fare ? digit3(isPayInfo.adult_fare) : 0}
              </span>
              <strong className="--title">어린이 ⨉ {isPayInfo.children ? isPayInfo.children : 0}</strong>{" "}
              <span className="--total justify-self-end">
                ₩ {isPayInfo.child_fare ? digit3(isPayInfo.child_fare) : "0"}
              </span>
            </li>
            <li>
              <strong className="--title !text-lg">총 금액</strong>{" "}
              <span className="--total justify-self-end">₩ {isPayInfo.totalPay ? digit3(isPayInfo.totalPay) : 0}</span>
            </li>
          </ul>
          <div className="grid grid-cols-[1.7fr_1fr] gap-3">
            <button className="btn-blue xl2 justify-center" onClick={handleReservation}>
              예약하기
            </button>
            <button className="btn-green-outline xl2 justify-center" onClick={handleCart}>
              장바구니
            </button>
          </div>
        </form>
        {isLoading2 && <Loading2 />}
      </div>
      {isToast && (
        <Toast onOpen={isToast} onClose={() => setIsToast(false)} color={"red"}>
          인원수가 초과되었습니다. 최대 {roomInfo.maximum_capacity}명 수용 가능합니다.
        </Toast>
      )}
      {isToast2 && (
        <Toast onOpen={isToast2} onClose={() => setIsToast(false)} color={"blue"}>
          해당 숙소는 {roomInfo.standard_capacity + 1}인이상 {roomInfo.maximum_capacity}이하면 추가금액이 발생합니다.
        </Toast>
      )}
      <Dialog open={isPopup} close={() => setIsPopup(false)}>
        <div className="text-center">
          <div className="text-center pb-3">{errrorMessage}</div>
          <button className="btn-blue" onClick={() => setIsPopup(false)}>
            확인
          </button>
        </div>
      </Dialog>
      {isLoading && <Loading />}
    </>
  );
};

export default ReservationFirst;
