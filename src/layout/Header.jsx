import { useEffect, useRef } from "react";
import Gnb from "./header/Gnb";
import Logo from "./header/Logo";
import Utillity from "./header/Utillity";
import "../styles/layout/header.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = ({ subpage }) => {
  const ref = useRef();
  useEffect(() => {
    Aos.init();
    const header = ref.current;

    const headerScroll = () => {
      let scroll = window.scrollY;
      if (scroll > 100 && !subpage) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    };
    headerScroll();
    window.addEventListener("scroll", headerScroll);

    const cleanEvent = () => {
      window.removeEventListener("scroll", headerScroll);
      header.classList.remove("active");
    };

    return () => {
      cleanEvent();
    };
  }, [subpage]);

  return (
    <header ref={ref} className={`header ${subpage ? "sub" : ""}`}>
      <Logo data-aos="fade-right" />
      <Gnb data-aos="fade-down" data-aos-delay="200" />
      <Utillity data-aos="fade-left" data-aos-delay="400" />
    </header>
  );
};

export default Header;
