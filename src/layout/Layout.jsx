import { Outlet, useHref, useLocation, useMatch, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SubVisual from "../components/SubVisual";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const subpage = location.pathname !== "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Header subpage={subpage} />
      <main>
        {subpage && <SubVisual />}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
