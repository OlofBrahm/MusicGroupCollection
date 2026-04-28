import { NavLink } from "react-router-dom";
import "./NavBar.css";
<nav></nav>

function getLinkClassName({ isActive }) {
  return isActive ? "active-link" : "";
}

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={getLinkClassName} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/groups" className={getLinkClassName}>
            All Groups
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-group" className={getLinkClassName}>
            Add Group
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
