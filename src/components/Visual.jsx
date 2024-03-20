import visual from "../assets/index_visual.jpg";
import video from "../assets/visual.mp4";
import "../styles/components/visual.css";

const Visual = ({ children }) => {
  return (
    <>
      <div className="visual relative z-0 h-[50rem]">
        <div className="youtube">
          <iframe
            src="https://www.youtube.com/embed/7lWf6qpHvlw?controls=0&autoplay=1&loop=1&mute=1&playlist=7lWf6qpHvlw"
            title="BoraBora"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        {/* <video src={video} muted loop autoPlay className="object-cover w-full h-full"></video> */}
        {/* <img src={visual} alt="" className="object-cover w-full h-full" /> */}
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
