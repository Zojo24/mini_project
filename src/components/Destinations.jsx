import React from "react";
import DestinationsItems from "./DestinationsItems";
import "../styles/components/destinations.css";

const Destinations = () => {
  return (
    <>
      <ul className="destinations">
        <DestinationsItems />
      </ul>
    </>
  );
};

export default Destinations;
