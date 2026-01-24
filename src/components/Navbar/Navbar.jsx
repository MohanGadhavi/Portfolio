import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/theme";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import Brightness2Icon from "@mui/icons-material/Brightness2";
// import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from "@material-ui/icons/Close";
import { projects, skills, contact } from "../../portfolio";
import "./Navbar.css";

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        {projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {/* {themeName === "dark" ? <LightModeIcon /> : <Brightness2Icon />} */}
        {themeName === "dark" ? (
          <i className="fa-regular fa-sun fa-xl"></i>
        ) : (
          <i className="fa-solid fa-moon fa-xl"></i>
        )}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {/* {showNavList ? <CloseIcon /> : <MenuIcon />} */}
        {showNavList ? (
          <i className="fa-solid fa-xmark fa-xl"></i>
        ) : (
          <i className="fa-solid fa-bars fa-xl"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
