import React, { useEffect } from "react";
import Heading from "../components/Heading";
import { useVisualStore } from "../store/visualStore";
// import subvisual from "../assets/subvisual1.jpg";

const ContactUs = () => {
  const { setTitle } = useVisualStore();

  useEffect(() => {
    setTitle("Contact Us");
  }, [setTitle]);
  return (
    <>
      <div className="main">
        <div className="container my-10">contact</div>
      </div>
    </>
  );
};

export default ContactUs;
