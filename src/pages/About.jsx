import React, { useEffect } from "react";
import Heading from "../components/Heading";
import { useVisualStore } from "../store/visualStore";

const About = () => {
  const { setTitle } = useVisualStore();

  useEffect(() => {
    setTitle("About Us");
  }, [setTitle]);
  return (
    <>
      <div className="main">
        <div className="container my-10">
          <Heading tag={"h3"} text={"Trip Hotel"} className={"xl"} />
        </div>
      </div>
    </>
  );
};

export default About;
