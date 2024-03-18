import React from "react";
import HotelList from "../Hotel/HotelList";

const MypageFavorite = () => {
  return (
    <div>
      <div className="text-right mb-5">
        <button className="btn-red">즐겨찾기 삭제</button>
      </div>
      <HotelList modify={true} />
    </div>
  );
};

export default MypageFavorite;
