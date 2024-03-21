import React, { useState } from "react";
import "../../styles/pages/reservation.css";
import Input from "../Input";
import GuestCounter from "../GuestCounter";
import Checkbox from "../Checkbox";
import { useNavigate } from "react-router-dom";

const Today = (nextDay = 0) => {
  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate() + nextDay;

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  return `${year}-${month}-${day}`;
};

const ReservationFirst = () => {
  const [isStart, setIsStart] = useState(Today());
  const [isEnd, setIsEnd] = useState(Today(1));
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleStart = (value) => {
    setIsStart(value);
  };
  const handleEnd = (value) => {
    setIsEnd(value);
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
            <Input type="date" min={Today()} value={isStart} onChange={handleStart} />
          </li>
          <li>
            <label htmlFor="reser2" className="--title">
              체크아웃
            </label>
            <Input type="date" min={isStart ? isStart : Today(1)} value={isEnd} onChange={handleEnd} />
          </li>
          <li>
            <strong className="--title">성인(청소년)</strong>
            <GuestCounter />
          </li>
          <li>
            <strong className="--title">어린이</strong>
            <GuestCounter kids />
          </li>
          <li className="!grid grid-cols-2">
            <strong className="--title">성인 ⨉ 2</strong> <span className="--total justify-self-end">₩ 100,000</span>
            <strong className="--title">어린이 ⨉ 2</strong> <span className="--total justify-self-end">₩ 100,000</span>
          </li>
          <li>
            <strong className="--title !text-lg">총 금액</strong>{" "}
            <span className="--total justify-self-end">₩ 200,000</span>
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
