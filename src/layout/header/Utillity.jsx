import { GoPerson } from "react-icons/go";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import Login from "../../pages/Login";
import { useState } from "react";
import SearchPopup from "../../components/SearchPopup";
import Cart from "../../components/Reservation/Cart";
import Dialog from "../../components/Dialog";

const Utillity = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [isPopup2, setIsPopup2] = useState(false);
  const [isPopup3, setIsPopup3] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <button className="btn-lightgray-circle" onClick={() => setIsPopup2(true)}>
        <CiSearch />
      </button>
      <button className="btn-lightgray-circle" onClick={() => setIsPopup3(true)}>
        <CiShoppingCart />
      </button>
      <button className="btn-blue" onClick={() => setIsPopup(true)}>
        <GoPerson />
        Log In
      </button>
      <Login open={isPopup} close={() => setIsPopup(false)} />
      <SearchPopup open={isPopup2} close={() => setIsPopup2(false)} />

      <Dialog className={"cart"} open={isPopup3} close={() => setIsPopup3(false)}>
        <Cart close={() => setIsPopup3(false)} />
      </Dialog>

      {/* Cart 컴퍼넌트밖에 dialog 하고 그안에 Cart컴퍼넌트 넣어보기 */}
    </div>
  );
};

export default Utillity;
