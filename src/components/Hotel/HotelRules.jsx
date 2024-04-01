import React from 'react';

import { useParams } from 'react-router-dom';

const HotelRules = ({ thisHotel, className }) => {
  let { hotelId } = useParams();

  return (
    <div className={className}>
      <ul className="hotel-rules">
        <li>
          <strong>체크인</strong>
          <span>{thisHotel.check_in}</span>
        </li>
        <li>
          <strong>체크아웃</strong>
          <span>{thisHotel.check_out}</span>
        </li>
        <li>
          <strong>
            {thisHotel.smoking_rule === "TOTAL_IMPOSSIBLE"
              ? "전객실 금연"
              : "일부객실 흡연가능"}
          </strong>
        </li>
        <li>
          <strong>
            {thisHotel.pet_rule === "TOTAL_IMPOSSIBLE"
              ? "전객실 애완동물 금지"
              : "일부객실 애완동물 가능"}
          </strong>
        </li>

        {thisHotel.basic_options?.swimming_pool && (
          <li>
            <strong>수영장 이용시간</strong>
            <span>
              {thisHotel.pool_opening_time} ~ {thisHotel.pool_closing_time}
            </span>{" "}
          </li>
        )}
      </ul>
    </div>
  );
};

export default HotelRules;
