import React from "react";
import Badge from "../components/Badge";
import { RiTwitterXLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MemberItems = ({ member }) => {
  const { name, picture, position, sns } = member;
  return (
    <li className="group">
      <div className="rounded-xl overflow-hidden">
        <img
          src={picture}
          alt=""
          className="w-full h-full group-hover:scale-110 transition-all duration-500 "
        />
      </div>
      <div className="flex flex-col -mt-10 mx-5 bg-white shadow-lg relative z-20 rounded-lg p-5 text-center gap-3">
        <strong className="text-xl font-black">{name}</strong>
        <div className="flex flex-wrap gap-1">
          {position.map((item, index) => (
            <Badge color={"blue"} key={index}>
              {item.title}
            </Badge>
          ))}
        </div>
        <div className="flex mx-auto gap-3 text-gray-400">
          <a
            href={sns[0].link}
            className="hover:text-blue-950 p-1 text-lg transition-colors duration-500"
          >
            <RiFacebookFill />
          </a>
          <a
            href={sns[1].link}
            className="hover:text-gray-800 p-1 text-lg transition-colors duration-500"
          >
            <RiTwitterXLine />
          </a>
          <a
            href={sns[2].link}
            className="hover:text-blue-600 p-1 text-lg transition-colors duration-500"
          >
            <RiLinkedinFill />
          </a>
          <a
            href={sns[3].link}
            className="hover:text-pink-600 p-1 text-lg transition-colors duration-500"
          >
            <RiInstagramLine />
          </a>
        </div>
      </div>
    </li>
  );
};

export default MemberItems;
