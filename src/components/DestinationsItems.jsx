import React from "react";
import { Link } from "react-router-dom";
import category1 from "../assets/category1.jpg";
import category2 from "../assets/category2.webp";
import category3 from "../assets/category3.webp";
import category4 from "../assets/category4.jpg";
import category5 from "../assets/category5.jpg";

const DestinationsItems = () => {
  return (
    <>
      <li>
        <Link to="/">
          <div className="destinations__thumbnail">
            <img src={category1} alt="" />
          </div>
          <div className="destinations__info">
            <strong>Thailand</strong>
            <span>1 Hotel</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/">
          <div className="destinations__thumbnail">
            <img src={category2} alt="" />
          </div>
          <div className="destinations__info">
            <strong>Vietnam</strong>
            <span>1 Hotel</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/">
          <div className="destinations__thumbnail">
            <img src={category3} alt="" />
          </div>
          <div className="destinations__info">
            <strong>Philippines</strong>
            <span>1 Hotel</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/">
          <div className="destinations__thumbnail">
            <img src={category4} alt="" />
          </div>
          <div className="destinations__info">
            <strong>Malaysia</strong>
            <span>1 Hotel</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/">
          <div className="destinations__thumbnail">
            <img src={category5} alt="" />
          </div>
          <div className="destinations__info">
            <strong>Taiwan</strong>
            <span>1 Hotel</span>
          </div>
        </Link>
      </li>
    </>
  );
};

export default DestinationsItems;
