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
            <strong>Thailand</strong>
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
            <strong>Vietnam</strong>
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
            <strong>Philippines</strong>
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
            <strong>Malaysia</strong>
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
            <strong>Taiwan</strong>
            <span>1 Hotel</span>
          </div>
        </Link>
      </li>
    </>
  );
};

export default DestinationsItems;
