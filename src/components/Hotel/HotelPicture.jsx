import React from "react";
import { Link } from "react-router-dom";

const HotelPicture = ({ link, image, ...props }) => {
  return (
    <Link to={link} {...props} className="hotel__picture">
      <div>
        <img src={image} alt="" />
      </div>
    </Link>
  );
};

export default HotelPicture;
