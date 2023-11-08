import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 bg-light side-navbar">
      <ul className="nav  nav-flush flex-column mb-auto text-center nav-links">
        <li className="nav-item">
          <NavLink to="/" className="nav-link py-3 border-bottom" title="">
            <div className="nav-item-heading">Inventory</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sales" className="nav-link py-3 border-bottom" title="">
            <div className="nav-item-heading">Sales</div>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/reports"
            className="nav-link py-3 border-bottom"
            title=""
          >
            <div className="nav-item-heading">Reports</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
