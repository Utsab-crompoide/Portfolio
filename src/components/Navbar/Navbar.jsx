import "./Navbar.css";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Animated Hello World terminal" style={{ width: 80, height: 46 }} />

      <ul className="nav-links">
        <li>
          <a href="#experience">EXPERIENCES</a>
        </li>
        <li>
          <a href="#contact">SKILLS</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
        <li className="resume-link">
          <a href="#resume">RESUME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
