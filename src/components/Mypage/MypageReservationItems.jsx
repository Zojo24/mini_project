import React from "react";
import RoomPicture from "../Hotel/RoomPicture";
import { Link } from "react-router-dom";
import { digit3 } from "../../store/digit3";

const MypageReservationItems = ({ items }) => {
  const item = items.paymentInfos[0];
  const { file, hotel_name, type, adult_count, child_count, check_in, check_out, total_price } = item;

  return (
    <>
      <tr className="group mobile:!grid-cols-1">
        <td className="mobile:before:content-['예약일'] tablet:before:hidden mobile:!grid tablet:!table-cell mobile:grid-cols-[6rem_1fr] mobile:before:font-bold">
          2024-03-15
        </td>
        <td className="mobile:before:content-['호텔정보'] tablet:before:hidden mobile:!grid tablet:!table-cell mobile:grid-cols-[6rem_1fr] mobile:before:font-bold">
          <div className="grid items-center grid-cols-[min-content_1fr] gap-1 text-left">
            <Link to="/hoteldetail">
              <RoomPicture image={file} size={"sm"} />
            </Link>
            <Link to="/hoteldetail" className=" group-hover:text-blue-700 line-clamp-2">
              {hotel_name}
            </Link>
          </div>
        </td>
        <td className="mobile:before:content-['룸정보'] tablet:before:hidden mobile:!grid tablet:!table-cell mobile:grid-cols-[6rem_1fr] mobile:before:font-bold">
          {type}
        </td>
        <td className="mobile:before:content-['성인'] tablet:before:hidden mobile:!grid tablet:!table-cell mobile:grid-cols-[6rem_1fr] mobile:before:font-bold">
          {adult_count}
        </td>
        <td className="mobile:before:content-['어린이'] tablet:before:hidden mobile:!grid tablet:!table-cell mobile:grid-cols-[6rem_1fr] mobile:before:font-bold">
          {child_count}
        </td>
        <td className="mobile:before:content-['체크인/아웃'] tablet:before:hidden mobile:!grid tablet:!table-cell mobile:grid-cols-[6rem_1fr] mobile:before:font-bold">
          {check_in} ~ {check_out}
        </td>
        <td className="mobile:before:content-['총_금액'] tablet:before:hidden text-right mobile:!grid tablet:!table-cell mobile:grid-cols-[6rem_1fr] mobile:before:font-bold">
          <span>
            <b>{digit3(total_price)}</b> 원
          </span>
        </td>
      </tr>
    </>
  );
};

export default MypageReservationItems;
