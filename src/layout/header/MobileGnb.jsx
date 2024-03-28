import React from "react";
import "../../styles/components/mobile-gnb.css";
import { Link } from "react-router-dom";

const MobileGnb = ({ close }) => {
  return (
    <nav className="w-full h-screen text-center text-white">
      <ul className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
        <li>
          <Link to="/hotel" onClick={close}>
            Hotels
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={close}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={close}>
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileGnb;
