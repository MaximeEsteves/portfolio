import "./Projet.scss";
import { useRef } from "react";
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
    if (!carouselRef.current) return;
    const amount = carouselRef.current.clientWidth * 0.85;
    carouselRef.current.scrollBy({ left: amount * direction, behavior: "smooth" });
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
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                type="button"
                className="carousel-btn"
                onClick={() => scrollCarousel(1)}
                aria-label="Faire défiler vers la droite"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
              {data.length > 0 ? (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowAll((prev) => !prev)}
                >
                  {showAll
                    ? "Masquer les projets OpenClassrooms"
                    : "Voir les projets OpenClassrooms"}
                </button>
              ) : null}
            </div>
          }
        />

        <MotionDiv
          ref={carouselRef}
          className="projects-carousel"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsToShow.map((project) => (
            <MotionDiv key={project.id} variants={itemVariants}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <ProjectCard project={project} variant="featured" />
              </a>
            </MotionDiv>
          ))}
        </MotionDiv>

        <Annexe visible={showAll} />
      </div>
    </section>
  );
}
