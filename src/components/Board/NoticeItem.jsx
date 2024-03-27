import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import Input from "../Input";

const NoticeItem = ({ index, item, activeIndex, setActiveIndex, onDelete, ...props }) => {
  const [editedTitle, setEditedTitle] = useState(item.title); // 수정된 제목을 저장할 상태
  const [editedDescription, setEditedDescription] = useState(item.description); // 수정된 내용을 저장할 상태
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부를 나타내는 상태

  const handleItem = (index) => {
    // 수정 중일 때는 토글이 닫히지 않도록 변경
    if (isEditing && index === activeIndex) return;
    setActiveIndex(index === activeIndex ? null : index);
  };
  

  const handleEdit = () => {
    setIsEditing(true); // 수정 모드로 변경
  };

  const handleSave = () => {
    console.log("수정된 제목:", editedTitle);
    console.log("수정된 내용:", editedDescription);

    // 수정 상태와 내용 초기화, 읽기 모드로 변경
    setIsEditing(false);
    item.title = editedTitle;
    item.description = editedDescription;
  };

  const handleCancel = () => {
    // 수정 취소 시 수정 상태를 해제하고 원래 내용으로 롤백
    setIsEditing(false);
    setEditedTitle(item.title); // 수정된 제목 초기화
    setEditedDescription(item.description);
  };

  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <li {...props}>
      <button onClick={() => handleItem(index)} className={index === activeIndex ? "active" : ""}>
        {isEditing ? (
          <textarea value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} 
          className="h-[30px] w-full bg-gray-100 rounded-md" />
        ) : (
          // 읽기 전용 모드에서는 공지사항 제목을 표시
          item.title
        )}
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
          {isEditing ? (
            // 수정 모드에서는 입력 폼을 렌더링하고, 저장 및 취소 버튼을 표시
            <div>
              <textarea value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} 
              className="h-[100px] w-full bg-gray-100 rounded-md" />
              <div className="flex justify-end gap-2">
                <button className="btn-green-label sm" onClick={handleSave}>저장</button>
                <button className="btn-gray-label sm" onClick={handleCancel}>취소</button>
              </div>
            </div>
          ) : (
            // 읽기 전용 모드에서는 공지사항 내용을 표시하고, 수정 버튼을 표시
            <div>
              {item.description}
              <div className="flex justify-end gap-2">
                <button className="btn-blue-label sm" onClick={handleEdit}>수정</button>
                <button className="btn-red-label sm" onClick={handleDelete}>삭제</button>
              </div>
            </div>
          )}
        </div>
      )}
    </li>
  );
};

export default NoticeItem;
