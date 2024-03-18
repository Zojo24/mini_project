import React from "react";

const HotelGallery = ({ className, pictures, ...props }) => {
  return (
    <div className={"hotel-gallery " + className} {...props}>
      {pictures.map((picture, index) => (
        <div key={index}>
          <img src={picture.src} alt="" />
        </div>
      ))}
    </div>
  );
};

export default HotelGallery;
