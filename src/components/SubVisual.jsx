import React, { useEffect, useState } from "react";
import { useVisualStore } from "../store/visualStore";
import "../styles/components/subvisual.css";
import hotel from "../assets/hotel2.jpg";
import Search from "./Search";

const SubVisual = ({ path, ...props }) => {
  const { title, img } = useVisualStore();

  const [isWidth, setIsWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="sub-visual" {...props} style={{ backgroundImage: `url(${img ? img : hotel})` }}>
        <h2>{title}</h2>
        {isWidth > 1024 && <Search />}
      </div>
      {isWidth < 1024 && <Search />}
    </>
  );
};

export default SubVisual;
