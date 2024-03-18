import React, { useEffect } from "react";
import { useVisualStore } from "../store/visualStore";

const HotelWrite = () => {
  const { setTitle } = useVisualStore();

  useEffect(() => {
    setTitle("호텔 등록");
  }, [setTitle]);
  return (
    <div className="main">
      <div className="container">호텔등록</div>
    </div>
  );
};

export default HotelWrite;
