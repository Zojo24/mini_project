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
import Toast from "../../components/Toast";
import Loading2 from "../../components/Loading";
import { useSearchStore } from "../../store/searchStore";
import useFetchHotels from "../../hooks/useFetchHotels";

const Utillity = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [isPopup2, setIsPopup2] = useState(false);
  const [isPopup3, setIsPopup3] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const { setSearchTerm, setSearchResults } = useSearchStore();
  const { isLoading, fetchHotels } = useFetchHotels();

  const handleLogin = () => {
    setIsPopup(true);
    setIsLogin(true);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchHotels();
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="btn-lightgray-circle"
        onClick={() => setIsPopup2(true)}
      >
        <CiSearch />
      </button>
      <button
        className="btn-lightgray-circle"
        onClick={() => setIsPopup3(true)}
      >
        <CiShoppingCart />
      </button>
      {isLogin ? (
        <>
          <Link to="/mypage" className="flex items-center gap-1 mr-2">
            <Avatar className={"!w-10 !h-10"} /> <strong>하하하</strong>님
          </Link>
          <button className="btn-blue" onClick={() => setIsLogin(false)}>
            <IoIosLogOut />
            Log Out
          </button>
          <Link to="/hotelwrite" className="btn-red">
            <GoPencil />
            호텔 등록
          </Link>
        </>
      ) : (
        <button className="btn-blue" onClick={handleLogin}>
          <GoPerson />
          Log In
        </button>
      )}

      <Dialog open={isPopup} close={() => setIsPopup(false)}>
        <Login close={() => setIsPopup(false)} />
      </Dialog>
      <SearchPopup
        open={isPopup2}
        close={() => setIsPopup2(false)}
        onSearch={handleSearch}
      />
      {isLoading && <Loading2 />}
      <Toast onOpen={showToast} onClose={setShowToast} color="red">
        {error}
      </Toast>
      <Dialog
        className={"cart"}
        open={isPopup3}
        close={() => setIsPopup3(false)}
      >
        <Cart close={() => setIsPopup3(false)} />
      </Dialog>
    </div>
  );
};

export default Utillity;
