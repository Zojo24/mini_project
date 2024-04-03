import React, { useEffect, useRef, useState } from "react";
import "../../styles/pages/reservation.css";
import Input from "../Input";
import GuestCounter from "../GuestCounter";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast";
import { useReservationStore } from "../../store/reservationStore";
import Dialog from "../Dialog";
import Loading from "../Loading";
import { digit3 } from "../../store/digit3";
import Loading2 from "../Loading2";
import request from "../../api/request";
import { useLoginStore } from "../../store/loginStore";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import instance from "../../api/axios";
import { useReserveRoomStore } from "../../store/reserveRoomStore";

// 달력 현재날짜 고정
const Today = (nextDay = 0) => {
  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate() + nextDay;

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  return `${year}-${month}-${day}`;
};

const ReservationFirst = () => {
  const token = localStorage.getItem("token");
  const { fetchOrders } = request; // 필요한 요청 URL을 추출
  const navigate = useNavigate();
  const { addInfo, addAdditionalInfo } = useReservationStore();
  const [isWidth, setIsWidth] = useState(window.innerWidth);
  const ref = useRef();
  const [isToggle, setIsToggle] = useState(false);
  const [isToast, setIsToast] = useState(false);
  const [isToast2, setIsToast2] = useState(false);
  const [isStart, setIsStart] = useState(Today());
  const [isEnd, setIsEnd] = useState(Today(1));
  const [errrorMessage, setErrrorMessage] = useState("");
  const [isPopup, setIsPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const { reservedRoom } = useReserveRoomStore();
  // console.log(reservedRoom);

  const [myId, setMyId] = useState("");
  const [isPayInfo, setIsPayInfo] = useState({
    adult_count: 0, //성인
    child_count: 0, //어린이
    adult_fare: "", //성인요금
    child_fare: "", //어린이요금
    total_price: "", // 총금액
  });
  const [orderFirst, setOrderFirst] = useState({
    room_id: reservedRoom.id,
    check_in: "",
    check_out: "",
    adult_count: "",
    child_count: "",
  });
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  const handleStart = (check_in) => {
    setIsStart(check_in);
    setOrderFirst({ ...orderFirst, check_in });
    setIsPayInfo({ ...isPayInfo, check_in });
  };
  const handleEnd = (check_out) => {
    setIsEnd(check_out);
    setOrderFirst({ ...orderFirst, check_out });
    setIsPayInfo({ ...isPayInfo, check_out });
  };
  const handleAdult = (adult_count) => {
    setOrderFirst({ ...orderFirst, adult_count });
    setIsPayInfo({ ...isPayInfo, adult_count });
  };
  const handleChildren = (child_count) => {
    setOrderFirst({ ...orderFirst, child_count });
    setIsPayInfo({ ...isPayInfo, child_count });
  };

  const handleToggle = (e) => {
    e.preventDefault();

    setIsToggle(!isToggle);
    if (isToggle) {
      ref.current.style.height = "27rem";
      setIsToggle(false);
    } else {
      ref.current.style.height = "0";
      setIsToggle(true);
    }
  };

  const CheckEmpty = () => {
    let isValid = true;
    if (!isPayInfo.check_in) {
      setIsPopup(true);
      setErrrorMessage("체크인 날짜를 선택해주세요.");
      isValid = false;
    } else if (!isPayInfo.check_out) {
      setIsPopup(true);
      setErrrorMessage("체크아웃 날짜를 선택해주세요.");
      isValid = false;
    } else if (isPayInfo.adult_count + isPayInfo.child_count > reservedRoom.maximum_capacity) {
      setIsPopup(true);
      setErrrorMessage(
        `해당 객실은 ${reservedRoom.maximum_capacity}명까지 수용가능한 객실입니다. 인원수를 조절해주세요.`
      );
      isValid = false;
    } else if (isPayInfo.adult_count + isPayInfo.child_count === 0) {
      setIsPopup(true);
      setErrrorMessage(`최소 1명이상 예약해 주세요.`);
      isValid = false;
    }
    return isValid;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWidth(window.innerWidth);
      if (ref.current && window.innerWidth > 1024) {
        ref.current.removeAttribute("style");
        setIsToggle(true);
      }
    };

    const handleCalculate = () => {
      const countMember = parseInt(isPayInfo.adult_count) + parseInt(isPayInfo.child_count);
      const adult_fare = parseInt(isPayInfo.adult_count) * reservedRoom.adult_fare;
      const childrenPay = parseInt(isPayInfo.child_count) * reservedRoom.child_fare;
      const checkIn = new Date(isPayInfo.check_in);
      const checkOut = new Date(isPayInfo.check_out);
      const days = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
      const total_price = days * (adult_fare + childrenPay);

      if (reservedRoom.maximum_capacity < countMember) {
        setIsToast(true);
        setIsPayInfo({ ...isPayInfo, adult_fare, childrenPay, total_price });
      } else if (reservedRoom.standard_capacity < countMember && reservedRoom.maximum_capacity >= countMember) {
        setIsToast2(true);
        setIsPayInfo({ ...isPayInfo, adult_fare, childrenPay, total_price });
      } else {
        setIsToast(false);
        setIsToast2(false);
        setIsPayInfo({ ...isPayInfo, adult_fare, childrenPay, total_price });
      }
    };

    window.addEventListener("resize", handleResize);
    handleCalculate();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isPayInfo.adult_count, isPayInfo.child_count, isPayInfo.check_in, isPayInfo.check_out]);

  // 결제다음단계 넘기기
  const handleReservation = async (e) => {
    e.preventDefault();
    const isValidCheck = CheckEmpty();

    // console.log(orderFirst);
    // console.log(isPayInfo);

    // 로그인체크
    if (!isLoggedIn()) {
      setIsPopup(true);
      setErrrorMessage(`예약하기 위해선 로그인이 필요합니다.`);
      return;
    } else if (!isValidCheck) return;
    let orderId = "";

    try {
      setIsLoading2(true);
      const responseOrder = await instance.post(fetchOrders, orderFirst, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsLoading(true);
      orderId = responseOrder.data.result.id;
      // setMyId(orderId);
      addInfo(responseOrder); // 예약결과전역상태로 넘기기
      console.log(orderId); //post이후 병합데이터
    } catch (error) {
      console.log(`submitReservation :`, error);
    } finally {
      setTimeout(() => {
        setIsLoading2(false);
        setIsLoading(false);
        navigate(`/reservation/?${orderId}`);
      }, 1500);
    }
  };

  // 장바구니 넘기기
  const handleCart = async (e) => {
    e.preventDefault();
    const isValidCheck = CheckEmpty();
    if (isValidCheck) {
      try {
        setIsLoading2(true);
        await instance.post(fetchOrders, orderFirst, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
        // console.log(responseCart);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading2(false);
      }

      // addCartInfo(isPayInfo);
    }
  };

  // form핸들링
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="relative">
        <form className="reservation-write" onSubmit={handleSubmit}>
          <ul
            ref={ref}
            className="mobile:overflow-hidden mobile:h-0 tablet:overflow-visible tablet:h-[auto] transition-all duration-300"
          >
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
              <GuestCounter iscount={handleAdult} max={reservedRoom.maximum_capacity} />
            </li>
            <li>
              <strong className="--title">어린이</strong>
              <GuestCounter kids iscount={handleChildren} max={reservedRoom.maximum_capacity} />
            </li>
            <li className="!grid grid-cols-2">
              <strong className="--title">성인 ⨉ {isPayInfo.adult_count ? isPayInfo.adult_count : 0}</strong>
              <span className="--total justify-self-end">
                ₩ {isPayInfo.adult_fare ? digit3(isPayInfo.adult_fare) : 0}
              </span>
              <strong className="--title">어린이 ⨉ {isPayInfo.child_count ? isPayInfo.child_count : 0}</strong>
              <span className="--total justify-self-end">
                ₩ {isPayInfo.childrenPay ? digit3(isPayInfo.childrenPay) : "0"}
              </span>
            </li>
            <li>
              <strong className="--title !text-lg">총 금액</strong>{" "}
              <span className="--total justify-self-end">
                ₩ {isPayInfo.total_price ? digit3(isPayInfo.total_price) : 0}
              </span>
            </li>
          </ul>
          <div className="grid grid-cols-[1.7fr_1fr] gap-3">
            {isWidth < 1024 && (
              <button
                onClick={handleToggle}
                className="absolute left-2/4 -top-9 -translate-x-2/4 w-12 h-10 bg-gray-100 rounded-full flex justify-center pt-[0.3rem] text-2xl"
              >
                <MdKeyboardDoubleArrowUp className={`ico-toggle ${!isToggle ? "active" : ""}`} />
              </button>
            )}
            <button
              className="btn-blue xl2 mobile:h-12 tablet:h-auto mobile:!text-base tablet:!text-xl justify-center"
              onClick={handleReservation}
            >
              예약하기
            </button>
            <button
              className="btn-green-outline xl2 mobile:h-12 tablet:h-auto mobile:!text-base tablet:!text-xl justify-center whitespace-nowrap"
              onClick={handleCart}
            >
              장바구니
            </button>
          </div>
        </form>
        {isLoading2 && <Loading2 />}
      </div>
      {isToast && (
        <Toast onOpen={isToast} onClose={() => setIsToast(false)} color={"red"}>
          인원수가 초과되었습니다. 최대 {reservedRoom.maximum_capacity}명 수용 가능합니다.
        </Toast>
      )}
      {isToast2 && (
        <Toast onOpen={isToast2} onClose={() => setIsToast(false)} color={"blue"}>
          해당 숙소는 {reservedRoom.standard_capacity + 1}인이상 {reservedRoom.maximum_capacity}이하면 추가금액이
          발생합니다.
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
