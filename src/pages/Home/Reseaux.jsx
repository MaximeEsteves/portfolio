import "./Reseaux.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faTiktok, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Reseaux({ variant = "pill" }) {
  return (
    <div className={`contact-links ${variant}`}>
      <a
        href="/CV_Maxime_ESTEVES.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Télécharger le CV"
        title="Télécharger le CV"
      >
        <FontAwesomeIcon icon={faFileInvoice} aria-hidden="true" />
        <span className="sr-only">CV</span>
      </a>
      <a
        href="https://www.linkedin.com/in/maxime-esteves-7a12b3225"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Profil LinkedIn de Maxime Esteves"
        title="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href="mailto:maxime.esteves81@orange.fr"
        aria-label="Envoyer un email à Maxime Esteves"
        title="Email"
      >
        <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
        <span className="sr-only">Email</span>
      </a>
      <a
        href="https://www.tiktok.com/@maximo_delavego"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Profil TikTok de Maxime Esteves"
        title="TikTok"
      >
        <FontAwesomeIcon icon={faTiktok} aria-hidden="true" />
        <span className="sr-only">TikTok</span>
      </a>
      <a
        href="https://github.com/MaximeEsteves?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Profil Github de Maxime Esteves"
        title="Github"
      >
        <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
        <span className="sr-only">GitHub</span>
      </a>
    </div>
  );
}

export default Reseaux;
