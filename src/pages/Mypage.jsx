import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import MypageAccount from "../components/Mypage/MypageAccount";
import { useVisualStore } from "../store/visualStore";
import MypageFavorite from "../components/Mypage/MypageFavorite";
import MypageCart from "../components/Mypage/MypageCart";
import MypageReservation from "../components/Mypage/MypageReservation";
import subvisual from "../assets/subvisual4.jpg";
import MypageAllReservation from "../components/Mypage/MypageAllReservation";
import { useLoginStore } from "../store/loginStore";
import { Link } from "react-router-dom";

const Mypage = () => {
  const { setTitle } = useVisualStore();
  const { userRole } = useLoginStore();

  useEffect(() => {
    setTitle("My Page", subvisual);
  }, [setTitle]);

  const getCurrentTab = () => {
    const path = location.pathname;
    if (path === "/mypage/account") return "account";
    if (path === "/mypage/favorite") return "favorite";
    if (path === "/mypage/cart") return "cart";
    if (path === "/mypage/reservation") return "reservation";
    if (path === "/mypage/allReservation") return "allReservation";
    return "account";
  };
  const [currentTab, setCurrentTab] = useState(getCurrentTab());

  return (
    <div className="main bg-gray-100">
      <div className="container mypage pt-10 pb-20">
        <Heading tag={"h3"} text={"마이 페이지"} className={"xl"} />
        <nav>
          <ul className="tab">
            <li>
              <Link
                to="/mypage/personal"
                className={currentTab === "account" ? "--active" : ""}
                onClick={() => setCurrentTab("account")}
              >
                개인정보
              </Link>
            </li>
            <li>
              <Link
                to="/mypage/hotel"
                className={currentTab === "favorite" ? "--active" : ""}
                onClick={() => setCurrentTab("favorite")}
              >
                즐겨찾는 숙소
              </Link>
            </li>
            <li>
              <Link
                to="/mypage/cart"
                className={currentTab === "cart" ? "--active" : ""}
                onClick={() => setCurrentTab("cart")}
              >
                장바구니
              </Link>
            </li>
            <li>
              <Link
                to="/mypage/reservation"
                className={currentTab === "reservation" ? "--active" : ""}
                onClick={() => setCurrentTab("reservation")}
              >
                나의 예약내역
              </Link>
            </li>
            {!userRole === "USER" && (
              <li>
                <Link
                  to="/mypage/all-reservation"
                  className={currentTab === "allReservation" ? "--active" : ""}
                  onClick={() => setCurrentTab("allReservation")}
                >
                  회원 예약 신청내역
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="mt-10">
          {currentTab === "account" && <MypageAccount />}
          {currentTab === "favorite" && <MypageFavorite />}
          {currentTab === "cart" && <MypageCart />}
          {currentTab === "reservation" && <MypageReservation />}
          {currentTab === "allReservation" && <MypageAllReservation />}
        </div>
      </div>
    </div>
  );
};

export default Mypage;
