import { createBrowserRouter } from "react-router-dom";

import ReservationSecond from "../components/Reservation/ReservationSecond";
import ReservationThird from "../components/Reservation/ReservationThird";
import Layout from "../layout/Layout";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import FindAccount from "../pages/FindAccount";
import HotelAllList from "../pages/HotelAllList";
import HotelDetail from "../pages/HotelDetail";
import HotelEdit from "../pages/HotelEdit";
import HotelWrite from "../pages/HotelWrite";
import Main from "../pages/Main";
import Mypage from "../pages/Mypage";
import NotFound from "../pages/NotFound";
import Styleguide from "../pages/Styleguide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/hotel",
        element: <HotelAllList />,
      },
      {
        path: "/hoteldetail/:hotelId",
        element: <HotelDetail />,
      },
      {
        path: "/hotelwrite",
        element: <HotelWrite />,
      },
      {
        path: "/hoteledit/:hotelId",
        element: <HotelEdit />,
      },
      {
        path: "/reservation",
        element: <ReservationSecond />,
      },
      {
        path: "/reservation/done/:reservationId",
        element: <ReservationThird />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
      {
        path: "/hotel/:hotelcategory",
        element: <HotelAllList />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/styleguide",
        element: <Styleguide />,
      },
      {
        path: "/findaccount",
        element: <FindAccount />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
