import React from "react";
import { Link } from "react-router-dom";

const HotelTitle = ({ link, title }) => {
  return link ? (
    <Link className="hotel__title" to={link}>
      {title}
    </Link>
  ) : (
    <span className="hotel__title">{title}</span>
  );
};

export default HotelTitle;
