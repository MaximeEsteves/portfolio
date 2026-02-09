import { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import "./Slideshow.scss";
import data from "./../../../data.json";
import annexeData from "./../../../annexe.json";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Slideshow({ projectId }) {
  const { id } = useParams();
  const allProjects = [...data, ...annexeData];
  const logement = allProjects.find((item) => item.id === id);

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const pictures = logement?.pictures ?? [];
  const total = pictures.length;

  useEffect(() => {
    setIndex(0);
  }, [projectId]);

  const goToPrevious = useCallback(() => {
    if (total <= 1) return;
    setIndex((prevIndex) => (prevIndex === 0 ? total - 1 : prevIndex - 1));
  }, [total]);

  const goToNext = useCallback(() => {
    if (total <= 1) return;
    setIndex((prevIndex) => (prevIndex === total - 1 ? 0 : prevIndex + 1));
  }, [total]);

  const openModal = (src) => {
    previousFocusRef.current = document.activeElement;
    setCurrentImg(src);
    setIsOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setCurrentImg(null);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus?.();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isOpen) return;
      if (event.key === "Escape") {
        closeModal();
      }
      if (event.key === "ArrowRight") {
        goToNext();
      }
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, goToNext, goToPrevious, closeModal]);

  if (total === 0) {
    return null;
  }

  return (
    <div className="slideshow-container">
      {total > 1 && (
        <>
          <button onClick={goToPrevious} className="btn-slideshow left">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={goToNext} className="btn-slideshow right">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}
      <div
        className="slideshow-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {pictures.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${logement.title} ${i + 1}`}
            className="image-logement"
            onClick={() => openModal(src)}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
      <span className="slideshow-indicator">
        {index + 1} / {total}
      </span>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Agrandissement de l'image"
          onClick={closeModal}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="close-btn"
            onClick={closeModal}
            aria-label="Fermer la fenêtre"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <img
            src={currentImg}
            alt="Agrandissement"
            className="lightbox-img"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
