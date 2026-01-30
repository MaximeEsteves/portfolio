import "./Home.scss";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Text from "./Text";
import Skills from "./Skills";
import Projet from "./Projet";
import Reseaux from "./Reseaux";
import Photo from "/public/photo-profil.png";

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="home-container">
      <Text
        title="Développeur front-end"
        description="👋 Bonjour, je suis <strong>Maxime Esteves</strong>, développeur web diplômé, je mets mes compétences en front-end au service de projets digitaux ambitieux. Rigoureux et motivé, je souhaite intégrer une entreprise afin de contribuer activement à son développement digital. ☺️"
      />
      <Projet showAll={showAll} setShowAll={setShowAll} />
      <Text
        title="Mes skills"
        description="💪 Titulaire d’un titre professionnel de Développeur Web, je bénéficie également de sept années d’expérience dans la logistique au sein d’un commerce de gros, ainsi que d'une expérience en vente et bureau d’études en électricité. <br> Ce parcours m’a permis de développer des compétences transversales solides, reflétant ma persévérance, mon adaptabilité et mon engagement dans chaque projet entrepris. <br> <br> Je suis autonome, curieux et envieux d'apprentissage ! Découvre mes skills ☺️"
      />
      <Skills />
      <div className="contact-wrapper" id="contact">
        <Text
          title="Contact"
          description="💪 Ma curiosité et mon engagement dans chacune des missions que j'ai menées dans ma carrière et mes réalisations m’ont motivé aujourd'hui à me lancer dans cette reconversion professionnelle. 
          <br>
        
        <br><br>Je suis disponible dans la zone de 📍 Montauban (82) 📍 Toulouse (31), mais également prêt à travailler en 🖥️ 100 % distanciel ! ☺️"
        />
        <img src={Photo} alt="Photo de profil de Maxime Esteves" />
      </div>
      <Reseaux />
    </div>
  );
}
