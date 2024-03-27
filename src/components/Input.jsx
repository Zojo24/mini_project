import React, { useState } from "react";

const cut3Digit = /\B(?=(\d{3})+(?!\d))/g;
const allowedFileTypes = ["image/jpeg", "image/png", "image/webp"];

const Input = ({ type, className, onChange, price, value, ...props }) => {
  const [isNumber, setIsNumber] = useState("");
  const [isValue, setIsValue] = useState(value || "");
  const [isToast, setIsToast] = useState(false);
  const [isFile, setIsFile] = useState("");

  const formatPrice = (value) => {
    return value.replace(cut3Digit, ",");
  };

  // 가격
  const handleChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    const formattedPrice = formatPrice(inputValue);

    setIsNumber(formattedPrice);
    onChange(e.target.value);
    // 리턴할때에는 , 없이 해야하고, 가지고 올때에는 ,있게 가지고 와야한다.
  };

  // 첨부파일
  const handleFileChange = (e) => {
    const { files } = e.target;
    const filename = files[0].name;
    if (files[0]) {
      if (!allowedFileTypes.includes(files[0].type)) {
        setIsToast(true);
        setIsFile("");
        return;
      }

      setIsFile(filename);
      onChange(files[0]);
      // 스트림 or img
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
        <textarea rows={10} className={"textarea " + className} value={value} onChange={handleonChange}></textarea>
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
          onChange={handleFileChange}
          className={`input ${className}`}
          accept=".jpg,.jpeg,.png,.webp"
        />
      ) : (
        <input type={type} {...props} value={value} onChange={handleonChange} className={`input ${className}`} />
      )}
      {/* <Toast color={"red"} onOpen={isToast} onClose={() => setIsToast(!isToast)}>
        올바른 파일 형식이 아닙니다. jpg, png, webp 등 이미지만 허용됩니다.
      </Toast> */}
    </>
  );
};

export default Input;
