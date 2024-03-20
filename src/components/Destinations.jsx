import React from "react";
import DestinationsItems from "./DestinationsItems";
import "../styles/components/destinations.css";

const Destinations = ({ className }) => {
  return (
    <>
      <ul className={"destinations " + className}>
        <DestinationsItems />
      </ul>
    </>
  );
};

export default Destinations;
