import React, { useState } from "react";
import "../../styles/pages/reservation.css";
import Input from "../Input";
import GuestCounter from "../GuestCounter";
import Checkbox from "../Checkbox";
import { Today } from "../../store/todayStore";
import { useNavigate } from "react-router-dom";

const ReservationFirst = () => {
  const [isStart, setIsStart] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleStart = (e) => {
    setIsStart(e.target.value);
  };
  const handleReservation = () => {
    navigate("/reservation");
  };
  return (
    <div>
      <form className="reservation-write" onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="reser1" className="--title">
              체크인
            </label>
            <Input type="date" id="reser1" min={Today()} defaultValue={Today()} onChange={handleStart} />
          </li>
          <li>
            <label htmlFor="reser2" className="--title">
              체크아웃
            </label>
            <Input type="date" id="reser2" min={isStart} defaultValue={Today(1)} />
          </li>
          <li>
            <strong className="--title">성인(청소년)</strong>
            <GuestCounter />
          </li>
          <li>
            <strong className="--title">어린이</strong>
            <GuestCounter kids />
          </li>
          <li>
            <strong className="--title">총 금액</strong> <span className="--total">₩ 100,000</span>
          </li>
        </ul>
        <button className="btn-blue xl2" onClick={handleReservation}>
          예약하기
        </button>
      </form>
    </div>
  );
};

export default ReservationFirst;
