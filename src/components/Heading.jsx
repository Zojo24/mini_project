import React from "react";
import "../styles/components/heading.css";

const Heading = ({ tag, text, className, ...props }) => {
  const HeadingName = tag;
  return (
    <HeadingName className={`heading ${className}`} {...props}>
      {text}
    </HeadingName>
  );
};

export default Heading;
