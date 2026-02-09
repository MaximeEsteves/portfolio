import "./ProjectCard.scss";

function ProjectCard({ project, variant = "featured" }) {
  const techs = project.specifications
    ? project.specifications
        .split(",")
        .map((item) => item.trim().replace(/\.$/, ""))
    : [];
  const tags = project.tags || [];
  const isCompact = variant === "compact";

  return (
    <article className={`project-card ${variant}`}>
      <div className="project-media">
        <img
          src={project.cover}
          alt={`Aperçu du projet ${project.title}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-body">
        <div className="project-meta">
          {project.location && <span className="pill">{project.location}</span>}
          {project.note && !isCompact && (
            <span className="project-note">{project.note}</span>
          )}
        </div>
        <h3>{project.titleCard || project.title}</h3>
        {!isCompact && (
          <p className="project-description">{project.description}</p>
        )}
        <div className="project-tags">
          {tags.slice(0, 4).map((tag, index) => (
            <span key={`${tag}-${index}`} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {!isCompact && techs.length > 0 && (
          <div className="project-tech">
            {techs.slice(0, 5).map((tech, index) => (
              <span key={`${tech}-${index}`} className="tech">
                {tech}
              </span>
            ))}
          </div>
        )}
        {!isCompact && (
          <span className="project-cta">
            {project.rating}
            <span className="project-cta-icon" aria-hidden="true">
              ↗
            </span>
          </span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
