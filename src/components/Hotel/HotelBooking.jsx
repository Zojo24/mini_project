import React from "react";

const HotelBooking = ({ text, disabled }) => {
  return (
    <button disabled={disabled} className="btn-blue-label hotel__booking">
      {text}
    </button>
  );
};

export default HotelBooking;
