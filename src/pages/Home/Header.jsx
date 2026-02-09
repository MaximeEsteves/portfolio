import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../../public/logo-em.svg";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faBars,
  faXmark,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const stored = window.localStorage.getItem("theme");
    if (stored) return stored;
    return "dark";
  });

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 120) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } });
    setIsOpen(false);
  };

  return (
    <header className={`site-header ${isHidden ? "is-hidden" : ""}`}>
      <nav
        className="nav-container container"
        aria-label="Navigation principale"
      >
        <div className="brand">
          <Link to="/" className="brand-link" aria-label="Retour à l'accueil">
            <img className="brand-logo" src={Logo} alt="Logo Maxime Esteves" />
            <div className="brand-text">
              <span>Maxime Esteves</span>
              <span className="brand-subtitle">Développeur front-end</span>
            </div>
          </Link>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>

        <div
          id="primary-navigation"
          className={`nav-links ${isOpen ? "open" : ""}`}
        >
          <Link to="/" onClick={() => setIsOpen(false)}>
            Accueil
          </Link>
          <button type="button" onClick={() => goToSection("projet")}>
            Projet
          </button>
          <button type="button" onClick={() => goToSection("contact")}>
            Contact
          </button>
          <button
            type="button"
            className="theme-toggle"
            aria-label={
              theme === "dark" ? "Activer le mode jour" : "Activer le mode nuit"
            }
            onClick={() =>
              setTheme((prev) => (prev === "dark" ? "light" : "dark"))
            }
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>
          <a
            className="nav-cta"
            href="/CV_Maxime_ESTEVES.pdf"
            aria-label="Télécharger le CV de Maxime Esteves"
            title="Télécharger le CV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFileInvoice} aria-hidden="true" />
            Télécharger le CV
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
