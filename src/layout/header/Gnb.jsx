import { Link, useLocation } from "react-router-dom";
import "../../styles/components/gnb.css";

const Gnb = () => {
  const location = useLocation();
  return (
    <nav className="gnb">
      <ul>
        <li>
          <Link to="/hotel" className={location.pathname === "/hotel" ? "active" : ""}>
            Hotels
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
