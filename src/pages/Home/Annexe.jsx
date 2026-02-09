import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Annexe.scss";
import ProjectCard from "./ProjectCard";
import annexeData from "../../../annexe.json";
import SectionHeader from "./SectionHeader";

export default function Annexe({ visible }) {
  const carouselRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  if (!visible) return null;

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
    <section className="annexe-section">
      <SectionHeader
        title="Mes projets OpenClassrooms"
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
          </div>
        }
      />
      <MotionDiv
        ref={carouselRef}
        className="projects-carousel annexe-carousel"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {annexeData.slice(0, 6).map((item) => (
          <MotionDiv key={item.id} variants={itemVariants}>
            <Link to={`/projet/${item.id}`} className="project-link">
              <ProjectCard project={item} variant="compact" />
            </Link>
          </MotionDiv>
        ))}
      </MotionDiv>
    </section>
  );
}
