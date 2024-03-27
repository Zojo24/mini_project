import React, { useEffect } from "react";
import { useVisualStore } from "../store/visualStore";
import { RiTwitterXLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import logo from "../assets/logo.svg";
const ContactUs = () => {
  const { setTitle } = useVisualStore();

  useEffect(() => {
    setTitle("Contact Us");
  }, [setTitle]);

  const containerStyle = {
    width: "100%",
    height: "40rem",
  };

  const center = {
    lat: 37.525,
    lng: 126.9259,
  };
  return (
    <>
      <div className="main">
        <div className="container mt-10 mb-28 grid gap-14 grid-cols-2">
          <div className="bg-black/5"></div>
          <div className="grid gap-5">
            <div className="flex gap-2 items-center text-2xl">
              <div className="text-white text-2xl logo">
                <div className="inline-flex items-center gap-2 gap">
                  <svg
                    viewBox="174.976 195.83 54.457 40.843"
                    width="54.457"
                    height="40.843"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#1d4ed8"
                      d="M 229.411 200.538 L 223.603 208.025 L 225.821 214.444 L 229.411 200.538 Z"
                      transform="matrix(1, 0, 0, 1, 0, -3.552713678800501e-15)"
                    />
                    <path
                      fill="#1d4ed8"
                      d="M 229.433 200.53 L 221.379 205.564 L 215.157 202.764 L 229.433 200.53 Z"
                      transform="matrix(1, 0, 0, 1, 0, -3.552713678800501e-15)"
                    />
                    <path
                      fill="#000"
                      d="M 186.448 233.014 C 189.89 235.401 193.988 236.678 198.185 236.673 C 209.54 236.673 218.744 227.53 218.744 216.251 C 218.743 214.999 218.626 213.749 218.395 212.518 C 212.695 220.134 198.865 236.329 186.448 233.014 Z"
                      transform="matrix(1, 0, 0, 1, 0, -3.552713678800501e-15)"
                    />
                    <path
                      fill="#1d4ed8"
                      d="M 217.567 209.436 C 216.148 205.457 213.522 202.012 210.052 199.576 C 206.581 197.139 202.436 195.831 198.185 195.83 C 186.831 195.83 177.626 204.972 177.626 216.251 C 177.624 217.803 177.8 219.35 178.151 220.863 C 176.597 221.099 174.976 219.527 174.976 219.527 C 175.954 221.354 177.396 222.895 179.16 223.997 L 179.182 224.049 C 179.865 224.456 180.579 224.807 181.319 225.1 C 182.283 225.492 183.288 225.772 184.317 225.935 C 191.413 227.157 202.033 223.983 217.567 209.436 Z"
                      transform="matrix(1, 0, 0, 1, 0, -3.552713678800501e-15)"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <b className="font-light">Trip</b> <span className="font-black">Hotel</span>
              </div>
            </div>
            <div>
              <b className="font-bold text-lg">Address</b>
              <div>Room 2023, 22nd floor, IFC Mall, Yeouido, Seoul</div>
            </div>
            <div>
              <b className="font-bold text-lg">Phone</b>
              <div className="font-bold text-lg">(02) 934-2400</div>
            </div>
            <div>
              <b className="font-bold text-lg">Email</b>
              <div>triphotel@example.com</div>
            </div>
            <div>
              <b className="font-bold text-lg">Open Time</b>
              <div>Our store has re-opened for shopping, exchange Every day 11am to 7pm</div>
            </div>
            <div className="flex gap-3 text-gray-400">
              <a href="#none" className="hover:text-blue-950 p-1 text-lg transition-colors duration-500">
                <RiFacebookFill />
              </a>
              <a href="#none" className="hover:text-gray-800 p-1 text-lg transition-colors duration-500">
                <RiTwitterXLine />
              </a>
              <a href="#none" className="hover:text-blue-600 p-1 text-lg transition-colors duration-500">
                <RiLinkedinFill />
              </a>
              <a href="#none" className="hover:text-pink-600 p-1 text-lg transition-colors duration-500">
                <RiInstagramLine />
              </a>
            </div>
          </div>
        </div>
      </div>
      <LoadScript googleMapsApiKey="AIzaSyBgbjUKBLKM0uzPOzgUGM1-HVxK36g_ENk">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          <MarkerF position={center} icon={logo}></MarkerF>
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default ContactUs;
