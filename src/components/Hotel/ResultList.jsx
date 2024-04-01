import React, { useEffect, useState } from "react";
import ResultListItems from "./ResultListItems";
import "../../styles/components/hotel.css";

const ResultList = ({ modify, className, ...props }) => {
  return (
    <>
      <ul className={`hotel ${className}`} {...props}>
        <ResultListItems modify={modify} />
      </ul>
    </>
  );
};

export default ResultList;
