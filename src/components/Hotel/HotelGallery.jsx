import React, { useEffect, useRef, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const HotelGallery = ({ className, pictures, ...props }) => {
  const [isWidth, setIsWidth] = useState(window.innerWidth);
  const [scrollX, setScrollX] = useState(0);
  const ref = useRef();

  const width = isWidth - 40;
  const handleX = (px) => {
    const newScrollX = scrollX + px;
    if (newScrollX < 0) {
      ref.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setScrollX(0);
    } else {
      ref.current.scrollTo({
        top: 0,
        left: scrollX + px,
        behavor: "smooth",
      });
      setScrollX(scrollX + px);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="mobile:relative">
      <div className={"hotel-gallery " + className} {...props} ref={ref}>
        {pictures.map((picture, index) => (
          <div key={index}>
            <img src={picture.src} alt="" />
          </div>
        ))}
      </div>
      {isWidth && (
        <>
          <button
            className="mobile:flex items-center tablet:hidden mobile:absolute mobile:left-0 mobile:top-0 mobile:w-2/4 mobile:h-full text-left text-white indent-5 text-3xl"
            onClick={() => handleX(-width)}
          >
            <MdArrowBackIosNew />
          </button>
          <button
            className="mobile:block tablet:hidden mobile:absolute mobile:right-0 mobile:top-0 mobile:w-2/4 mobile:h-full text-right text-white pr-5 text-3xl"
            onClick={() => handleX(width)}
          >
            <MdArrowForwardIos className="mobile:inline-block" />
          </button>
        </>
      )}
    </div>
  );
};

export default HotelGallery;
