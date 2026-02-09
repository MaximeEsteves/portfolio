import { useState, useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Logement.scss";
import "./Collapse.scss";

export default function Collapse({ titre, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="collapse">
      <button
        type="button"
        className="collapse-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        {titre}
        <span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`chevron-icon ${isOpen ? "rotate" : ""}`}
          />
        </span>
      </button>
      <div
        id={contentId}
        role="region"
        aria-hidden={!isOpen}
        className={`collapse-content ${isOpen ? "open" : ""}`}
      >
        {Array.isArray(description) ? (
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>
            {description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}
