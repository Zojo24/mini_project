import React from "react";
import Heading from "../Heading";
import RoomPicture from "../Hotel/RoomPicture";
import room from "../../assets/hotelroom3.jpeg";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import GuestCounter from "../GuestCounter";

const MypageCart = () => {
  return (
    <>
      <div className="mypage-cart grid grid-cols-[1fr_25rem] gap-10">
        <div className="bg-white rounded-xl  p-10">
          <Heading tag={"h4"} className={"sm"} text={"장바구니"} />
          <table className="mypage-cart__table mt-5">
            <colgroup>
              <col style={{ width: "5rem" }} />
              <col style={{ width: "" }} />
              <col style={{ width: "10rem" }} />
              <col style={{ width: "10rem" }} />
            </colgroup>
            <thead>
              <tr>
                <th>삭제</th>
                <th>호텔 정보</th>
                <th>방 종류</th>
                <th>가격</th>
              </tr>
            </thead>
            <tbody>
              <tr className="group">
                <td className="self-start justify-self-end text-lg text-gray-500">
                  <button>
                    <RiDeleteBinLine />
                  </button>
                </td>
                <td>
                  <div className="grid items-center grid-cols-[min-content_1fr] gap-5 text-left">
                    <Link to="/hoteldetail">
                      <RoomPicture image={room} className="sm" />
                    </Link>
                    <div>
                      <Link to="/hoteldetail" className=" group-hover:text-blue-700 line-clamp-2 font-bold">
                        호텔명
                      </Link>
                      <div className="text-sm flex mt-2 leading-6">
                        <b className="font-semibold">예약일</b>
                        <div> : 2024-03-18 ~ 2024-03-19</div>
                      </div>
                      <div className="text-sm flex leading-6">
                        <b className="font-semibold">인원수</b>
                        <div> : 성인 1, 어린이 1</div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>디럭스</td>
                <td className="pr-3 text-right">
                  총 <b>1,000,000</b> 원
                </td>
              </tr>
              <tr className="group">
                <td className="self-start justify-self-end text-lg text-gray-500">
                  <button>
                    <RiDeleteBinLine />
                  </button>
                </td>
                <td>
                  <div className="grid items-center grid-cols-[min-content_1fr] gap-5 text-left">
                    <Link to="/hoteldetail">
                      <RoomPicture image={room} className="sm" />
                    </Link>
                    <div>
                      <Link to="/hoteldetail" className=" group-hover:text-blue-700 line-clamp-2 font-bold">
                        호텔명은 최대 2줄까지만 지원됩니다람쥐. 호텔명은 최대 2줄까지만 지원됩니다람쥐. 호텔명은 최대 2줄까지만 지원됩니다람쥐. 호텔명은 최대 2줄까지만 지원됩니다람쥐. 호텔명은 최대 2줄까지만 지원됩니다람쥐.
                      </Link>
                      <div className="text-sm flex mt-2 leading-6">
                        <b className="font-semibold">예약일</b>
                        <div> : 2024-03-18 ~ 2024-03-19</div>
                      </div>
                      <div className="text-sm flex leading-6">
                        <b className="font-semibold">인원수</b>
                        <div> : 성인 1, 어린이 1</div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>디럭스</td>
                <td className="pr-3 text-right">
                  총 <b>1,000,000</b> 원
                </td>
              </tr>
              <tr>
                <td colSpan={4} className="!py-10">
                  장바구니가 비어 있습니다.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-xl p-10 self-start">
          <Heading tag={"h4"} className={"sm"} text={"주문 요약"} />
          <div className="cart-price">
            <ul className="grid gap-2">
              <li>
                <span>보유 금액</span>
                <span>
                  1,000,000 <i className="text-sm">원</i>
                </span>
              </li>
              <li className="font-bold">
                <span>총 결재 금액</span>
                <span className="text-lg">
                  1,000,000 <i className="text-sm">원</i>
                </span>
              </li>
            </ul>
            <div className="grid pt-5">
              <Link to="/reservation" className="btn-blue xl !font-normal">
                결재하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MypageCart;
