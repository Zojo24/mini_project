import React from 'react';

import { useHotelStore } from '../../store/hotelStore';

const HotelRules = ({ className }) => {
  const { thisHotel } = useHotelStore();
  console.log("rules", thisHotel);
  function getTimePeriod(time) {
    const [hours, minutes] = time.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    const morningStart = 6 * 60;
    const morningEnd = 11 * 60;
    const afternoonStart = 12 * 60;
    const afternoonEnd = 22 * 60;
    if (totalMinutes >= morningStart && totalMinutes <= morningEnd) {
      return "오전";
    } else if (totalMinutes >= afternoonStart && totalMinutes <= afternoonEnd) {
      return "오후";
    }
  }

  return (
    <div className={className}>
      <ul className="hotel-rules">
        <li>
          <strong>체크인</strong>
          <span>{thisHotel.checkIn}</span>
        </li>
        <li>
          <strong>체크아웃</strong>
          <span>{thisHotel.checkOut}</span>
        </li>
        <li>
          <strong>
            {thisHotel.notSmoking ? "전객실 금연" : "일부객실 흡연가능"}
          </strong>
        </li>
        <li>
          <strong>
            {thisHotel.noPet
              ? "전객실 애완동물 금지"
              : "일부객실 애완동물 가능"}
          </strong>
        </li>
        <li>
          <strong>수영장 이용시간</strong>
          <span>
            오전 {thisHotel.swimmingpool_open} ~ 오후{" "}
            {thisHotel.swimmingpool_closed}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default HotelRules;
