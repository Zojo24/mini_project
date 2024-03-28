import Logo from "./header/Logo";
import { ImFacebook } from "react-icons/im";
import { ImPinterest2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/layout/footer.css";
import Dialog from "../components/Dialog";
import ReservationRule from "../components/ReservationRule";
import { useState } from "react";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  const [isRule, setIsRule] = useState(false);

  const handleRule = (e) => {
    e.preventDefault();
    setIsRule(true);
  };

  return (
    <>
      <div className="footer mobile:px-10 tablet:px-24 bg-gray-950 mobile:pt-10 tablet:pt-24 mobile:pb-10 tablet:pb-16 grid mobile:grid-cols-1 tablet:grid-cols-2">
        <div className="grid gap-5 text-gray-300 justify-self-start">
          <Logo />
          <div>
            Korea -- <br />
            95, Jeongjail-ro, Bundang-gu, Seongnam-si, Gyeonggi-do
          </div>
          <span className=" font-light">triphotel@triphotel.com</span>
          <div className="flex items-center gap-2">
            <BsFillTelephoneFill />
            <span className=" text-xl ">+820212341234</span>
          </div>
        </div>
        <div className="sns text-white self-end mobile:justify-self-start tablet:justify-self-end mobile:mt-5 tablet:mt-0">
          <Link to="/" className="bg-blue-900">
            <ImFacebook />
          </Link>
          <Link to="/" className="bg-gray-800">
            <RiTwitterXFill />
          </Link>
          <Link to="/" className="bg-red-800">
            <ImPinterest2 />
          </Link>
          <Link to="/" className="bg-pink-700">
            <SiInstagram />
          </Link>
        </div>
      </div>
      <div className=" mobile:px-10 tablet:px-24 py-7 text-gray-300 col-span-2 bg-black mobile:block tablet:flex justify-between">
        <div className="mobile:text-sm mobile:mb-4 tablet:mb-0 tablet:text-base">
          &copy; {thisYear} triphotel. All Rights Reserved by FEBE Team4
        </div>
        <div className="flex gap-5">
          <button onClick={handleRule} className="w-auto h-auto text-white">
            개인정보이용약관
          </button>
          <Link to="/styleguide" className="w-auto h-auto text-white">
            StyleGuide
          </Link>
          <Link to="/" className="w-auto h-auto text-white">
            Github
          </Link>
        </div>
      </div>
      <Dialog open={isRule} close={() => setIsRule(false)}>
        <ReservationRule />
      </Dialog>
    </>
  );
};

export default Footer;
