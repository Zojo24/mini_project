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
import { RiMenu3Fill } from "react-icons/ri";
import { useSearchStore } from "../../store/searchStore";
import { useLoginStore } from "../../store/loginStore";
import useFetchHotels from "../../hooks/useFetchHotels";
import Loading2 from "../../components/Loading2";
import Toast from "../../components/Toast";
import Avatar from "../../components/Avatar";
import MobileGnb from "./MobileGnb";
import { useNavigate } from "react-router-dom";

const Utillity = ({ ...props }) => {
  const [isPopup, setIsPopup] = useState(false);
  const [isPopup2, setIsPopup2] = useState(false);
  const [isPopup3, setIsPopup3] = useState(false);
  const [isPopup4, setIsPopup4] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const { setSearchTerm, setSearchResults } = useSearchStore();
  const { isLoading, fetchHotels } = useFetchHotels();

  const navigate = useNavigate();
  const logout = useLoginStore((state) => state.logout);
  const { login, userName } = useLoginStore((state) => ({
    login: state.login,
    userName: state.userName,
  }));

  const handleLogin = () => {
    setIsPopup(true);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchHotels();
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    navigate("/");
  };

  return (
    <div className="flex items-center gap-2 justify-self-end" {...props}>
      <button
        className="btn-lightgray-circle mobile:w-8 mobile:h-8 tablet:w-10 tablet:h-10 "
        onClick={() => setIsPopup2(true)}
      >
        <CiSearch />
      </button>
      <button
        className="btn-lightgray-circle mobile:w-8 mobile:h-8 tablet:w-10 tablet:h-10"
        onClick={() => setIsPopup3(true)}
      >
        <CiShoppingCart />
      </button>
      {login ? (
        <>
          <Link
            to="/mypage"
            className="flex items-center gap-1 mr-2 avatar-name"
          >
            <Avatar
              className={"mobile:w-8 mobile:h-8 tablet:w-10 tablet:h-10"}
            />
            <div className="mobile:hidden tablet:block">
              <strong className="whitespace-nowrap">{userName}</strong>님
            </div>
          </Link>
          <button
            className="btn-blue whitespace-nowrap mobile:hidden  tablet:inline-flex  tablet:h-10 tablet:px-3"
            onClick={handleLogout}
          >
            <IoIosLogOut />
            <span className="mobile:hidden tablet:inline-block">Log Out</span>
          </button>
          <Link
            to="/hotelwrite"
            className="btn-red whitespace-nowrap mobile:w-8 mobile:px-0 tablet:w-auto tablet:inline-flex tablet:h-10 tablet:px-3"
          >
            <GoPencil />
            <span className="mobile:hidden tablet:inline-block">호텔 등록</span>
          </Link>
        </>
      ) : (
        <button
          className="btn-blue mobile:h-8 mobile:px-2 tablet:h-10 tablet:px-3"
          onClick={handleLogin}
        >
          <GoPerson />
          <span className="mobile:hidden desktop:inline-block">Log In</span>
        </button>
      )}
      <button
        className="btn-blue-outline mobile:h-8 mobile:px-2 tablet:hidden text-xl text-white"
        onClick={() => setIsPopup4(true)}
      >
        <RiMenu3Fill />
      </button>

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

      <Dialog
        className={"mobile-gnb"}
        open={isPopup4}
        close={() => setIsPopup4(false)}
      >
        <MobileGnb close={() => setIsPopup4(false)} />
      </Dialog>
    </div>
  );
};

export default Utillity;
