import React from "react";
import RoomPicture from "../Hotel/RoomPicture";
import { Link } from "react-router-dom";
import { digit3 } from "../../store/digit3";

const MypageReservationItems = (item) => {
  const { reservationInfos } = item;
  const { photo, hotelName, room, adult, children, start, end, totalPay } = reservationInfos[0];

  return (
    <>
      <tr className="group">
        <td>2024-03-15</td>
        <td>
          <div className="grid items-center grid-cols-[min-content_1fr] gap-1 text-left">
            <Link to="/hoteldetail">
              <RoomPicture image={photo} size={"sm"} />
            </Link>
            <Link to="/hoteldetail" className=" group-hover:text-blue-700 line-clamp-2">
              {hotelName}
            </Link>
          </div>
        </td>
        <td>{room}</td>
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
