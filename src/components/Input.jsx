import React, { useState } from "react";
import Toast from "./Toast";

const Input = ({ type, className, onChange, price, value, ...props }) => {
  const [isNumber, setIsNumber] = useState("");
  const [isValue, setIsValue] = useState(value || "");
  const [isToast, setIsToast] = useState(false);
  const [isFile, setIsFile] = useState(null);

  const formatPrice = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // 가격
  const handleChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    const formattedPrice = formatPrice(inputValue);

    setIsNumber(formattedPrice);

    if (!price) onChange(e.target.value);
    // 리턴할때에는 , 없이 해야하고, 가지고 올때에는 ,있게 가지고 와야한다.
  };

  // 첨부파일
  const allowedFileTypes = ["image/jpeg", "image/png", "image/webp"];

  const handleFileChange = (e) => {
    const { files } = e.target;
    console.log(files);
    if (files) {
      if (!allowedFileTypes.includes(files.type)) {
        console.log("error");
        setIsToast(true);
        setIsFile(null);
        return;
      }
      setIsFile(files);
      onChange(files);
    }
  };

  // 그외 모든 input
  const handleonChange = (e) => {
    setIsValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <>
      {type === "textarea" ? (
        <textarea rows={10} className="textarea" value={value} onChange={onChange}></textarea>
      ) : price ? (
        <input
          type={type}
          onChange={handleChange}
          className={`input text-right ${className}`}
          value={isNumber}
          {...props}
        />
      ) : type === "file" ? (
        <input
          type={type}
          {...props}
          value={isFile}
          onChange={handleFileChange}
          className={`input ${className}`}
          accept=".jpg,.jpeg,.png,.webp"
        />
      ) : (
        <input
          type={type}
          {...props}
          value={""}
          onChange={handleonChange}
          className={`input ${className}`}
        />
      )}
      <Toast color={"red"} onOpen={isToast} onClose={() => setIsToast(!isToast)}>
        올바른 파일 형식이 아닙니다. jpg, png, webp 등 이미지만 허용됩니다.
      </Toast>
    </>
  );
};

export default Input;
