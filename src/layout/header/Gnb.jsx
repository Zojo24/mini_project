import { Link, useLocation } from "react-router-dom";
import "../../styles/components/gnb.css";

const Gnb = () => {
  const location = useLocation();
  return (
    <nav className="gnb">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hotel" className={location.pathname === "/hotel" ? "active" : ""}>
            Hotels
          </Link>
        </li>
        <li>
          <Link to="/hotel/th" className={location.pathname === "/hotel/th" ? "active" : ""}>
            Thailand
          </Link>
        </li>
        <li>
          <Link to="/hotel/vi" className={location.pathname === "/hotel/vi" ? "active" : ""}>
            Vietnam
          </Link>
        </li>
        <li>
          <Link to="/hotel/ph" className={location.pathname === "/hotel/ph" ? "active" : ""}>
            Philippines
          </Link>
        </li>
        <li>
          <Link to="/hotel/ma" className={location.pathname === "/hotel/ma" ? "active" : ""}>
            Malaysia
          </Link>
        </li>
        <li>
          <Link to="/hotel/ta" className={location.pathname === "/hotel/ta" ? "active" : ""}>
            Taiwan
          </Link>
        </li>
        <li>
          <Link to="/mypage" className={location.pathname === "/mypage" ? "active" : ""}>
            My Page
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
