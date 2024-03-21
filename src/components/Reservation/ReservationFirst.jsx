import React, { useEffect, useState } from "react";
import "../../styles/pages/reservation.css";
import Input from "../Input";
import GuestCounter from "../GuestCounter";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast";
import { useReservationStore } from "../../store/reservationStore";
import Dialog from "../Dialog";
import Loading from "../Loading";

// 달력 현재날짜 고정
const Today = (nextDay = 0) => {
  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate() + nextDay;

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  return `${year}-${month}-${day}`;
};

// 인원 가격정보
const payInfo = {
  defaultRoomCount: 4, //가용인원
  MaxRoomCount: 6, //최대인원
  adult: "50000", // 어른가격
  children: "30000", //어린이가격
};
// 3자리쉼표 처리 정규식
const cut3Digit = /\B(?=(\d{3})+(?!\d))/g;

const ReservationFirst = () => {
  const [isToast, setIsToast] = useState(false);
  const [isToast2, setIsToast2] = useState(false);
  const [isStart, setIsStart] = useState(Today());
  const [isEnd, setIsEnd] = useState(Today(1));
  const [errrorMessage, setErrrorMessage] = useState("");
  const [isPopup, setIsPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPayInfo, setIsPayInfo] = useState({
    start: "", //시작일
    end: "", //종료일
    adult: 0, //성인
    children: 0, //어린이
    adultPay: "", //성인요금
    childrenPay: "", //어린이요금
    totalPay: "", // 총금액
  });
  const navigate = useNavigate();
  const { addInfo, reservationInfos } = useReservationStore();

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
  const formatPrice = (value) => {
    return value.replace(cut3Digit, ",");
  };

  const digit3Control = (pay) => {
    const digit = String(pay).replace(/\D/g, "");
    const formattedPrice = formatPrice(digit);

    return formattedPrice;
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
    } else if (isPayInfo.adult + isPayInfo.children > payInfo.MaxRoomCount) {
      setIsPopup(true);
      setErrrorMessage(`해당 객실은 ${payInfo.MaxRoomCount}명까지 수용가능한 객실입니다. 인원수를 조절해주세요.`);
      isValid = false;
    }
    return isValid;
  };

  useEffect(() => {
    const handleCalculate = () => {
      const countMember = parseInt(isPayInfo.adult) + parseInt(isPayInfo.children);
      const adultPay = parseInt(isPayInfo.adult) * payInfo.adult;
      const childrenPay = parseInt(isPayInfo.children) * payInfo.children;
      const totalPay = adultPay + childrenPay;

      if (payInfo.MaxRoomCount < countMember) {
        setIsToast(true);
        setIsPayInfo({ ...isPayInfo, adultPay, childrenPay, totalPay });
      } else if (payInfo.defaultRoomCount < countMember && payInfo.MaxRoomCount >= countMember) {
        setIsToast2(true);
        setIsPayInfo({ ...isPayInfo, adultPay, childrenPay, totalPay });
      } else {
        setIsToast(false);
        setIsToast2(false);
        setIsPayInfo({ ...isPayInfo, adultPay, childrenPay, totalPay });
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
        navigate("/reservation");
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <>
      <div>
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
              <GuestCounter iscount={handleAdult} max={payInfo.MaxRoomCount} />
            </li>
            <li>
              <strong className="--title">어린이</strong>
              <GuestCounter kids iscount={handleChildren} max={payInfo.MaxRoomCount} />
            </li>
            <li className="!grid grid-cols-2">
              <strong className="--title">성인 ⨉ {isPayInfo.adult ? isPayInfo.adult : 0}</strong>{" "}
              <span className="--total justify-self-end">
                ₩ {isPayInfo.adultPay ? digit3Control(isPayInfo.adultPay) : 0}
              </span>
              <strong className="--title">어린이 ⨉ {isPayInfo.children ? isPayInfo.children : 0}</strong>{" "}
              <span className="--total justify-self-end">
                ₩ {isPayInfo.childrenPay ? digit3Control(isPayInfo.childrenPay) : "0"}
              </span>
            </li>
            <li>
              <strong className="--title !text-lg">총 금액</strong>{" "}
              <span className="--total justify-self-end">
                ₩ {isPayInfo.totalPay ? digit3Control(isPayInfo.totalPay) : 0}
              </span>
            </li>
          </ul>
          <button className="btn-blue xl2" onClick={handleReservation}>
            예약하기
          </button>
        </form>
      </div>
      {isToast && (
        <Toast onOpen={isToast} onClose={() => setIsToast(false)} color={"red"}>
          인원수가 초과되었습니다. 최대 {payInfo.MaxRoomCount}명 수용 가능합니다.
        </Toast>
      )}
      {isToast2 && (
        <Toast onOpen={isToast2} onClose={() => setIsToast(false)} color={"blue"}>
          해당 숙소는 {payInfo.defaultRoomCount + 1}인이상 {payInfo.MaxRoomCount}이하면 추가금액이 발생합니다.
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
