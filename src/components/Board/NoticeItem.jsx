import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

const NoticeItem = ({ index, item, activeIndex, setActiveIndex, ...props }) => {
  const handleItem = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const { title, description } = item;

  return (
    <li {...props}>
      <button onClick={() => handleItem(index)} className={index === activeIndex ? "active" : ""}>
        {title}
        {index === activeIndex ? (
          <span>
            <LuMinus />
          </span>
        ) : (
          <span>
            <LuPlus />
          </span>
        )}
      </button>
      {index === activeIndex && (
        <div>
          {description}
          <div className="flex justify-end gap-2">
            <button className="btn-blue-label sm">수정</button>
            <button className="btn-red-label sm">삭제</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default NoticeItem;
