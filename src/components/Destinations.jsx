import React from "react";
import DestinationsItems from "./DestinationsItems";
import "../styles/components/destinations.css";

const Destinations = ({ className, ...props }) => {
  return (
    <>
      <ul className={"destinations " + className} {...props}>
        <DestinationsItems />
      </ul>
    </>
  );
};

export default Destinations;
