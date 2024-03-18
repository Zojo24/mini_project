import React from "react";
import { Link } from "react-router-dom";
import pili from "../assets/img_destination1.webp";

const DestinationsItems = () => {
  return (
    <>
      <li>
        <Link to="/">
          <div className="destinations__thumbnail">
            <img src={pili} alt="" />
          </div>
          <div className="destinations__info">
            <strong>필리핀</strong>
            <span>1 Hotel</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/">
          <div className="destinations__thumbnail">
            <img src={pili} alt="" />
          </div>
          <div className="destinations__info">
            <strong>필리핀</strong>
            <span>1 Hotel</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/">
          <div className="destinations__thumbnail">
            <img src={pili} alt="" />
          </div>
          <div className="destinations__info">
            <strong>필리핀</strong>
            <span>1 Hotel</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/">
          <div className="destinations__thumbnail">
            <img src={pili} alt="" />
          </div>
          <div className="destinations__info">
            <strong>필리핀</strong>
            <span>1 Hotel</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/">
          <div className="destinations__thumbnail">
            <img src={pili} alt="" />
          </div>
          <div className="destinations__info">
            <strong>필리핀</strong>
            <span>1 Hotel</span>
          </div>
        </Link>
      </li>
    </>
  );
};

export default DestinationsItems;
