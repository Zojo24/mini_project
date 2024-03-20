import React from "react";
import { useVisualStore } from "../store/visualStore";
import "../styles/components/subvisual.css";
import hotel from "../assets/hotel2.jpg";
import Search from "./Search";

const SubVisual = ({ path, ...props }) => {
  const { title, img } = useVisualStore();

  return (
    <div className="sub-visual" {...props} style={{ backgroundImage: `url(${img ? img : hotel})` }}>
      <h2>{title}</h2>
      <Search />
    </div>
  );
};

export default SubVisual;
