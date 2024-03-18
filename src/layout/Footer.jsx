import Logo from "./header/Logo";
import { ImFacebook } from "react-icons/im";
import { ImPinterest2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/layout/footer.css";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <>
      <div className="footer px-24 bg-gray-950 pt-24 pb-16 grid grid-cols-2">
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
        <div className="sns text-white self-end justify-self-end">
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
      <div className="px-24 py-7 text-gray-300 col-span-2 bg-black flex justify-between">
        <div>&copy; {thisYear} triphotel. All Rights Reserved by FEBE Team4</div>
        <div className="flex gap-5">
          <Link to="/styleguide" className="w-auto h-auto text-white">
            StyleGuide
          </Link>
          <Link to="/" className="w-auto h-auto text-white">
            Github
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
