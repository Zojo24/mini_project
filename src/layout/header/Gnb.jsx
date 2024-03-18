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
            Hotel
          </Link>
        </li>
        <li>
          <Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About Us
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
