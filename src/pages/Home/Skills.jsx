import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const softSkills = [
  "Rigueur",
  "Autonomie",
  "Adaptabilité",
  "Curiosité",
  "Esprit d'équipe",
  "Sens du service",
];

function Skills() {
  return (
    <div className="skills-wrapper">
      <div className="skills-columns">
        <div className="skills-block">
          <h3>Diplôme</h3>
          <div className="skills-item">
            <FontAwesomeIcon icon={faGraduationCap} />
            <div>
              <p>Bac +2 Développeur Web - 2025</p>
              <span>Spécialisation React et NodeJS</span>
              <br />
              <span>OpenClassrooms (100% distanciel)</span>
            </div>
          </div>
          <div className="skills-item">
            <FontAwesomeIcon icon={faGraduationCap} />
            <div>
              <p>BTS FED option C 2015 - 2017</p>
              <span>
                Fluides, Énergies, Domotique option Bâtiment communicants (31)
              </span>
            </div>
          </div>
          <div className="skills-item">
            <FontAwesomeIcon icon={faGraduationCap} />
            <div>
              <p>BAC Pro Électrotechnique 2012 - 2015</p>
              <span>
                Electrotechnique energie equipements communicants (81)
              </span>
              <br />
              <span>Mention assez bien.</span>
            </div>
          </div>
          <div className="skills-item">
            <FontAwesomeIcon icon={faGraduationCap} />
            <div>
              <p>BEP Électrotechnique 2012 - 2014</p>
              <span>
                Electrotechnique energie equipements communicants (81)
              </span>
            </div>
          </div>
        </div>

        <div className="skills-block">
          <h3>Expérience</h3>
          <div className="skills-item">
            <FontAwesomeIcon icon={faBriefcase} />
            <div>
              <p>Asept InMed - Employé logistique 2023 - 2024</p>
              <span>
                Réception et préparation de commandes de matériels médicaux.
              </span>
            </div>
          </div>
          <div className="skills-item">
            <FontAwesomeIcon icon={faBriefcase} />
            <div>
              <p>Malrieu - Coordinateur logistique 2019 - 2022</p>
              <span>
                Gestion de la chaîne et du dépôt logistique. Supervision d'une
                équipe de 3 personnes.
              </span>
            </div>
          </div>
          <div className="skills-item">
            <FontAwesomeIcon icon={faBriefcase} />
            <div>
              <p>Malrieu - Vendeur/BE électricité 2017 - 2018</p>
              <span>
                Vente et conseil en électricité aux particuliers et
                professionnels.
              </span>
            </div>
          </div>
          <div className="skills-item">
            <FontAwesomeIcon icon={faBriefcase} />
            <div>
              <p>SMÉlectricité - Électricien 2013 - 2017</p>
              <span>
                Électricité générale sur habitations neuves et/ou rénovées.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-aside">
        <div className="soft-skills">
          <h3>Soft skills</h3>
          <div className="soft-list">
            {softSkills.map((skill) => (
              <span key={skill} className="soft-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-tech">
          <a
            href="https://developer.mozilla.org/fr/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/html-5.svg"
              alt="HTML5"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://nodejs.org/fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/nodejs.png"
              alt="Node.js"
              loading="lazy"
              decoding="async"
              className="theme-dark"
            />
            <img
              src="/icon/nodejs-2.png"
              alt="Node.js"
              className="theme-light"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/netlify.png"
              alt="Netlify"
              className="theme-dark"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/icon/netlify-2.png"
              alt="Netlify"
              className="theme-light"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://www.openai.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/chatgpt.png"
              alt="ChatGPT"
              className="rotate theme-dark"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/icon/chatgpt-2.png"
              alt="ChatGPT"
              className="rotate theme-light"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://developer.mozilla.org/fr/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/css-3.svg"
              alt="CSS3"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/express.png"
              alt="Express"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/vercel.png"
              alt="Vercel"
              className="theme-light"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/icon/vercel-2.png"
              alt="Vercel"
              className="theme-dark"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://www.claude.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/claude.png"
              alt="Claude"
              loading="lazy"
              decoding="async"
              className="theme-dark"
            />
            <img
              src="/icon/claude-2.png"
              alt="Claude"
              className="theme-light"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/javascript.svg"
              alt="JavaScript"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/mongodb.png"
              alt="MongoDB"
              className="theme-light"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/icon/mongodb-2.png"
              alt="MongoDB"
              className="theme-dark"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://render.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/render.png"
              alt="Render"
              className="theme-dark"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/icon/render-2.png"
              alt="Render"
              className="theme-light"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/figma.png"
              alt="Figma"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/react.svg"
              alt="React"
              className="rotate"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://www.php.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/php.png"
              alt="PHP"
              loading="lazy"
              decoding="async"
              className="theme-dark"
            />
            <img
              src="/icon/php-2.png"
              className="theme-light"
              alt="PHP"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://railway.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/railway.png"
              alt="Railway"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/github.png"
              alt="GitHub"
              loading="lazy"
              decoding="async"
              className="theme-dark"
            />
            <img
              src="/icon/github-2.png"
              alt="GitHub"
              loading="lazy"
              decoding="async"
              className="theme-light"
            />
          </a>
          <a
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/scss.svg"
              alt="SCSS"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://www.mysql.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/mysql.svg"
              alt="MySQL"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://www.webador.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/webador.svg"
              alt="Webador"
              className="rotate"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://copilot.microsoft.com/chats/Fxhe8Wgi2Xh424BUP2JNb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/copilot.png"
              alt="Copilot"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/tailwindcss.png"
              alt="Tailwind CSS"
              loading="lazy"
              decoding="async"
            />
          </a>

          <a
            href="https://notion.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/notion.png"
              alt="Notion"
              loading="lazy"
              decoding="async"
              className="theme-dark"
            />
            <img
              src="/icon/notion-2.png"
              alt="Notion"
              loading="lazy"
              decoding="async"
              className="theme-light"
            />
          </a>
          <a
            href="https://supabase.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/supabase.png"
              alt="Supabase"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://chatgpt.com/codex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/codex.png"
              alt="Codex"
              loading="lazy"
              decoding="async"
              className="theme-light"
            />
            <img
              src="/icon/codex-2.png"
              className="theme-dark"
              alt="Codex"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Skills;
