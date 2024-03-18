import React, { useState } from "react";
import NoticeItem from "./NoticeItem";
import "../../styles/components/board.css";

const noticeItems = [
  {
    title: "공지사항 제목입니다.1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis, libero itaque excepturi nesciunt harum quasi, voluptas blanditiis ex error ratione adipisci deleniti similique ducimus veniam incidunt suscipit aperiam voluptatum.",
  },
  {
    title: "공지사항 제목입니다.2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis, libero itaque excepturi nesciunt harum quasi, voluptas blanditiis ex error ratione adipisci deleniti similique ducimus veniam incidunt suscipit aperiam voluptatum.",
  },
  {
    title: "공지사항 제목입니다.3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis, libero itaque excepturi nesciunt harum quasi, voluptas blanditiis ex error ratione adipisci deleniti similique ducimus veniam incidunt suscipit aperiam voluptatum.",
  },
  {
    title: "공지사항 제목입니다.4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis, libero itaque excepturi nesciunt harum quasi, voluptas blanditiis ex error ratione adipisci deleniti similique ducimus veniam incidunt suscipit aperiam voluptatum.",
  },
];

const Notice = ({ className, ...props }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <ul className={`notice-list ${className}`}>
        {noticeItems.map((item, index) => (
          <NoticeItem key={index} item={item} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        ))}
      </ul>
    </div>
  );
};

export default Notice;
