import "./NavigationBar.css";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
        <header className="header">
          <label className="title">CK</label>
          
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink
                className="button"
                to="/projects"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5 }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className="button"
                to="/experience"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5}}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                className="button"
                to="/3dprinting"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5}}
              >
                3D Printing
              </NavLink>
            </li>
            <li>
              <a href="../pdfs/Resume.pdf" className="button" target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
          </ul>
        </header>
      </div>
  );
}

export default NavBar;