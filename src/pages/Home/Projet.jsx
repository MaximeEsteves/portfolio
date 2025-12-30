// src/components/Projet/Projet.jsx
import "./Projet.scss";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Annexe from "./Annexe";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

import Description from "./Description";
import { Link } from "react-router-dom";
import data from "../../../data.json";
import Card from "./Card";

export default function Projet({ showAll, setShowAll }) {
  const firstExtraRef = useRef(null);
  const lastVisibleRef = useRef(null);
  // nouveau : ref pour le container et timeline
  const containerRef = useRef(null);

  const projetsToShow = showAll ? data : data.slice(0, 3);

  // ScrollIntoView pour “Voir plus / Voir moins”
  useEffect(() => {
    if (showAll && firstExtraRef.current) {
      firstExtraRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (!showAll && lastVisibleRef.current) {
      lastVisibleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showAll]);

  return (
    <div className="card-home" ref={containerRef} id="projet">
      <h2>Mes réalisations</h2>
      {projetsToShow.map((profil, index) => {
        const isExtra = showAll && index === 3;
        const isLastVisible = !showAll && index === 2;
        return (
          <div
            className={`card-wrapper${isExtra ? " fade-in" : ""}`}
            key={profil.id + index}
            ref={
              isExtra ? firstExtraRef : isLastVisible ? lastVisibleRef : null
            }
          >
            {index % 2 === 0 ? (
              <>
                <div className="Description">
                  <Description
                    title={profil.title}
                    description={profil.description}
                    specifications={profil.specifications}
                  />
                </div>
                <Link target="_blank" to={profil.link}>
                  <Card
                    picture={profil.cover}
                    title={profil.title}
                    width="475px"
                    height="258px"
                  />
                </Link>
              </>
            ) : (
              <>
                <Link target="_blank" to={profil.link}>
                  <Card
                    picture={profil.cover}
                    title={profil.title}
                    width="475px"
                    height="258px"
                  />
                </Link>
                <div className="Description">
                  <Description
                    title={profil.title}
                    description={profil.description}
                    specifications={profil.specifications}
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
      <Annexe visible={showAll} />
      {data.length > 3 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="voir-plus-btn"
        >
          {showAll ? "Voir moins" : "Voir plus"}
        </button>
      )}
    </div>
  );
}
