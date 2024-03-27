import React from "react";
import RoomPicture from "../Hotel/RoomPicture";
import { Link } from "react-router-dom";
import { digit3 } from "../../store/digit3";

const MypageAllReservationItems = ({ items }) => {
  const item = items.paymentInfos[0];
  const { file, hotel_name, type, adult_count, child_count, check_in, check_out, total_price } = item;
  const { name } = items;

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
        <td>{name}</td>
        <td>{type}</td>
        <td>{adult_count}</td>
        <td>{child_count}</td>
        <td>
          {check_in} ~ {check_out}
        </td>
        <td className="text-right">
          <b>{digit3(total_price)} 원</b>
        </td>
      </tr>
    </>
  );
};

export default MypageAllReservationItems;
