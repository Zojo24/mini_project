import { GoPerson } from "react-icons/go";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import Login from "../../pages/Login";
import { useState } from "react";
import SearchPopup from "../../components/SearchPopup";
import Cart from "../../components/Reservation/Cart";
import Dialog from "../../components/Dialog";
import { GoPencil } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import Avatar from "../../components/Avatar";

const Utillity = ({ ...props }) => {
  const [isPopup, setIsPopup] = useState(false);
  const [isPopup2, setIsPopup2] = useState(false);
  const [isPopup3, setIsPopup3] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsPopup(true);
    setIsLogin(true);
  };

  return (
    <div className="flex items-center gap-2 justify-self-end" {...props}>
      <button className="btn-lightgray-circle" onClick={() => setIsPopup2(true)}>
        <CiSearch />
      </button>
      <button className="btn-lightgray-circle" onClick={() => setIsPopup3(true)}>
        <CiShoppingCart />
      </button>
      {isLogin ? (
        <>
          <Link to="/mypage" className="flex items-center gap-1 mr-2 avatar-name">
            <Avatar className={"!w-10 !h-10"} /> <strong className="whitespace-nowrap">하하하</strong>님
          </Link>
          <button
            className="btn-blue whitespace-nowrap mobile:hidden  tablet:inline-flex  tablet:h-10 tablet:px-3"
            onClick={() => setIsLogin(false)}
          >
            <IoIosLogOut />
            <span className="mobile:hidden tablet:inline-block">Log Out</span>
          </button>
          <Link
            to="/hotelwrite"
            className="btn-red whitespace-nowrap  mobile:hidden tablet:inline-flex tablet:h-10 tablet:px-3"
          >
            <GoPencil />
            <span className="mobile:hidden tablet:inline-block">호텔 등록</span>
          </Link>
        </>
      ) : (
        <button className="btn-blue mobile:h-10 mobile:px-3" onClick={handleLogin}>
          <GoPerson />
          <span className="mobile:hidden desktop:inline-block">Log In</span>
        </button>
      )}

      <Dialog open={isPopup} close={() => setIsPopup(false)}>
        <Login close={() => setIsPopup(false)} />
      </Dialog>
      <SearchPopup open={isPopup2} close={() => setIsPopup2(false)} />

      <Dialog className={"cart"} open={isPopup3} close={() => setIsPopup3(false)}>
        <Cart close={() => setIsPopup3(false)} />
      </Dialog>
    </div>
  );
};

export default Utillity;
