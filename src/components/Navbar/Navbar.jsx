import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { useState, useEffect } from "react";
import downloadIcon from "../../assets/download.png";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "skills", "projects", "contacts"];
      let currentSection = "home";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 200) {
          currentSection = section;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Utsab Khatiwada.pdf";
    link.click();
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Animated Hello World terminal" style={{ width: 80, height: 46, cursor: "pointer" }} onClick={scrollToTop} />

      <ul className="nav-links">
        <li>
          <a href="#experience" className={activeSection === "experience" ? "active" : ""}>
            EXPERIENCE
          </a>
        </li>
        <li>
          <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
            SKILLS
          </a>
        </li>
        <li>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#contacts" className={activeSection === "contacts" ? "active" : ""}>
            CONTACT
          </a>
        </li>
        <li className="resume-link">
          <a href="#resume" className="resume-button" onClick={downloadResume}>
            <span>RESUME</span>
            <img src={downloadIcon} alt="Resume Icon" className="downloadIcon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
