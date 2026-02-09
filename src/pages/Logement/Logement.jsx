import "./Collapse.scss";
import "./Logement.scss";
import Collapse from "./Collapse";
import Slideshow from "./Slideshow";
import { useParams, Link } from "react-router-dom";
import data from "../../../data.json";
import annexeData from "../../../annexe.json";
import Error from "../Error/Error";

export default function Logement() {
  const { id } = useParams();
  const allProjects = [...data, ...annexeData];
  const logement = allProjects.find((item) => item.id === id);

  if (!logement) {
    return <Error />;
  }

  const currentIndex = allProjects.findIndex((item) => item.id === id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <section className="project-detail section">
      <div className="container">
        <div className="project-header">
          <div>
            <h1 className="project-title">{logement.title}</h1>
            <p className="project-location">{logement.location}</p>
          </div>
          <a
            href={logement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {logement.rating}
          </a>
        </div>

        <div className="project-media">
          <Slideshow projectId={id} />
        </div>

        <div className="project-tags">
          {logement.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-collapses">
          <div>
            <Collapse
              titre="Description"
              description={logement.descriptionBis}
            />
          </div>
          <div>
            <Collapse
              titre="Spécifications techniques"
              description={logement.equipments}
            />
          </div>
        </div>

        <div className="project-next">
          <p className="project-next-label">Projet suivant</p>
          <Link to={`/projet/${nextProject.id}`} className="next-project-link">
            <img
              src={nextProject.host?.picture || nextProject.cover}
              alt={nextProject.host?.name || nextProject.title}
              className="next-project-image"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p>{nextProject.host?.name || nextProject.title}</p>
              <span>Découvrir</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
