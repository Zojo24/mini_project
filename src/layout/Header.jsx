import { useEffect } from "react";
import Gnb from "./header/Gnb";
import Logo from "./header/Logo";
import Utillity from "./header/Utillity";
import "../styles/layout/header.css";

const Header = ({ subpage }) => {
  useEffect(() => {
    const header = document.querySelector(".header");

    const headerScroll = () => {
      let scroll = window.scrollY;
      if (scroll > 100 && !subpage) {
        header.style.backgroundColor = "rgba(0,0,0,1)";
      } else {
        header.style.backgroundColor = "rgba(0,0,0,0)";
      }
    };
    headerScroll();
    window.addEventListener("scroll", headerScroll);

    const cleanEvent = () => {
      window.removeEventListener("scroll", headerScroll);
      header.removeAttribute("style");
    };

    return () => {
      cleanEvent();
    };
  }, [subpage]);

  return (
    <header className={`header ${subpage ? "sub" : ""}`}>
      <Logo />
      <Gnb />
      <Utillity />
    </header>
  );
};

export default Header;
