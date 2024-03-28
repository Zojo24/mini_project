import React, { useEffect } from "react";
import Heading from "../components/Heading";
import { useVisualStore } from "../store/visualStore";
// import subvisual from "../assets/subvisual1.jpg";
import MemberItems from "../components/MemberItems";
import { membersData } from "../store/member";

const About = () => {
  const { setTitle } = useVisualStore();

  useEffect(() => {
    setTitle("About Us");
  }, [setTitle]);
  return (
    <>
      <div className="main">
        <div className="container my-10">
          <Heading tag={"h3"} text={"Project Member"} className={"xl"} />
          <ul className="grid mobile:grid-cols-1 tablet:grid-cols-4 gap-10">
            {membersData.map((member, index) => (
              <MemberItems key={index} member={member} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
