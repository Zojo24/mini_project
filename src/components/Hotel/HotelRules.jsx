import React from "react";

const HotelRules = ({ className }) => {
  return (
    <div className={className}>
      <ul className="hotel-rules">
        <li>
          <strong>체크인</strong>
          <span>오전 12:00</span>
        </li>
        <li>
          <strong>체크아웃</strong>
          <span>오후 12:30</span>
        </li>
        <li>
          <strong>전객실 금연</strong>
        </li>
        <li>
          <strong>전객실 애완동물 금지</strong>
        </li>
        <li>
          <strong>수영장 이용시간</strong>
          <span>오전 8:00 ~ 오후 6:00</span>
        </li>
      </ul>
    </div>
  );
};

export default HotelRules;
