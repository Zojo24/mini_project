import React from "react";

const Advertisement = ({ ...props }) => {
  return (
    <div className="advertisement" {...props}>
      <div className="container">
        TripHotel은 최고의 여행이 될 수 있도록
        <br />
        여러분들에게 최상의 룸 컨디션을 보유한 호텔만을 소개하고 있습니다.
      </div>
    </div>
  );
};

export default Advertisement;
