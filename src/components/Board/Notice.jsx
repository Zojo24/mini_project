import React, { useState } from "react";
import NoticeItem from "./NoticeItem";
import "../../styles/components/board.css";

const Notice = ({ className, ...props }) => {
  const [noticeItems, setNoticeItems] = useState([
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
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  // 공지사항 삭제 함수
  const deleteNotice = (index) => {
    const updatedNoticeItems = [...noticeItems];
    updatedNoticeItems.splice(index, 1);
    setNoticeItems(updatedNoticeItems);
    setActiveIndex(null); // 삭제 후 활성화된 인덱스 초기화
  };

  return (
    <div>
      <ul className={`notice-list ${className}`}>
        {noticeItems.map((item, index) => (
          <NoticeItem
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            onDelete={deleteNotice} // 삭제 함수 전달
          />
        ))}
      </ul>
    </div>
  );
};

export default Notice;
