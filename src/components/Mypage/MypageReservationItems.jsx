import React from "react";
import RoomPicture from "../Hotel/RoomPicture";
import { Link } from "react-router-dom";
import { digit3 } from "../../store/digit3";

const MypageReservationItems = (item) => {
  const { paymentInfos } = item;
  const { file, hotel_name, type, adult, children, start, end, totalPay } = paymentInfos[0];

  return (
    <>
      <tr className="group">
        <td>2024-03-15</td>
        <td>
          <div className="grid items-center grid-cols-[min-content_1fr] gap-1 text-left">
            <Link to="/hoteldetail">
              <RoomPicture image={file} size={"sm"} />
            </Link>
            <Link to="/hoteldetail" className=" group-hover:text-blue-700 line-clamp-2">
              {hotel_name}
            </Link>
          </div>
        </td>
        <td>{type}</td>
        <td>{adult}</td>
        <td>{children}</td>
        <td>
          {start} ~ {end}
        </td>
        <td className="text-right">
          <b>{digit3(totalPay)}</b>
        </td>
      </tr>
    </>
  );
};

export default MypageReservationItems;
