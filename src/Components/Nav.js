import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">MyStore</Link></div>

      <ul className="nav-links">

        <li className="dropdown">
          <Link to="/">Products</Link>
        </li>

        <li className="dropdown">
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
      
    </nav>
  );
}

export default Nav;
