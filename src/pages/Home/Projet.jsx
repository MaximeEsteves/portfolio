import "./Projet.scss";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Annexe from "./Annexe";
import data from "../../../data.json";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function Projet({ showAll, setShowAll }) {
  const carouselRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const projectsToShow = data;

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel?.firstElementChild) return;
    const cardWidth = carousel.firstElementChild.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(carousel).columnGap) || 0;
    const step = cardWidth + gap;
    const currentCard = Math.round(carousel.scrollLeft / step);
    carousel.scrollTo({
      left: (currentCard + direction) * step,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: { opacity: 1, y: 0 },
  };
  const MotionDiv = motion.div;

  return (
    <section className="projects-section section" id="projet">
      <div className="container">
        <SectionHeader
          title="Mes réalisations"
          actions={
            <div className="carousel-actions">
              <button
                type="button"
                className="carousel-btn"
                onClick={() => scrollCarousel(-1)}
                aria-label="Faire défiler vers la gauche"
                aria-controls="realisations-carousel"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                type="button"
                className="carousel-btn"
                onClick={() => scrollCarousel(1)}
                aria-label="Faire défiler vers la droite"
                aria-controls="realisations-carousel"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          }
        />

        <MotionDiv
          id="realisations-carousel"
          ref={carouselRef}
          className="projects-carousel"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsToShow.map((project) => (
            <MotionDiv key={project.id} variants={itemVariants}>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ProjectCard project={project} variant="featured" />
                </a>
              ) : (
                <Link to={`/projet/${project.id}`} className="project-link">
                  <ProjectCard project={project} variant="featured" />
                </Link>
              )}
            </MotionDiv>
          ))}
        </MotionDiv>

        <div className="projects-toggle">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            aria-controls="openclassrooms-projects"
          >
            {showAll
              ? "Masquer les projets OpenClassrooms"
              : "Voir les projets OpenClassrooms"}
          </button>
        </div>

        <div id="openclassrooms-projects" hidden={!showAll}>
          <Annexe visible={showAll} />
        </div>
      </div>
    </section>
  );
}
