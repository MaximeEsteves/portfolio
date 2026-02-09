import "./Home.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Skills from "./Skills";
import Projet from "./Projet";
import Contact from "./Contact";
import Photo from "/public/photo-profil.png";

const skillsDescription =
  "💪 Titulaire d’un titre professionnel de Développeur Web, je bénéficie également de sept années d’expérience dans la logistique au sein d’un commerce de gros, ainsi que d'une expérience en vente et bureau d’études en électricité.<br><br>Ce parcours m’a permis de développer des compétences transversales solides, reflétant ma persévérance, mon adaptabilité et mon engagement dans chaque projet entrepris.<br><br>Je suis autonome, curieux et envieux d'apprentissage ! Découvre mes skills ☺️";

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const MotionSection = motion.section;
  const MotionDiv = motion.div;

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const fadeVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="home">
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">Développeur front-end</h1>
            <p className="hero-description">
              👋 Bonjour, je suis <strong>Maxime Esteves</strong>, développeur web
              diplômé, je mets mes compétences en front-end au service de projets
              digitaux ambitieux. Rigoureux et motivé, je souhaite intégrer une
              entreprise afin de contribuer activement à son développement
              digital. ☺️
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Contact
              </a>
              <a
                className="btn btn-secondary"
                href="/CV_Maxime_ESTEVES.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Télécharger le CV
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src={Photo}
              alt="Photo de profil de Maxime Esteves"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <Projet showAll={showAll} setShowAll={setShowAll} />

      <MotionSection
        className="section"
        variants={fadeVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <SectionHeader title="Mes skills" description={skillsDescription} />
          <Skills />
        </div>
      </MotionSection>

      <MotionDiv
        variants={fadeVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Contact />
      </MotionDiv>
    </main>
  );
}
