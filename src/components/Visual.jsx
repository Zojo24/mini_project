import visual from "../assets/index_visual.jpg";
import "../styles/components/visual.css";

const Visual = ({ children }) => {
  return (
    <>
      <div className="visual relative z-0 h-[50rem]">
        <img src={visual} alt="" className="object-cover w-full h-full" />
        <div className="absolute left-2/4 top-1/4 translate-x-[-50%]  text-center z-50">
          <p style={{ fontFamily: "var(--eng2)" }} className="text-white text-5xl font-bold ">
            Beauty of Discover
          </p>
          <b style={{ fontFamily: "var(--eng1)" }} className="text-7xl block pt-3 text-white">
            Enjoy Your Dream
            <br />
            Vacation
          </b>
        </div>
        {children}
      </div>
    </>
  );
};

export default Visual;
