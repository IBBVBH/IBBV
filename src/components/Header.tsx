import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>(
    window.location.hash || "#home"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header>
      <nav id="navbar">
        <i className="fa-solid fa-church logo" id="nav_logo">
          IBBV
        </i>
        <ul id="nav_list">
          <li
            className={`nav-item ${activeSection === "#home" ? "active" : ""}`}
          >
            <a href="#home">Início</a>
          </li>
          <li
            className={`nav-item ${activeSection === "#about" ? "active" : ""}`}
          >
            <a href="#about">Agenda da Igreja</a>
          </li>
          <li
            className={`nav-item ${
              activeSection === "#location" ? "active" : ""
            }`}
          >
            <a href="#location">Onde Estamos</a>
          </li>
        </ul>
        <button className="btn-default">
          <a href="#">Entre em contato</a>
        </button>
        <button id="mobile_btn">
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
      <div id="mobile_menu">
        <ul id="mobile_nav_list">
          <li
            className={`nav-item ${activeSection === "#home" ? "active" : ""}`}
          >
            <a href="#home">Início</a>
          </li>
          <li
            className={`nav-item ${activeSection === "#about" ? "active" : ""}`}
          >
            <a href="#about">Agenda da Igreja</a>
          </li>
          <li
            className={`nav-item ${
              activeSection === "#location" ? "active" : ""
            }`}
          >
            <a href="#location">Onde Estamos</a>
          </li>
        </ul>
        <button className="btn-default">
          <a href="src/pages/formulario.html">Entre em contato</a>
        </button>
      </div>
    </header>
  );
};
