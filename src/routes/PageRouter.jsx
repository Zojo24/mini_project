import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Main from "../pages/Main";
import Styleguide from "../pages/Styleguide";
import Mypage from "../pages/Mypage";
import HotelDetail from "../pages/HotelDetail";
import ContactUs from "../pages/Blog";
import HotelAllList from "../pages/HotelAllList";
import ReservationSecond from "../components/Reservation/ReservationSecond";
import ReservationThird from "../components/Reservation/ReservationThird";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Blog from "../pages/Blog";

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
        path: "/hoteldetail",
        element: <HotelDetail />,
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/styleguide",
        element: <Styleguide />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
