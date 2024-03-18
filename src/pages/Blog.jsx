import React, { useEffect } from "react";
import { useVisualStore } from "../store/visualStore";
import Heading from "../components/Heading";

const Blog = () => {
  const { setTitle } = useVisualStore();

  useEffect(() => {
    setTitle("Blog");
  }, [setTitle]);

  return (
    <>
      <div className="main">
        <div className="container my-10">
          <Heading tag={"h3"} text={"Trip Hotel Blog"} className={"xl"} />
        </div>
      </div>
    </>
  );
};

export default Blog;
