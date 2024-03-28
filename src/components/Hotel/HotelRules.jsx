import React from 'react';

import { useParams } from 'react-router-dom';

import { usehotelListStore } from '../../store/hotelListStore';

const HotelRules = ({ className }) => {
  let { hotelId } = useParams();
  const { totalHotels } = usehotelListStore();
  const thisHotel = totalHotels.find((hotel) => hotel.id === Number(hotelId));

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

        {thisHotel.options.swimming_pool && (
          <li>
            <strong>수영장 이용시간</strong>
            <span>
              오전 {thisHotel.swimmingpool_open} ~ 오후{" "}
              {thisHotel.swimmingpool_closed}
            </span>{" "}
          </li>
        )}
      </ul>
    </div>
  );
};

export default HotelRules;
