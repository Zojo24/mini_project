import React from "react";
import Input from "../Input";

const NoticeWrite = ({ className, ...props }) => {
  return (
    <form>
      <div className={`notice-write ${className}`}>
        <div>
          제목
          <Input type={"text"} />
        </div>
        <div>
          내용
          <Input type={"textarea"} />
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        <button className="btn-blue">작성</button>
        <button className="btn-gray">취소</button>
      </div>
    </form>
  );
};

export default NoticeWrite;
